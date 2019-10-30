const { connect } = require("../../../helpers/connect")
const { idChannelSchema, validator } = require("../../../helpers/jsonSchemaValidator")

const deleteChannel = async channelId => {
    channelId = parseInt(channelId);
    const idValid = validator.validate(channelId, idChannelSchema);
    if (idValid.errors.length > 0) {
        console.log("#################")
        throw (idValid.errors);
    };
    return await connect
        .query(`DELETE FROM message WHERE channel_id=($1)`, [channelId])
        .then(() => {
            return connect.query(`DELETE FROM channel WHERE id=($1)`, [channelId]);
        })
        .then(res => {
            if (res.rowCount === 0) {
                console.log("||||||||||||||||||||||")
                throw {
                    status: 500,
                };
            };
            console.log(res)
            return res;
        });
}

module.exports = { deleteChannel };