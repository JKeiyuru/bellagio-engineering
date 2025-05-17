// File: server/utils/emailSender.js

const nodemailer = require('nodemailer');

/**
 * Send email
 * @param {Object} options - Email options
 * @returns {Promise<void>}
 */
const sendEmail = async (options) => {
  // Create transporter
  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });
  
  // Define email options
  const mailOptions = {
    from: `Bellagio Engineering <${process.env.EMAIL_FROM}>`,
    to: options.email,
    subject: options.subject,
    text: options.message,
    html: options.html
  };
  
  // Send email
  await transporter.sendMail(mailOptions);
};

/**
 * Send contact confirmation email
 * @param {Object} contact - Contact object
 * @returns {Promise<void>}
 */
const sendContactConfirmation = async (contact) => {
  const subject = 'Thank you for contacting Bellagio Engineering';
  const html = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
      <div style="text-align: center; margin-bottom: 20px;">
        <img src="https://bellagioengineering.co.ke/logo.png" alt="Bellagio Engineering" style="max-width: 200px;">
      </div>
      
      <h2 style="color: #333;">Thank You for Contacting Us</h2>
      
      <p>Dear ${contact.name},</p>
      
      <p>Thank you for reaching out to Bellagio Engineering. We have received your message and our team will get back to you as soon as possible.</p>
      
      <p>Here's a summary of your message:</p>
      
      <div style="background-color: #f5f5f5; padding: 15px; border-radius: 5px; margin: 20px 0;">
        <p><strong>Name:</strong> ${contact.name}</p>
        <p><strong>Email:</strong> ${contact.email}</p>
        <p><strong>Phone:</strong> ${contact.phone || 'Not provided'}</p>
        <p><strong>Subject:</strong> ${contact.subject}</p>
        <p><strong>Message:</strong> ${contact.message}</p>
      </div>
      
      <p>We typically respond within 24-48 business hours.</p>
      
      <p>Best regards,<br>Bellagio Engineering Team</p>
      
      <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; font-size: 12px; color: #777;">
        <p>© ${new Date().getFullYear()} Bellagio Engineering. All rights reserved.</p>
        <p>Nairobi, Kenya</p>
      </div>
    </div>
  `;
  
  await sendEmail({
    email: contact.email,
    subject,
    html
  });
};

/**
 * Send job application confirmation email
 * @param {Object} application - Application object
 * @returns {Promise<void>}
 */
const sendApplicationConfirmation = async (application) => {
  const subject = 'Application Received - Bellagio Engineering';
  const html = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
      <div style="text-align: center; margin-bottom: 20px;">
        <img src="https://bellagioengineering.co.ke/logo.png" alt="Bellagio Engineering" style="max-width: 200px;">
      </div>
      
      <h2 style="color: #333;">Application Received</h2>
      
      <p>Dear ${application.firstName} ${application.lastName},</p>
      
      <p>Thank you for applying for the <strong>${application.position}</strong> position at Bellagio Engineering. We have received your application and our HR team will review it shortly.</p>
      
      <p>If your qualifications match our requirements, we will contact you for the next steps in the recruitment process.</p>
      
      <p>Best regards,<br>Bellagio Engineering HR Team</p>
      
      <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; font-size: 12px; color: #777;">
        <p>© ${new Date().getFullYear()} Bellagio Engineering. All rights reserved.</p>
        <p>Nairobi, Kenya</p>
      </div>
    </div>
  `;
  
  await sendEmail({
    email: application.email,
    subject,
    html
  });
};

/**
 * Send notification email to admin
 * @param {Object} options - Email options
 * @returns {Promise<void>}
 */
const sendAdminNotification = async (options) => {
  const subject = options.subject || 'New Notification from Bellagio Engineering Website';
  const html = options.html || `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
      <h2 style="color: #333;">${options.title || 'New Notification'}</h2>
      
      <p>${options.message}</p>
      
      <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; font-size: 12px; color: #777;">
        <p>© ${new Date().getFullYear()} Bellagio Engineering. All rights reserved.</p>
      </div>
    </div>
  `;
  
  // Admin email might be different from the general email
  const adminEmail = process.env.ADMIN_EMAIL || process.env.EMAIL_USER;
  
  await sendEmail({
    email: adminEmail,
    subject,
    html
  });
};

module.exports = {
  sendEmail,
  sendContactConfirmation,
  sendApplicationConfirmation,
  sendAdminNotification
};