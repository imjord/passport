const mysql = require('mysql2');



const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'passport'
},

console.log('Connected to database')
);

module.exports = db;