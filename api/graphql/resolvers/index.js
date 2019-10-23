const { getAllChannels } = require('../../dataHandler/queries/getAllChannels');
const { getAllMessagesByChannel } = require('../../dataHandler/queries/getAllMessagesByChannel')
const { getChannelById } = require('../../dataHandler/queries/getChannelById');
const { getAllMessages } = require('../../dataHandler/queries/getAllMessages')
const { deleteChannel } = require('../../dataHandler/queries/deleteChannel')

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
        deleteChannel: async (_,{id}) => {
          await deleteChannel(id)
        },
    },
};