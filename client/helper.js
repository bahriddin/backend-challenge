function printResponse(response) {
  console.log(response.data);
}

function printError(response) {
  console.log(response.message);
}

module.exports = { printResponse, printError };
