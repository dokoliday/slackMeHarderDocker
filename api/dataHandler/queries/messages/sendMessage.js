
const sendMessage = async (message, channelId,connect) => {
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

module.exports = { sendMessage };