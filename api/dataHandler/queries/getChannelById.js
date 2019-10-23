const { connect } = require("../connect");

const getChannelById = async (id) => {
    try {
        const data = await connect
            .query(`SELECT * FROM channel WHERE id=($1)`, [id]);
        return data;
    } catch (error) {
        console.log('error: ', error);
        throw (error);
    }
};

module.exports = { getChannelById };