const mysql = require('mysql');

// Database Connection for Development

let connection = mysql.createConnection({
    host: "35.188.216.37",
    user: "root",
    database: "bivicdatabase",
    password: "pass123"
  });
  
    connection.connect(function(err) {
      if (err) {
        console.error('Error connecting: ' + err.stack);
        return;
      }
      console.log('Connected as thread id: ' + connection.threadId);
    });
  
    module.exports = connection;