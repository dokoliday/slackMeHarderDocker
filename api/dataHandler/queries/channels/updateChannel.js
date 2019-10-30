const { connect } = require("../../../helpers/connect");
const { channelNameSchema, idChannelSchema, validator } = require("../../../helpers/jsonSchemaValidator")

const updateChannel = async (name, channelId) => {
    channelId = parsint(channelId);
    const idValid = validator.validate(channelId, idChannelSchema);
    const nameValid = validator.validate(name, channelNameSchema);
    if (idValid.errors.length > 0) {
        throw (idValid.errors);
    } else if (nameValid.errors.length > 0) {
        throw (nameValid.errors);
    } else {
        return await connect
            .query(`UPDATE channel SET name=($1) WHERE id=($2)`, [name, channelId])
            .then(res => {
                if (res.rowCount === 0) {
                    throw {
                        status: 500,
                    };
                }
                return res;
            });
    };
};

module.exports = { updateChannel };