const { channels, channel } = require("./queries/channelsQueries");
const { messagesBychannel, messages } = require("./queries/messagesQueries");
const { deleteChannel, updateChannel, createChannel } = require("./mutations/channelsMutations")
const { updateMessage, sendMessage, deleteMessage } = require("./mutations/messagesMutations")

module.exports = resolvers = {
   Query: {
      channels,
      channel,
      messagesBychannel,
      messages,
   },
   Mutation: {
      createChannel,
      updateChannel,
      deleteChannel,
      sendMessage,
      deleteMessage,
      updateMessage,
   }
}



