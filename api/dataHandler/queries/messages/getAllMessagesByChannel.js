const getAllMessagesByChannel = async (channelId, connect) => {
    if (channelId && connect) {
        return await connect
            .query(`SELECT * from message WHERE channel_id=($1)`, [channelId])
            .then(res => {
                if (res.rowCount === 0) {
                    throw {
                        status: 500,
                    };
                };
                return res.rows;
            });
    } else {
        return "channelId and connect can't be null or undefined"
    }
};

module.exports = { getAllMessagesByChannel };