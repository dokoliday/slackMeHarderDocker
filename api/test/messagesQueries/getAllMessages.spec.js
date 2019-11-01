const { getAllMessages } = require("../../dataHandler/queries/messages/getAllMessages");
const { connect } = require("../connectTest");
const message = "message de test";
const  nbInsertion = 5;
const channelId = 311;
const name = "testMessageGetAll"
beforeAll(async () => {
      return await connect
      .query(`INSERT INTO channel (name) VALUES ($1)`, [name])
      .then(() => connect
         .query(`UPDATE channel SET id = ($1) WHERE name = ($2)`, [channelId, name]))
      .then(() => {
      for (let i = 0; i < nbInsertion; i++) {
      return connect
         .query(`INSERT INTO message (content,channel_id) VALUES ($1, $2)`, [message, channelId])
      }});
});

describe("getAllChannels return response or throw exeption", () => {
      expect.assertions(2);
      it("getAllMessage for messages > 0", async (done) => {
         const response = await getAllMessages(connect);
         expect(response.length > 0).toEqual(true);
         expect(typeof response[0] === "object").toEqual(true);
         done();
      });
   it("getAllChannel with null as params", async (done) => {
      expect.assertions(1);
      const response = await getAllMessages(null, connect);
      expect(response).toEqual("connect can't be null or undefined");
      done();
   });
   it("getAllChannel with undifined as params", async (done) => {
      expect.assertions(1);
      const response = await getAllMessages(undefined, connect);
      expect(response).toEqual("connect can't be null or undefined");
      done();
   });
});
afterAll(async () => {
   return await connect.query('DELETE FROM message')
});