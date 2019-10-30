const fetch = require("node-fetch");
const host = process.env.API_HOST

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
            return channel[0];
        },
        messagesBychannel: async (_, { id }) => {
            const messagesBychannel = await fetch(`http://${host}:4201/api/channels/${id}/messages`)
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
            return await fetch(`http://${host}:4201/api/channels`, {
                method: "POST",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ "name": name })
            })
                .then(res => {
                    console.log(res.headers);
                    
                    return {
                        "status": res.status,
                        "message": "Channel created"
                    }
                });
        },
        updateChannel: async (_, { name, id }) => {
            return await fetch(`http://${host}:4201/api/channels/${id}`, {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                method: "PUT",
                body: JSON.stringify({ "name": name })
            })
                .then(res => {
                    return {
                        "status": res.status,
                        "message": "Channel updated"
                    }
                });
        },
        deleteChannel: async (_, { id }) => {
            return await fetch(`http://${host}:4201/api/channels/${id}`, {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                method: "DELETE",
            })
                .then(res => {
                    return {
                        "status": res.status,
                        "message": "Channel deleted"
                    }
                });
        },
        sendMessage: async (_, {channel_id, content }) => {
            console.log(content,channel_id)
            return await fetch(`http://${host}:4201/api/messages`, {
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
                .then(res => {
                    console.log(
                        "OK", 
                        `http://${host}:4201/api/messages`,
                        {
                            headers: {
                                'Accept': 'application/json',
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify({
                                "content": content,
                                "channel_id": channel_id
                            } )
                        },
                         JSON.stringify(res));
                    return {
                        "status": res.status,
                        "message": "Message send"
                    }
                })
                .catch(err => console.log("OOOPPPSSS", err));
        },
        deleteMessage: async (_, { id }) => {
            deleteMessage = await fetch(`http://${host}:4201/api/messages/${id}`, {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                method: "DELETE",
            }).then(res => {
                console.log('pppppppppppppppppppLLLLL', JSON.stringify(res))
                console.log(res.status)
                return { "status": res.status }
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
                body: JSON.stringify({ content })
            });
        },
    },
}



