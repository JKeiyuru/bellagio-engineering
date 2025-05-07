/* eslint-disable no-unused-vars */
// File: client/src/components/careers/ApplicationForm.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaTimes, FaUpload } from 'react-icons/fa';

const ApplicationForm = ({ job, onClose }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    education: '',
    experience: '',
    coverLetter: '',
    cvFile: null
  });
  
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [fileName, setFileName] = useState('');

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required';
    }
    
    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    }
    
    if (!formData.experience.trim()) {
      newErrors.experience = 'Experience is required';
    }
    
    if (!formData.cvFile) {
      newErrors.cvFile = 'CV/Resume is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
    
    // Clear error when field is being edited
    if (errors[name]) {
      setErrors(prevState => ({
        ...prevState,
        [name]: ''
      }));
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Check file size (max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        setErrors(prevState => ({
          ...prevState,
          cvFile: 'File size should not exceed 5MB'
        }));
        return;
      }
      
      // Check file type
      const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
      if (!allowedTypes.includes(file.type)) {
        setErrors(prevState => ({
          ...prevState,
          cvFile: 'Only PDF or DOC/DOCX files are allowed'
        }));
        return;
      }
      
      setFormData(prevState => ({
        ...prevState,
        cvFile: file
      }));
      
      setFileName(file.name);
      
      // Clear error
      if (errors.cvFile) {
        setErrors(prevState => ({
          ...prevState,
          cvFile: ''
        }));
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      try {
        setIsSubmitting(true);
        
        // This will be replaced with actual API call
        // Mock API call
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        // Create form data for file upload
        // This will be used when connecting to backend
        const submissionData = new FormData();
        Object.keys(formData).forEach(key => {
          submissionData.append(key, formData[key]);
        });
        
        // Reset form
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          address: '',
          education: '',
          experience: '',
          coverLetter: '',
          cvFile: null
        });
        setFileName('');
        
        setSubmitStatus({
          type: 'success',
          message: 'Thank you! Your application has been submitted successfully.'
        });
        
        // Close form after 3 seconds on success
        setTimeout(() => {
          onClose();
        }, 3000);
      } catch (error) {
        setSubmitStatus({
          type: 'error',
          message: 'Something went wrong. Please try again later.'
        });
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="bg-white rounded-lg shadow-lg p-6 relative"
    >
      <button 
        onClick={onClose} 
        className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 focus:outline-none"
        aria-label="Close application form"
      >
        <FaTimes className="h-5 w-5" />
      </button>
      
      {submitStatus && (
        <div className={`p-4 mb-6 rounded-md ${
          submitStatus.type === 'success' ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'
        }`}>
          {submitStatus.message}
        </div>
      )}
      
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
              First Name *
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                errors.firstName ? 'border-red-500' : 'border-gray-300'
              }`}
              disabled={isSubmitting}
            />
            {errors.firstName && (
              <p className="mt-1 text-sm text-red-600">{errors.firstName}</p>
            )}
          </div>
          
          <div>
            <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
              Last Name *
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                errors.lastName ? 'border-red-500' : 'border-gray-300'
              }`}
              disabled={isSubmitting}
            />
            {errors.lastName && (
              <p className="mt-1 text-sm text-red-600">{errors.lastName}</p>
            )}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                errors.email ? 'border-red-500' : 'border-gray-300'
              }`}
              disabled={isSubmitting}
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-600">{errors.email}</p>
            )}
          </div>
          
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
              Phone Number *
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                errors.phone ? 'border-red-500' : 'border-gray-300'
              }`}
              disabled={isSubmitting}
            />
            {errors.phone && (
              <p className="mt-1 text-sm text-red-600">{errors.phone}</p>
            )}
          </div>
        </div>
        
        <div className="mt-6">
          <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
            Address
          </label>
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            disabled={isSubmitting}
          />
        </div>
        
        <div className="mt-6">
          <label htmlFor="education" className="block text-sm font-medium text-gray-700 mb-1">
            Education Background
          </label>
          <textarea
            id="education"
            name="education"
            rows="3"
            value={formData.education}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            disabled={isSubmitting}
            placeholder="List your educational qualifications"
          ></textarea>
        </div>
        
        <div className="mt-6">
          <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-1">
            Work Experience *
          </label>
          <textarea
            id="experience"
            name="experience"
            rows="4"
            value={formData.experience}
            onChange={handleChange}
            className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
              errors.experience ? 'border-red-500' : 'border-gray-300'
            }`}
            disabled={isSubmitting}
            placeholder="Describe your relevant work experience"
          ></textarea>
          {errors.experience && (
            <p className="mt-1 text-sm text-red-600">{errors.experience}</p>
          )}
        </div>
        
        <div className="mt-6">
          <label htmlFor="coverLetter" className="block text-sm font-medium text-gray-700 mb-1">
            Cover Letter
          </label>
          <textarea
            id="coverLetter"
            name="coverLetter"
            rows="4"
            value={formData.coverLetter}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            disabled={isSubmitting}
            placeholder="Why are you interested in this position?"
          ></textarea>
        </div>
        
        <div className="mt-6">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Upload CV/Resume *
        </label>
        <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-dashed rounded-md bg-gray-50 border-gray-300">
          <div className="space-y-1 text-center">
            <FaUpload className="mx-auto h-12 w-12 text-gray-400" />
            <div className="text-sm text-gray-600">
              <label
                htmlFor="file-upload"
                className="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500 focus-within:outline-none"
              >
                <span>Upload a file</span>
                <input id="file-upload" name="cv" type="file" className="sr-only" onChange={handleChange} />
              </label>
            </div>
            <p className="text-xs text-gray-500">PDF, DOCX up to 5MB</p>
          </div>
        </div>
              
        {/* Optional Cover Letter Textarea */}
        <div className="mt-4">
          <label htmlFor="coverLetter" className="block text-sm font-medium text-gray-700 mb-1">
            Cover Letter (optional)
          </label>
          <textarea
            id="coverLetter"
            name="coverLetter"
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            disabled={isSubmitting}
            placeholder="Write a short cover letter (optional)"
          ></textarea>
        </div>
      </div>
              

        <div className="mt-6">
          <label htmlFor="cvFile" className="block text-sm font-medium text-gray-700 mb-2">
            Upload CV/Resume *
          </label>
          <div className="flex items-center gap-4">
            <label className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md cursor-pointer hover:bg-blue-700">
              <FaUpload className="mr-2" />
              Upload File
              <input
                type="file"
                id="cvFile"
                name="cvFile"
                accept=".pdf,.doc,.docx"
                onChange={handleFileChange}
                className="hidden"
                disabled={isSubmitting}
              />
            </label>
            <span className="text-sm text-gray-600">
              {fileName || 'No file selected'}
            </span>
          </div>
          {errors.cvFile && (
            <p className="mt-1 text-sm text-red-600">{errors.cvFile}</p>
          )}
        </div>

        <div className="mt-8 flex justify-end">
          <button
            type="submit"
            disabled={isSubmitting}
            className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none disabled:opacity-50"
          >
            {isSubmitting ? 'Submitting...' : 'Submit Application'}
          </button>
        </div>
      </form>
    </motion.div>
  );
};

export default ApplicationForm;
