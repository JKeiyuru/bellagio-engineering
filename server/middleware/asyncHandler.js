// File: server/middleware/asyncHandler.js

/**
 * Async handler to eliminate try/catch blocks in route controllers
 * @param {Function} fn - The async function to wrap
 * @returns {Function} - Express middleware function
 */
const asyncHandler = (fn) => (req, res, next) =>
  Promise.resolve(fn(req, res, next)).catch(next);

module.exports = asyncHandler;





