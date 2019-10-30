const { gql } = require('apollo-server');

module.exports = typeDefs = gql`

type Query {
    channels: [Channel],
    channel(id: ID!): Channel,
    messagesBychannel(id: Int): [Message],
    messages: [Message],
  },

type Mutation {
    deleteChannel(id:ID!): Response,
    deleteMessage(id:ID!): Response,
    createChannel(name:String):Response,
    sendMessage(content:String,channel_id:Int):Response,
    updateChannel(name:String,id:Int):Response
    updateMessage(content:String,id:Int):Response,
},

type Channel {
    id: ID!,
    name: String,
    created_at: String,
    updated_at: String,
  },

type Message{
    id: ID!,
    content: String,
    created_at: String,
    updated_at: String,
    channel_id: Int,
},
type Response{
    status:Int,
    message:String,
}
`;