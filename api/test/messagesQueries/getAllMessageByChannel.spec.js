const { getAllMessagesByChannel } = require("../../dataHandler/queries/messages/getAllMessagesByChannel");
const { connect } = require("../connectTest");
const channelId = 200;
const message = "message de test";
const name = "channeLTestName";

beforeAll(
   async () => {
      return await connect
         .query(`INSERT INTO channel (name) VALUES ($1)`, [name])
         .then(() => connect
            .query(`UPDATE channel SET id = ($1) WHERE name = ($2)`, [channelId, name]))
         .then(() => connect
            .query(`INSERT INTO message (content,channel_id) VALUES ($1, $2)`, [message, channelId]));
   });

describe("getAllChannels return response or throw exeption", () => {
   it("getAllChannels with null as params", async (done) => {
      const response = await getAllMessagesByChannel(channelId, connect);
      expect(response[0].content).toEqual(message);
      done();
   });
   it("create channel with null as params", async (done) => {
      expect.assertions(1);
      const response = await getAllMessagesByChannel(null, connect);
      expect(response).toEqual("channelId and connect can't be null or undefined");
      done();
   });
   it("create channel with undifined as params", async (done) => {
      expect.assertions(1);
      const response = await getAllMessagesByChannel(undefined, connect);
      expect(response).toEqual("channelId and connect can't be null or undefined");
      done();
   });
});
afterAll(async () => {
   return await connect.query('DELETE FROM message')
      .then(() => connect.query(`DELETE FROM channel WHERE id=($1)`, [channelId]))

});