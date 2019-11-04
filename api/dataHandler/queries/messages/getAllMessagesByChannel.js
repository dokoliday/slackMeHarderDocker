const getAllMessagesByChannel = async (channelId, connect) => {
   if (channelId && connect) {
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
               .query(`SELECT * FROM message WHERE channel_id=($1)`, [channelId])
               .then(res => {
                  if (res.rowCount === 0) {
                     throw {
                        status: 400,
                        message: "No messages on this channel"
                     };
                  };
                  return res.rows;
               });
         })
   } else {
      return "channelId and connect can't be null or undefined"
   }
};

module.exports = { getAllMessagesByChannel };