const { getAllChannels } = require('../../dataHandler/queries/getAllChannels');
const { getAllMessagesByChannel } = require('../../dataHandler/queries/getAllMessagesByChannel')
const { getChannelById } = require('../../dataHandler/queries/getChannelById');
const { getAllMessages } = require('../../dataHandler/queries/getAllMessages');
const { deleteChannel } = require('../../dataHandler/queries/deleteChannel');
const { createChannel } = require('../../dataHandler/queries/createChannel');
const { updateChannel } = require('../../dataHandler/queries/updateChannel');
const { updateMessage } = require('../../dataHandler/queries/updateMessage');
const { sendMessage } = require('../../dataHandler/queries/sendMessage');
const { deleteMessage } = require('../../dataHandler/queries/deleteMessage');

module.exports = resolvers = {
    Query: {
        channels: async () => {
            const channels = await getAllChannels()
            return channels.rows;
        },
        channel: async (_, { id }) => {
            const channel = await getChannelById(id);
            return channel.rows[0];
        },
        messagesBychannel: async (_, { id }) => {
            const messages = await getAllMessagesByChannel(id);
            return messages.rows;
        },
        messages: async () => {
            const allMessages = await getAllMessages();
            console.log(allMessages);
            return allMessages.rows;
        },
    },

    Mutation: {
        deleteChannel: async (_, { id }) => {
            return await deleteChannel(id)
        },
        deleteMessage: async (_, { id }) => {
            return await deleteMessage(id)
        },
        createChannel: async (_, { name }) => {
            return await createChannel(name)
        },
        sendMessage: async (_, { content, channel_id }) => {
            return await sendMessage(content, channel_id)
        },
        updateChannel: async (_, { name, id }) => {
            return await updateChannel(name, id)
        },
        updateMessage: async (_, { content, id }) => {
            return await updateMessage(content, id)
        },

    }
}