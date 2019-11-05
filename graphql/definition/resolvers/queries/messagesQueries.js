const fetch = require("node-fetch");
const host = process.env.API_HOST
   
   
const messagesBychannel= (_, { id }) => {
   return fetch(`http://${host}:4201/api/messages/channel/${id}`)
      .then(res => res.json())
      .then(messagesBychannel => {
         if (messagesBychannel.status === 400) {
            return new Error(messagesBychannel.message)
         } return messagesBychannel;
      })
};
const messages= () => {
   return fetch(`http://${host}:4201/api/messages`)
      .then(res => res.json())
      .then(messages => {
         if (messages.status === 400) {
            return new Error(messages.message)
         } return messages;
      })
};

module.exports={messages,messagesBychannel}