require('dotenv').config();
const Bluebird = require('bluebird');
const mysql = require('mysql2');
// const bluebird = require('bluebird');  

const client = mysql.createConnection({
    user : process.env.DB_USER,
    host : process.env.DB_HOST,
    database : process.env.DB_NAME,
    port: process.env.DB_PORT,
    password : process.env.DB_PASSWORD,
    // Promise: bluebird,
    // rowsAsArray : true,
});

console.log(`Connected to database: ${client.config.database}`);

// DEV DEBUG (delete/comment for production)
// console.error(`User: ${client.config.user}`);
// console.error(`host: ${client.config.host}`);
// console.error(`port: ${client.config.port}`);
// console.error(`password: ${client.config.password}`);
// console.error(`database: ${client.config.database}`);

module.exports = { client }