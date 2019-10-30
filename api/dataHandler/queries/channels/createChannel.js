const createChannel = async (name,connect)=> {
   if (name && connect) {
      return await connect
         .query(`INSERT INTO channel (name) VALUES ($1)`, [name])
         .then(response => {
            if (response.rowCount === 0) {
               throw {
                  status: 400,
                  message: "probleme while creating Channel"
               };
            };
            return response;
         });
   } else {
      return "name and connect can't be null or undefined"
   }
}
module.exports = { createChannel };