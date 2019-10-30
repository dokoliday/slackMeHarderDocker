const { connect } = require("../../../helpers/connect")
const { idChannelSchema, validator } = require("../../../helpers/jsonSchemaValidator")
const getAllMessagesByChannel = async (channelId) => {
    channelId=parseInt(channelId)
    console.log("ffffffffffffffffff",typeof channelId)
    const idValid = validator.validate(channelId, idChannelSchema);
    if (idValid.errors.length > 0) {
        throw (idValid.errors);
    }
    return await connect
        .query(`SELECT * from message WHERE channel_id=($1)`, [channelId])
        .then(res => {
            if (res.rowCount === 0) {
                throw {
                    status: 500,
                };
            };
            return res;
        });
};

module.exports = { getAllMessagesByChannel };