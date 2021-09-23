const { connect } = require("./client");
const { setupInput } = require("./input");

console.log("Connecting ...");

let output = connect();

setupInput(output);