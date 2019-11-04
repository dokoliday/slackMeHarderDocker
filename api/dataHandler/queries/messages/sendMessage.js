
const sendMessage = async (message, channelId, connect) => {
   if (message && channelId && connect) {
      return await connect
         .query(`SELECT * FROM channel WHERE id=($1)`, [channelId])
         .then(async (res) => {
            if (res.rowCount === 0) {
               throw {
                  status: 400,
                  message: "No channel for thid id"
               };
            };
            return await connect
               .query(`INSERT INTO message (content,channel_id) VALUES ($1, $2)`, [message, channelId])
               .then(res => {
                  if (res.rowCount === 0) {
                     throw {
                        status: 400,
                        message: "Problem while sending message"
                     };
                  };
                  return res;
               });
         }
         );
   } else {
      return "message && channelId && connect can't be null or undefined"
   }
}
module.exports = { sendMessage };