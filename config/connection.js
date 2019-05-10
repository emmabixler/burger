// setting up mysql connect
var mysql = require("mysql");
var connection;

if (process.env.JAWS_DB_URL) {
  connection = mysql.createConnection(process.env.JAWS_DB_URL);
} else {
  connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    // socketPath: "/tmp/mysql.sock",
    user: "emma",
    password: "password",
    database: "burgers_db"
  });
}
// var connection = mysql.createConnection({
//   host: "localhost",
//   port: 3306,
//   // socketPath: "/tmp/mysql.sock",
//   user: "root",
//   password: "password",
//   database: "burgers_db"
// });
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id" + connection.threadId);
});

module.exports = connection;

//took me the longest to figure out the connection error, due to password where I had to restart it.
