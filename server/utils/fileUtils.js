// File: server/utils/fileUtils.js

const fs = require('fs').promises;
const path = require('path');

/**
 * Delete file from server
 * @param {string} filePath - Path to file
 * @returns {Promise<void>}
 */
const deleteFile = async (filePath) => {
  try {
    await fs.unlink(path.join(__dirname, '..', filePath));
  } catch (error) {
    console.error(`Error deleting file: ${error.message}`);
    // Don't throw as this shouldn't prevent the main operation
  }
};

/**
 * Create directory if it doesn't exist
 * @param {string} dirPath - Path to directory
 * @returns {Promise<void>}
 */
const ensureDir = async (dirPath) => {
  try {
    await fs.mkdir(path.join(__dirname, '..', dirPath), { recursive: true });
  } catch (error) {
    console.error(`Error creating directory: ${error.message}`);
  }
};

module.exports = { deleteFile, ensureDir };