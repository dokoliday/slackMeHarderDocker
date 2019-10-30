const { connect } = require("../../../helpers/connect");
const { idChannelSchema, validator } = require("../../../helpers/jsonSchemaValidator")
const getChannelById = async (channelId) => {
    const idValid = validator.validate(channelId, idChannelSchema);
    if (idValid.errors.length > 0) {
        throw (idValid.errors);
    }
    return await connect
        .query(`SELECT * FROM channel WHERE id=($1)`, [id])
        .then(res => {
            if (res.rowCount === 0) {
                throw {
                    status: 500,
                };
            }
            return res;
        });
};

module.exports = { getChannelById };