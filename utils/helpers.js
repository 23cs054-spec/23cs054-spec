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

/**
 * Convert string to URL friendly slug
 * @param {string} str 
 * @returns {string}
 */
export function slugify(str) {
  if (!str) return '';
  return str
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

/**
 * Truncate string to specified max length with ellipsis
 * @param {string} str 
 * @param {number} length 
 * @returns {string}
 */
export function truncate(str, length = 30) {
  if (!str || str.length <= length) return str;
  return str.slice(0, length) + '...';
}
