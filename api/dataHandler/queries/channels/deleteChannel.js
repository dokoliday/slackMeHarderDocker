const deleteChannel = async (channelId, connect) => {
   const error = {
      status: 400,
      message: "No channel with this id"
   };
   if (channelId && connect) {
      return await connect
         .query(`DELETE FROM message WHERE channel_id=($1)`, [channelId])
         .then(async () => {
            return await connect.query(`DELETE FROM channel WHERE id=($1)`, [channelId])
               .then(response => {
                  if (response.rowCount === 0) {
                     throw error;
                  };
                  return response;
               });
         });
   }
   return "channelId and connect can't be null or undefined";
}

module.exports = { deleteChannel };