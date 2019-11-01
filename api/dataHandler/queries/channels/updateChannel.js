
const updateChannel = async (name, channelId, connect) => {
    if (name && channelId && connect) {
        return await connect
            .query(`UPDATE channel SET name=($1) WHERE id=($2)`, [name, channelId])
            .then(res => {
                if (res.rowCount === 0) {
                    throw {
                        status: 400,
                        message: "No channels with this id"
                    };
                }
                return res;
            });
    } else {
        return "name and channelId and connect can't be null or undefined"
    }
};

module.exports = { updateChannel };