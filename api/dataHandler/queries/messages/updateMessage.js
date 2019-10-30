const { connect } = require("../../../helpers/connect");
const {validator,idMessageSchema,messageSchema} = require("../../../helpers/jsonSchemaValidator")

const updateMessage= async (message, messageId) => {
    messageId=parseInt(messageId);
    const idValid = validator.validate(messageId, idMessageSchema);
    const messageValid = validator.validate(message, messageSchema);

    if (idValid.errors.length > 0) {
        throw (idValid.errors);
    } else if (messageValid.errors.length > 0) {
        throw (messageValid.errors);
    } else {
        return await connect
            .query(`UPDATE message SET content=($1) WHERE id=($2)`, [message, messageId])
            .then(res => {
                if (res.rowCount === 0) {
                    throw {
                        status: 500,
                    };
                };
                return res;
            });
};
}

module.exports = { updateMessage };