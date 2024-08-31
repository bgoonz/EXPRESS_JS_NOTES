const mysql = require('mysql2')

const pool = mysql.createPool({
    host:'localhost',
    user:'root',
    database:'store',
    password:'Summer2015'
})


module.exports = pool.promise()
