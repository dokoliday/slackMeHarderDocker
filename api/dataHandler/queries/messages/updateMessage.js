const { connect } = require("../../connect")

const updateMessage= async (name, messageId) => {
    try {
        const data = await connect
            .query(`UPDATE message SET content=($1) WHERE id=($2)`, [name, messageId]);
        return data;
    } catch (error) {
        console.log('error: ', error);
        throw (error);
    }
};

module.exports = { updateMessage };