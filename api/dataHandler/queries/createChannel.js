const { connect } = require("../connect")

const createChannel = async name => {
    try {
        return await connect
            .query(`INSERT INTO channel (name) VALUES ($1)`, [name]);
    } catch (error) {
        console.log('error: ', error);
        throw (error);
    }
};

module.exports = { createChannel };