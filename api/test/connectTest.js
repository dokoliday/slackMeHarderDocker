const { Pool } = require('pg')

const connect = new Pool({
    user: 'alex',
    host: process.env.DB_HOST,
    database: 'test',
    password: 'dokoliday',
    port: 5432,
});


module.exports = { connect };