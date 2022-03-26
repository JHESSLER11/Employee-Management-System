const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  // Your MySQL username,
  user: 'root',
  // Your MySQL password
  password: 'password',
  database: 'departmentStore'
});

const conn = connection.promise()

module.exports = conn;