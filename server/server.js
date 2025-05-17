// File: server/server.js
/**
 * ─────────────────────────────────────────────────────────
 *  Bellagio Engineering – Express Server (MERN backend)
 *  Combines security, logging, compression, rate-limiting,
 *  global error handling, Mongo DB connection, and nodemon-
 *  friendly startup. Each section is clearly commented.
 * ─────────────────────────────────────────────────────────
 */

const path             = require('path');
const express          = require('express');
const mongoose         = require('mongoose');
const dotenv           = require('dotenv');
const morgan           = require('morgan');
const cors             = require('cors');
const helmet           = require('helmet');
const compression      = require('compression');
const xss              = require('xss-clean');
const mongoSanitize    = require('express-mongo-sanitize');
const rateLimit        = require('express-rate-limit');
const { errorHandler } = require('./middleware/errorMiddleware');

// Load .env variables
dotenv.config();

// ─────────────────────────────────────────────────────────
// MongoDB Connection
// ─────────────────────────────────────────────────────────
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('MongoDB connected');
  } catch (err) {
    console.error('MongoDB connection error:', err);
    process.exit(1);
  }
};
connectDB();

// ─────────────────────────────────────────────────────────
// Express App & Core Middleware
// ─────────────────────────────────────────────────────────
const app = express();

app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true, limit: '50mb' }));

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(cors());
app.use(helmet());
app.use(compression());
app.use(xss());
app.use(mongoSanitize());

// Rate-limit all API routes
app.use(
  '/api',
  rateLimit({
    windowMs: 10 * 60 * 1000, // 10 min
    max: 100,
    message: 'Too many requests from this IP, please try again later.'
  })
);

// ─────────────────────────────────────────────────────────
// Static folder for file uploads
// ─────────────────────────────────────────────────────────
app.use('/uploads', express.static(path.join(__dirname, 'public/uploads')));

// ─────────────────────────────────────────────────────────
// Route Imports & Mounting
// ─────────────────────────────────────────────────────────
app.use('/api/projects',      require('./routes/projectRoutes'));
app.use('/api/careers',       require('./routes/careerRoutes'));
app.use('/api/contact',       require('./routes/contactRoutes'));
app.use('/api/admin',         require('./routes/adminRoutes'));
app.use('/api/markets',       require('./routes/marketRoutes'));
app.use('/api/testimonials',  require('./routes/testimonialRoutes'));
app.use('/api/applications',  require('./routes/applicationRoutes'));

// Health-check
app.get('/api/health', (req, res) =>
  res.status(200).json({
    success: true,
    message: 'Server is running correctly',
    environment: process.env.NODE_ENV
  })
);

// ─────────────────────────────────────────────────────────
// Global Error Handler
// ─────────────────────────────────────────────────────────
app.use(errorHandler);

// ─────────────────────────────────────────────────────────
// Serve Front-End (production)
// ─────────────────────────────────────────────────────────
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/dist')));
  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, '../client', 'dist', 'index.html'))
  );
}

// ─────────────────────────────────────────────────────────
// Start Server
// ─────────────────────────────────────────────────────────
const PORT = process.env.PORT || 5000;
const server = app.listen(PORT, () =>
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);

// Handle unhandled promise rejections
process.on('unhandledRejection', (err) => {
  console.error(`Unhandled Rejection: ${err.message}`);
  server.close(() => process.exit(1));
});

module.exports = app;
