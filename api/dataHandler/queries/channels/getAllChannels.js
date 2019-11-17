const getAllChannels = async (connect) => {
    if (connect) {
        return await connect
            .query(`SELECT * FROM channel`)
            .then(res => {
                if (res.rowCount === 0) {
                   return [];
                }
                return res.rows;
            });
    } else {
        return "connect can't be null or undefined"
    };
}
module.exports = { getAllChannels };