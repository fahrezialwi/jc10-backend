var mysql = require('mysql')

const db = mysql.createConnection({
    user: 'root',
    password: '12345678',
    database: 'todo_api',
    host: 'localhost'
})

module.exports = db