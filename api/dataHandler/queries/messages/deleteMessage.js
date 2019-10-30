const { connect } = require("../../../helpers/connect");
const { idMessageSchema, validator } = require("../../../helpers/jsonSchemaValidator");
const deleteMessage = async messageId => {
    messageId = parseInt(messageId);
    const idValid = validator.validate(messageId, idMessageSchema);
    if (idValid.errors.length > 0) {
        throw (idValid.errors);
    } return await connect
        .query(`DELETE FROM message WHERE id=($1)`, [messageId])
        .then(res => {
            if (res.rowCount === 0) {
                throw {
                    status: 500,
                };
            } return res;
        });
};

module.exports = { deleteMessage };