// File: server/controllers/contactController.js
const Contact = require('../models/Contact');
const asyncHandler = require('express-async-handler');
const nodemailer = require('nodemailer');

// @desc    Get single contact submission (Admin only)
// @route   GET /api/contact/:id
// @access  Private (Admin)
exports.getContact = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);

  if (!contact) {
    return res.status(404).json({
      success: false,
      message: 'Contact not found'
    });
  }

  res.status(200).json({
    success: true,
    data: contact
  });
});

// @desc    Update contact status (Admin only)
// @route   PUT /api/contact/:id
// @access  Private (Admin)
exports.updateContactStatus = asyncHandler(async (req, res) => {
  const { status } = req.body;

  if (!status) {
    return res.status(400).json({
      success: false,
      message: 'Please provide status'
    });
  }

  let contact = await Contact.findById(req.params.id);

  if (!contact) {
    return res.status(404).json({
      success: false,
      message: 'Contact not found'
    });
  }

  contact = await Contact.findByIdAndUpdate(
    req.params.id,
    { status },
    {
      new: true,
      runValidators: true
    }
  );

  res.status(200).json({
    success: true,
    data: contact
  });
});

// @desc    Delete contact (Admin only)
// @route   DELETE /api/contact/:id
// @access  Private (Admin)
exports.deleteContact = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);

  if (!contact) {
    return res.status(404).json({
      success: false,
      message: 'Contact not found'
    });
  }

  await contact.deleteOne();

  res.status(200).json({
    success: true,
    data: {}
  });
});

// @desc    Submit contact form
// @route   POST /api/contact
// @access  Public
exports.submitContactForm = asyncHandler(async (req, res) => {
  const contact = await Contact.create(req.body);

  // Send notification email to admin
  try {
    const transporter = nodemailer.createTransport({
      service: process.env.EMAIL_SERVICE,
      auth: {
        user: process.env.EMAIL_USERNAME,
        pass: process.env.EMAIL_PASSWORD
      }
    });

    const mailOptions = {
      from: process.env.EMAIL_FROM,
      to: process.env.EMAIL_TO,
      subject: `New Contact Message: ${req.body.subject}`,
      html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${req.body.name}</p>
        <p><strong>Email:</strong> ${req.body.email}</p>
        <p><strong>Phone:</strong> ${req.body.phone || 'Not provided'}</p>
        <p><strong>Subject:</strong> ${req.body.subject}</p>
        <p><strong>Message:</strong></p>
        <p>${req.body.message}</p>
      `
    };

    await transporter.sendMail(mailOptions);
  } catch (error) {
    console.error('Email notification error:', error);
    // Continue even if email fails, as the contact was saved to DB
  }

  res.status(201).json({
    success: true,
    data: contact
  });
});

// @desc    Get all contact submissions (Admin only)
// @route   GET /api/contact
// @access  Private (Admin)
exports.getContacts = asyncHandler(async (req, res) => {
  const { status } = req.query;
  const query = {};

  if (status) {
    query.status = status;
  }

  const contacts = await Contact.find(query).sort({ createdAt: -1 });

  res.status(200).json({
    success: true,
    count: contacts.length,
    data: contacts
  });
});
