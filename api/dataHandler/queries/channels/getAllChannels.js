const { connect } = require("../../../helpers/connect")

const getAllChannels = async () => {{
    return await connect
        .query(`SELECT * from channel`)
        .then(res => {
            if (res.rowCount === 0) {
                throw {
                    status: "no channels",
                };
            }
            return res;
        });}
};

module.exports = { getAllChannels };