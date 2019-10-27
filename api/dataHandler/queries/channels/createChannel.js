const { connect } = require("../../../helpers/connect")
const { channelNameSchema, validator } = require("../../../helpers/jsonShemaValidator")

const createChannel = async name => {
    const nameValid = validator.validate(name, channelNameSchema);
    if (nameValid.errors.length > 0) {
        throw (nameValid.errors);
    } return await connect
        .query(`INSERT INTO channel (name) VALUES ($1)`, [name])
        .then(res => {
            if (res.rowCount === 0) {
                throw {
                    status: 500,
                };
            } return res;
        });
    };

    module.exports = { createChannel };