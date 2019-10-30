const { connect } = require("../../../helpers/connect")
const { messageSchema, idChannelSchema, validator } = require("../../../helpers/jsonSchemaValidator")

const sendMessage = async (message, channelId) => {
    const idValid = validator.validate(channelId, idChannelSchema);
    const messageValid = validator.validate(message, messageSchema);

    if (idValid.errors.length > 0) {
        throw (idValid.errors);
    } else if (messageValid.errors.length > 0) {
        throw (messageValid.errors);
    } else {
        return await
            connect
                .query(`SELECT * FROM channel WHERE id=($1)`, [channelId])
                .then(async (res) => {
                    if (res.rowCount === 0) {
                        throw {
                            status: 500,
                        };
                    }
                    return await connect
                        .query(`INSERT INTO message (content,channel_id) VALUES ($1, $2)`, [message, channelId])
                        .then(res => {
                            if (res.rowCount === 0) {
                                throw {
                                    status: 500,
                                };
                            };
                            return res;
                        });
                }
                );
    };
}

module.exports = { sendMessage };