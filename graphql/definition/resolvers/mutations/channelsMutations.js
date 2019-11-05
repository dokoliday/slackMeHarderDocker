const fetch = require("node-fetch");
const host = process.env.API_HOST


const createChannel = (_, { name }) => {
   return fetch(`http://${host}:4201/api/channels`, {
      method: "POST",
      headers: {
         'Accept': 'application/json',
         'Content-Type': 'application/json'
      },
      body: JSON.stringify({ "name": name })
   })
      .then(res => res.json())
      .then(createChannel => {
         console.log(createChannel)
         if (createChannel.status === 400) {
            return new Error(createChannel.message)
         } return {
            "status": 201,
            "message": "Channel created"
         }
      })
};

const updateChannel = (_, { name, id }) => {
   return fetch(`http://${host}:4201/api/channels/${id}`, {
      headers: {
         'Accept': 'application/json',
         'Content-Type': 'application/json'
      },
      method: "PUT",
      body: JSON.stringify({ "name": name })
   })
      .then(res => res.json())
      .then(updateChannel => {
         if (updateChannel.status === 400) {
            return new Error(updateChannel.message)
         } return {
            "status": 201,
            "message": "Channel updated"
         }
      })
};

const deleteChannel = (_, { id }) => {
   return fetch(`http://${host}:4201/api/channels/${id}`, {
      headers: {
         'Accept': 'application/json',
         'Content-Type': 'application/json'
      },
      method: "DELETE",
   })
      .then(res => res.json())
      .then(deleteChannel => {
         if (deleteChannel.status === 400) {
            return new Error(deleteChannel.message)
         } return {
            "status": 200,
            "message": "Channel deleted"
         }
      })
};

module.exports = { deleteChannel, updateChannel, createChannel }