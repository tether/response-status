/**
 * Dependencies.
 */

const status = require('statuses')


/**
 * Send status code/message through HTTP response.
 *
 * @param {Stream} response
 * @param {Number} code
 * @param {String?} message
 * @param {Object?} properties
 * @api public
 */

module.exports = (response, code) => {
  response.statusCode = code
  response.statusMessage = status[code]
  response.end()
}
