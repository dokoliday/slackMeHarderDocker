const updateMessage = async (message, messageId, connect) => {
    if (message && messageId && connect) {
        return await connect
            .query(`UPDATE message SET content=($1) WHERE id=($2)`, [message, messageId])
            .then(res => {
                if (res.rowCount === 0) {
                    throw {
                        status: 400,
                        message: "Problem while update message"
                     };
                };
                return res;
            });
    } else {
        return "message && messageId && connect can't be null or undefined"
    }
}

module.exports = { updateMessage };