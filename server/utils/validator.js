// File: server/utils/validator.js
const validator = require('validator');
const { AppError } = require('./appError');

/**
 * Validation utility for form inputs
 */
class Validator {
  /**
   * Validate contact form input
   * @param {Object} contactData - Contact form data
   * @throws {AppError} If validation fails
   */
  static validateContact(contactData) {
    const { name, email, subject, message } = contactData;
    
    if (!name || !email || !subject || !message) {
      throw new AppError('Please provide name, email, subject and message', 400);
    }
    
    if (!validator.isEmail(email)) {
      throw new AppError('Please provide a valid email', 400);
    }
    
    if (name.length < 2 || name.length > 100) {
      throw new AppError('Name must be between 2 and 100 characters', 400);
    }
    
    if (subject.length < 5 || subject.length > 100) {
      throw new AppError('Subject must be between 5 and 100 characters', 400);
    }
    
    if (message.length < 10 || message.length > 5000) {
      throw new AppError('Message must be between 10 and 5000 characters', 400);
    }
    
    return true;
  }
  
  /**
   * Validate job application input
   * @param {Object} applicationData - Job application data
   * @throws {AppError} If validation fails
   */
  static validateApplication(applicationData) {
    const { 
      firstName, lastName, email, phone, position, 
      experience, education, coverLetter 
    } = applicationData;
    
    if (!firstName || !lastName || !email || !phone || !position) {
      throw new AppError('Please provide all required fields', 400);
    }
    
    if (!validator.isEmail(email)) {
      throw new AppError('Please provide a valid email', 400);
    }
    
    if (!validator.isMobilePhone(phone, 'any')) {
      throw new AppError('Please provide a valid phone number', 400);
    }
    
    if (firstName.length < 2 || firstName.length > 50) {
      throw new AppError('First name must be between 2 and 50 characters', 400);
    }
    
    if (lastName.length < 2 || lastName.length > 50) {
      throw new AppError('Last name must be between 2 and 50 characters', 400);
    }
    
    if (coverLetter && (coverLetter.length < 50 || coverLetter.length > 5000)) {
      throw new AppError('Cover letter must be between 50 and 5000 characters', 400);
    }
    
    return true;
  }
  
  /**
   * Validate project data
   * @param {Object} projectData - Project data
   * @throws {AppError} If validation fails
   */
  static validateProject(projectData) {
    const { title, description, category, location, client } = projectData;
    
    if (!title || !description || !category || !location || !client) {
      throw new AppError('Please provide all required fields', 400);
    }
    
    if (title.length < 5 || title.length > 100) {
      throw new AppError('Title must be between 5 and 100 characters', 400);
    }
    
    if (description.length < 20 || description.length > 5000) {
      throw new AppError('Description must be between 20 and 5000 characters', 400);
    }
    
    return true;
  }
  
  /**
   * Validate testimonial data
   * @param {Object} testimonialData - Testimonial data
   * @throws {AppError} If validation fails
   */
  static validateTestimonial(testimonialData) {
    const { name, company, position, message } = testimonialData;
    
    if (!name || !company || !position || !message) {
      throw new AppError('Please provide all required fields', 400);
    }
    
    if (name.length < 2 || name.length > 100) {
      throw new AppError('Name must be between 2 and 100 characters', 400);
    }
    
    if (message.length < 20 || message.length > 1000) {
      throw new AppError('Message must be between 20 and 1000 characters', 400);
    }
    
    return true;
  }
  
  /**
   * Validate career/job posting data
   * @param {Object} careerData - Career data
   * @throws {AppError} If validation fails
   */
  static validateCareer(careerData) {
    const { 
      title, description, requirements, responsibilities, 
      location, type, salary, deadline 
    } = careerData;
    
    if (!title || !description || !requirements || !responsibilities || !location || !type) {
      throw new AppError('Please provide all required fields', 400);
    }
    
    if (title.length < 5 || title.length > 100) {
      throw new AppError('Title must be between 5 and 100 characters', 400);
    }
    
    if (description.length < 20 || description.length > 5000) {
      throw new AppError('Description must be between 20 and 5000 characters', 400);
    }
    
    if (deadline && !validator.isDate(deadline)) {
      throw new AppError('Please provide a valid deadline date', 400);
    }
    
    return true;
  }
  
  /**
   * Validate user registration data
   * @param {Object} userData - User registration data
   * @throws {AppError} If validation fails
   */
  static validateUser(userData) {
    const { name, email, password, passwordConfirm } = userData;
    
    if (!name || !email || !password || !passwordConfirm) {
      throw new AppError('Please provide all required fields', 400);
    }
    
    if (!validator.isEmail(email)) {
      throw new AppError('Please provide a valid email', 400);
    }
    
    if (password !== passwordConfirm) {
      throw new AppError('Passwords do not match', 400);
    }
    
    if (!validator.isStrongPassword(password, {
      minLength: 8,
      minLowercase: 1,
      minUppercase: 1,
      minNumbers: 1,
      minSymbols: 1
    })) {
      throw new AppError(
        'Password must be at least 8 characters and contain at least one uppercase letter, ' +
        'one lowercase letter, one number and one special character',
        400
      );
    }
    
    return true;
  }
}

module.exports = Validator;