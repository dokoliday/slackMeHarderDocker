// const { getAllChannels } = require('../../dataHandler/queries/getAllChannels');
// const { getAllMessagesByChannel } = require('../../dataHandler/queries/getAllMessagesByChannel')
// const { getChannelById } = require('../../dataHandler/queries/getChannelById');
// const { getAllMessages } = require('../../dataHandler/queries/getAllMessages');
// const { deleteChannel } = require('../../dataHandler/queries/deleteChannel');
// const { createChannel } = require('../../dataHandler/queries/createChannel');
// const { updateChannel } = require('../../dataHandler/queries/updateChannel');
// const { updateMessage } = require('../../dataHandler/queries/updateMessage');
// const { sendMessage } = require('../../dataHandler/queries/sendMessage');
// const { deleteMessage } = require('../../dataHandler/queries/deleteMessage');
const fetch = require("node-fetch");
const host = process.env.API_HOST
// const getAllChannels = async () => {
//     const channels = await fetch(`http://${host}:4201/api/channels`)
//         .then(res => res.json);
//     return channels
// }
module.exports = resolvers = {
    Query: {
        channels: async () => {
            const channels = await fetch(`http://${host}:4201/api/channels`)
                .then(res => res.json());
            return channels;
        },
        channel: async (_, { id }) => {
            const url = `http://${host}:4201/api/channels/${id}`
            const channel = await fetch(url)
                .then(res => res.json());
            console.log("urlllllllllll", url)
            console.log(channel)
            return channel[0];
        },
        messagesBychannel: async (_, { id }) => {
            const messagesBychannel = await fetch(`http://${host}:4201/api/messages/${id}`)
                .then(res => res.json());
            return messagesBychannel;
        },
        messages: async () => {
            const messages = await fetch(`http://${host}:4201/api/messages`)
                .then(res => res.json());
            return messages;
        }
    },
    Mutation: {
        createChannel: async (_, { name }) => {
            await fetch(`http://${host}:4201/api/channels`, {
                method: "POST",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                method: "POST",
                body: JSON.stringify({ "name": name })
            });
        },
        updateChannel: async (_, { name, id }) => {
            await fetch(`http://${host}:4201/api/channels/${id}`, {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                method: "PUT",
                body: JSON.stringify({ "name": name })
            });
        },
        deleteChannel: async (_, { id }) => {
            await fetch(`http://${host}:4201/api/channels/${id}`, {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                method: "DELETE",
            });
        },
        sendMessage: async (_, { content, channel_id }) => {
            await fetch(`http://${host}:4201/api/messages`, {
                method: "POST",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                method: "POST",
                body: JSON.stringify({
                    "content": content,
                    "channel_id": channel_id
                }),
            }).then(res => console.log(res.headers))
        },

        deleteMessage: async (_, { id }) => {
               deleteMessage= await fetch(`http://${host}:4201/api/messages/${id}`, {
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    method: "DELETE",
                })
                .then(res=>{
                    console.log(res.status)
                    return {"status":res.status}
                });
                return deleteMessage;
            },

        updateMessage: async (_, { content, id }) => {
               await fetch(`http://${host}:4201/api/messages/${id}`, {
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    method: "PUT",
                    body:JSON.stringify({content})
                });
            },
        },
    }



