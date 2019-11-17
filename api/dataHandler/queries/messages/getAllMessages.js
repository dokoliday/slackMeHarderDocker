const getAllMessages = async (connect) => {
    if (connect) {
        return await connect
            .query(`SELECT * from message`)
            .then(res => {
                    if (res.rowCount === 0) {
                        return [];
                } return res.rows;
            });
    } else {
        return "connect can't be null or undefined"

    }
};

module.exports = { getAllMessages };