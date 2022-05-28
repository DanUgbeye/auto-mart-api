/**
 * @param type either 'success' or 'error'
 * @param code the status code of the response
 * @param message the message to be sent
 * @param data contains the fetched resource if any
 */

class RESPONSE {
  /**
   * @param code the status code of the response
   * @param message the message to be sent
   */
  static error(code, message) {
    return {
      status: "error",
      code: code,
      message: message,
    };
  }

  /**
   * @param code the status code of the response
   * @param data contains the fetched resource if any
   */
  static success(code, data) {
    return data
      ? {
          status: "success",
          code: code,
          data: data,
        }
      : {
          status: "success",
          code: code,
        };
  }
}

module.exports = RESPONSE;
