const { connect } = require("./client");

console.log("Connecting ...");
connect();

// this function closes the program if CTRL + C are passed into the terminal line
const handleUserInput = (data) => {
  if (data === '\u0003') {
    process.exit();
  }
};

// this function sets up our ability to listen to what is inputted into the command line, then begins listening for user input and handles if CTRL + C is inputted
const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

setupInput();