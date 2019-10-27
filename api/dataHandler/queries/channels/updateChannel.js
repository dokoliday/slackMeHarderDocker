const { connect } = require("../../../helpers/connect");

const updateChannel = async (name, channelId) => {
    try {
        const data = await connect
            .query(`UPDATE channel SET name=($1) WHERE id=($2)`, [name, channelId]);
        return data;
    } catch (error) {
        console.log('error: ', error);
        throw (error);
    }
};

module.exports = { updateChannel };