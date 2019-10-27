const { connect } = require("../../connect");
const { idMessageSchema, validator } = require("../../../helpers/jsonShemaValidator");
const deleteMessage = async idMessage => {
    const idValid = validator.validate(idMessage, idMessageSchema);
    if (idValid.errors.length > 0) {
        throw (idValid.errors);
    } return await connect
        .query(`DELETE FROM message WHERE id=($1)`, [idMessage])
        .then(res => {
            if (res.rowCount === 0) {
                throw {
                    status: 500,
                };
            } return res;
        });
};
module.exports = { deleteMessage };