/**
 * Helper utilities for pair collaboration and common functions.
 */

/**
 * Format date into YYYY-MM-DD string
 * @param {Date} date 
 * @returns {string}
 */
export function formatDate(date = new Date()) {
  return date.toISOString().split('T')[0];
}

/**
 * Capitalize first letter of string
 * @param {string} str 
 * @returns {string}
 */
export function capitalize(str) {
  if (!str) return '';
  return str.charAt(0).toUpperCase() + str.slice(1);
}
