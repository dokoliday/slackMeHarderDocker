const { connect } = require("../../../helpers/connect")
const { idChannelSchema, validator } = require("../../../helpers/jsonShemaValidator")

const deleteChannel = async id => {
    const idValid = validator.validate(id, idChannelSchema);
    if (idValid.errors.length > 0) {
        throw (idValid.errors);
    }
    await connect
        .query(`DELETE FROM message WHERE channel_id=($1)`, [id])
        .then(res => {
            if (res.rowCount === 0) {
                throw {
                    status: 500,
                };
            } return res;
        });
    await connect.query(`DELETE FROM channel WHERE id=($1)`, [id])
        .then(res => {
            if (res.rowCount === 0) {
                throw {
                    status: 500,
                };
            } return res;
        });
};

module.exports = { deleteChannel };