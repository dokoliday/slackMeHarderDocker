const { connect } = require("../connect")

const sendMessage = async (message, ChannelId)=> {
    try {
        await connect
            .query(`INSERT INTO message (content,channel_id) VALUES ($1, $2)`, [message, ChannelId]);
    } catch (error) {
        console.log('error: ', error);
    }
};

module.exports = { sendMessage };