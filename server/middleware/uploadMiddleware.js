// File: server/middleware/uploadMiddleware.js
const path = require('path');
const multer = require('multer');
const { AppError } = require('../utils/appError');

// Define storage strategy for multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    // Determine destination based on file type
    let uploadPath = './public/uploads/';
    
    if (file.fieldname === 'projectImages') {
      uploadPath += 'projects/';
    } else if (file.fieldname === 'teamMemberPhoto') {
      uploadPath += 'team/';
    } else if (file.fieldname === 'testimonialPhoto') {
      uploadPath += 'testimonials/';
    } else if (file.fieldname === 'careerDocument') {
      uploadPath += 'careers/';
    } else {
      uploadPath += 'misc/';
    }
    
    cb(null, uploadPath);
  },
  filename: (req, file, cb) => {
    // Create unique filename with original extension
    const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1E9)}`;
    const ext = path.extname(file.originalname);
    cb(null, `${file.fieldname}-${uniqueSuffix}${ext}`);
  }
});

// File filter function
const fileFilter = (req, file, cb) => {
  // Accept images, PDFs, and documents based on field name
  if (file.fieldname === 'projectImages' || file.fieldname === 'testimonialPhoto' || file.fieldname === 'teamMemberPhoto') {
    // For images
    if (!file.mimetype.startsWith('image/')) {
      return cb(new AppError('Not an image! Please upload only images.', 400), false);
    }
  } else if (file.fieldname === 'careerDocument') {
    // For resumes and documents
    const allowedMimes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
    if (!allowedMimes.includes(file.mimetype)) {
      return cb(new AppError('Invalid file type! Please upload PDF or Word documents only.', 400), false);
    }
  }
  
  cb(null, true);
};

// Initialize multer with our configurations
const upload = multer({
  storage: storage,
  fileFilter: fileFilter,
  limits: {
    fileSize: process.env.MAX_FILE_UPLOAD || 5000000 // 5MB by default
  }
});

// Export multer instance directly to use fields(), single(), array() etc.
exports.upload = upload;
// Export configured uploader middlewares for different scenarios
exports.uploadProjectImages = upload.array('projectImages', 10); // Allow up to 10 project images
exports.uploadTeamMemberPhoto = upload.single('teamMemberPhoto');
exports.uploadTestimonialPhoto = upload.single('testimonialPhoto');
exports.uploadCareerDocument = upload.single('careerDocument');