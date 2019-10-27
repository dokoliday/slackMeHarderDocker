const { connect } = require("../../connect");

const getAllMessages = async () => {
    try {
        const data = await connect
            .query(`SELECT * from message`);
        return data;
    } catch (error) {
        console.log('error: ', error);
        throw (error);
    }
};

module.exports = { getAllMessages };