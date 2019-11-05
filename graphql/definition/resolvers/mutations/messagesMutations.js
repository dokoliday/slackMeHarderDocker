const fetch = require("node-fetch");
const host = process.env.API_HOST;

const sendMessage= (_, { channel_id, content }) => {
   return fetch(`http://${host}:4201/api/messages`, {
      headers: {
         'Accept': 'application/json',
         'Content-Type': 'application/json'
      },
      body: JSON.stringify({
         "content": content,
         "channel_id": channel_id
      }),
      method: "POST",
   })
      .then(res => res.json())
      .then(sendMessage => {
         if (sendMessage.status === 400) {
            return new Error(sendMessage.message)
         } return {
            "status": 200,
            "message": "Message Send"
         }
      })
};

const deleteMessage= (_, { id }) => {
   return fetch(`http://${host}:4201/api/messages/${id}`, {
      headers: {
         'Accept': 'application/json',
         'Content-Type': 'application/json'
      },
      method: "DELETE",
   })
      .then(res => res.json())
      .then(deleteMessage => {
         if (deleteMessage.status === 400) {
            return new Error(deleteMessage.message)
         } return {
            "status": 200,
            "message": "Message deleted"
         }
      })
};
const updateMessage= (_, { content, id }) => {
   return fetch(`http://${host}:4201/api/messages/${id}`, {
      headers: {
         'Accept': 'application/json',
         'Content-Type': 'application/json'
      },
      method: "PUT",
      body: JSON.stringify({ content })
   })
      .then(res => res.json())
      .then(deleteMessage => {
         if (deleteMessage.status === 400) {
            return new Error(deleteMessage.message)
         } return {
            "status": 200,
            "message": "Message updated"
         }
      })
};

module.exports={updateMessage,sendMessage,deleteMessage}