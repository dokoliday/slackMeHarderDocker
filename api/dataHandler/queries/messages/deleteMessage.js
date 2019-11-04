const deleteMessage = async (messageId, connect) => {
   if (messageId && connect) {
      return await connect
         .query(`DELETE FROM message WHERE id=($1)`, [messageId])
         .then(res => {
            if (res.rowCount === 0) {
               throw {
                  status: 400,
                  message: "Problem while delete message"
               };
            } return res;
         });
   } else {
      return "messageId && connect can't be null or undefined"
   }
}

module.exports = { deleteMessage };