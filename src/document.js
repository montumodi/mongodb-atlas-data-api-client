class Document {

  /**
    * To initialize object properties
    * @param {Object} client - The http client
    * @param {string} baseUrl - Base url of mongodb data api
    * @param {object} token - token used to access data lake api
  */
  constructor(client, baseUrl, token) {
    this.client_ = client;
    this.baseUrl_ = baseUrl;
    this.headers_ = {
      "Content-Type": "application/json",
      "Access-Control-Request-Headers": "*",
      "api-key": token
    };
  }

  /**
   * Finds one document
   * @param {Object} body - Object that contains details about cluster, db, collection and query.
   * @returns {Promise} - promise which resolves on success and rejects on error
   */
  async findOne(body) {
    const response = await this.client_({
      "url": `${this.baseUrl_}/action/findOne`,
      "method": "POST",
      "body": JSON.stringify(body),
      "headers": this.headers_
    }).json();
    return response;
  }
}

module.exports = Document;
