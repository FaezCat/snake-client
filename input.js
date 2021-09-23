let connection;

// this function handles the user inputs to the terminal line including CTRL + C to exit program and the movement keys W A S D
const handleUserInput = (data) => {
  if (data === '\u0003') {
    process.exit();
  }
  if (data === "w") {
    connection.write("Move: up");
  }
  if (data === "a") {
    connection.write("Move: left");
  }
  if (data === "s") {
    connection.write("Move: down");
  }
  if (data === "d") {
    connection.write("Move: right");
  }
};

// this function sets up our ability to listen to what is inputted into the command line, then begins listening for user input and handles if CTRL + C is inputted
const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

module.exports = { setupInput };