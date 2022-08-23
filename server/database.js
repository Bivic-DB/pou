const mysql = require('mysql');

// Database Connection for Development

let connection = mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    database: "bivicdatabase",
    password: ""
  });
  
    connection.connect(function(err) {
      if (err) {
        console.error('Error connecting: ' + err.stack);
        return;
      }
      console.log('Connected as thread id: ' + connection.threadId);
    });
  
    module.exports = connection;