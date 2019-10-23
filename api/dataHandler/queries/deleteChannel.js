const { connect } = require("../connect")

const deleteChannel = async id => {
    try {
        await connect
            .query(`DELETE FROM message WHERE channel_id=($1)`, [id]);
        await connect
            .query(`DELETE FROM channel WHERE id=($1)`, [id]);
    } catch (error) {
        console.log(error)
        throw (error);
    }
};

module.exports = { deleteChannel };