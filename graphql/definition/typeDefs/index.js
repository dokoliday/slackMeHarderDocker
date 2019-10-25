const { gql } = require('apollo-server-express');

module.exports = typeDefs = gql`

type Query {
    channels: [Channel],
    channel(id: ID!): Channel,
    messagesBychannel(id: ID!): [Message],
    messages: [Message],
  },

type Mutation {
    deleteChannel(id:ID!): Channel,
    deleteMessage(id:ID!): Response,
    createChannel(name:String):Channel,
    sendMessage(content:String,channel_id:Int):Message,
    updateChannel(name:String,id:ID!):Channel,
    updateMessage(content:String,id:ID!):Message,
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
}
`;