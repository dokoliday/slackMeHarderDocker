const fetch = require("node-fetch");
const host = process.env.API_HOST

module.exports = resolvers = {
   Query: {
      channels: () => {
         return fetch(`http://${host}:4201/api/channels`)
            .then(res => res.json())
            .then(res => {
               if (res.status === 400) {
                  return new Error(res.message)
               } return res
            }
            );
      },
      channel: (_, { id }) => {
         return fetch(`http://${host}:4201/api/channels/${id}`)
            .then(res => res.json())
            .then(channel => {
               if (channel.status === 400) {
                  return new Error(channel.message)
               } return channel[0];
            });

      },
      messagesBychannel: (_, { id }) => {
         return fetch(`http://${host}:4201/api/messages/channel/${id}`)
            .then(res => res.json())
            .then(messagesBychannel => {
               if (messagesBychannel.status === 400) {
                  return new Error(messagesBychannel.message)
               } return messagesBychannel;
            })
      },
      messages: () => {
         return fetch(`http://${host}:4201/api/messages`)
            .then(res => res.json())
            .then(messages => {
               if (messages.status === 400) {
                  return new Error(messages.message)
               } return messages;
            })
      }
   },
   Mutation: {
      createChannel: (_, { name }) => {
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
      },
      updateChannel: (_, { name, id }) => {
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
      },
      deleteChannel: (_, { id }) => {
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
      },
      sendMessage: (_, { channel_id, content }) => {
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
      },
      deleteMessage: (_, { id }) => {
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
      },
      updateMessage: (_, { content, id }) => {
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
      },
   },
}



