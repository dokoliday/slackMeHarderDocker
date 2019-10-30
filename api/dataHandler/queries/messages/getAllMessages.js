const { connect } = require("../../../helpers/connect");

const getAllMessages = async () => {
    return await connect
        .query(`SELECT * from message`)
        .then(res => {
            if (res.rowCount === 0) {
                throw {
                    status: 500,
                };
            } return res;
        });
};

module.exports = { getAllMessages };