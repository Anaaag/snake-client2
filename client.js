const net = require("net");


// establishes a connection with the game server
const connect = function (data) {
  console.log("connecting...")
  const conn = net.createConnection({
    host: "localhost",
    port: 50541,
  });

  conn.on("connect", () => {
    console.log("Successfully connected to game server")
  });

  conn.on("data", (data) => {
    console.log("Server says", data)
  })

  conn.on("connect", () => {
    conn.write("Name: Ana")
  })

  

  // interpret incoming data as text
  conn.setEncoding("utf8");


  return conn;
};

module.exports = {connect}