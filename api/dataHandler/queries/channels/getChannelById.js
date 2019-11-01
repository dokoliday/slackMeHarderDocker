const getChannelById = async (id, connect) => {
    if (id && connect) {
        return await connect
            .query(`SELECT * FROM channel WHERE id=($1)`, [id])
            .then(res => {
                if (res.rowCount === 0) {
                    throw {
                        status: 400,
                        message: "No channels with this id"
                    };
                }
                return res.rows;
            })
    } else {
        return "id and connect can't be null or undefined"
    };
};

module.exports = { getChannelById };
