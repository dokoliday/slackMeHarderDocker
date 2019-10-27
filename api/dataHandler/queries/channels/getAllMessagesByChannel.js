const { connect } = require("../../../helpers/connect")

const getAllMessagesByChannel = async (channelId) => {
    try {
        const data = await connect
            .query(`SELECT * from message WHERE channel_id=($1)`, [channelId]);
        return data;
    } catch (error) {
        console.log('error: ', error);
        throw (error);
    }
};

module.exports = { getAllMessagesByChannel };