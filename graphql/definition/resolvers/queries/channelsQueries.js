const fetch = require("node-fetch");
const host = process.env.API_HOST

const channels = () => {
   return fetch(`http://${host}:4201/api/channels`)
      .then(res => res.json())
      .then(res => {
         console.log(res)
         if (res.status === 400) {
            return new Error(res.message)
         } return res
      }
      );
};
const channel = (_, { id }) => {
   return fetch(`http://${host}:4201/api/channels/${id}`)
      .then(res => res.json())
      .then(channel => {
         if (channel.status === 400) {
            return new Error(channel.message)
         } return channel[0];
      });

}

module.exports = { channel, channels }