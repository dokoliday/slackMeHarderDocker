const { Pool } = require('pg')

const connect = new Pool({
    user: 'alex',
    host: process.env.DB_HOST,
    database: 'slackMeHarder',
    password: 'dokoliday',
    port: 5432,
});


module.exports = { connect };