const httpClient = require("got");
const Document = require("./document");

function getFunctions(instance) {
  const functions = {};
  Object.getOwnPropertyNames(Object.getPrototypeOf(instance))
    .filter(name => name !== "constructor")
    .forEach(functionName => {
      functions[functionName] = instance[functionName].bind(instance);
    });
  return functions;
}

function getMongodbAtlasDataApiClient(options) {

  const document = new Document(httpClient, options.baseUrl, options.token);

  const functions = {};
  functions.document = getFunctions(document);
  return functions;

}

module.exports = getMongodbAtlasDataApiClient;
