const { connect } = require("../../connect")

const getAllChannels = async () => {
    try {
        const data = await connect
            .query(`SELECT * from channel`);
        return data;
    } catch (error) {
        console.log('error: ', error);
        throw (error);
    }
};

module.exports = { getAllChannels };