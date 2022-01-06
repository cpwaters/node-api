require('dotenv').config();
const mysql = require('mysql2');

const client = mysql.createConnection({
    user : process.env.DB_USER,
    host : process.env.DB_HOST,
    // database : process.env.DB_NAME,
    port: process.env.DB_PORT,
    password : process.env.DB_PASSWORD,
});

client.connect((err, res) => {
    if (err){
        console.log(err);
        throw err;
    }else {
        console.log(`Connected to db`);
    }
})

// make connection global
global.db = client;

// client.query('SELECT NOW()', (err, res) => {
//     if (err){
//         console.log(err);
//         throw err;
//     }else {
//         console.log('Connected to db', res);
//     }
// })

// const knex = require('knex')({
//     client: 'mysql',
//     connection: {
//       host : '127.0.0.1',
//       port : 3306,
//       user : 'root',
//       password : '20nialL05',
//       database : 'myapp_test'
//     }
//   });
