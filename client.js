const net = require("net");

const connect = function() {
  const conn = net.createConnection({
    host: "135.23.223.133",
    port: "50542"
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  // event listener to check when we are connected to the server; additionally, this method also sends our name to the server
  conn.on("connect", () => {
    console.log("Successfully connected to game server");
    conn.write("Name: F3Z");
  });

  // added second event listener after confirm we're connected to handle movements
  conn.on("connect", () => {
    setTimeout(() => {
      conn.write("Move: up");
    }, 2000);
    setTimeout(() => {
      conn.write("Move: up");
    }, 4000);
    setTimeout(() => {
      conn.write("Move: left");
    }, 6000);
    setTimeout(() => {
      conn.write("Move: left");
    }, 8000);
  });

  // event listener for "data" received on our side, it then console logs to us the data received
  conn.on("data", (data) => {
    console.log(data);
  });

  return conn;
};

module.exports = { connect };