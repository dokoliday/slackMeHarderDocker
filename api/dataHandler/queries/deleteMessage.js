const { connect } = require("../connect")

const deleteMessage = async id => {
    try {
        await connect
            .query(`DELETE FROM message WHERE id=($1)`, [id]);
    } catch (error) {
        console.log(error)
        throw (error);
    }
};

module.exports = { deleteMessage };