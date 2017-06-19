/**
 * Dependencies.
 */

const codes = require('./code')


/**
 * Send code through HTTP response.
 *
 * @param {Number} code
 * @param {String} message
 * @api public
 */

module.exports = function HttpError (code, message) {
  Error.captureStackTrace(this, this.constructor)
  this.name = this.constructor.name
  this.code = code
  this.message = message
}

require('util').inherits(HttpError, Error)
