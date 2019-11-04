const { sendMessage } = require("../../dataHandler/queries/messages/sendMessage");
const { connect } = require("../connectTest");
const message = "message de test";
const channelId = 432;
const name = "testSendMessage"
beforeAll(async () => {
   return await connect
      .query(`INSERT INTO channel (name) VALUES ($1)`, [name])
      .then(() => connect
         .query(`UPDATE channel SET id = ($1) WHERE name = ($2)`, [channelId, name]))
});

describe("sendMessage return response or throw exeption", () => {
   expect.assertions(1);
   it("getAllMessage for messages > 0", async (done) => {
      const response = await sendMessage(message, channelId, connect);
      expect(response.rowCount > 0).toEqual(true);
      done();
   });
   it("message have been send correctly in the good channel", async (done) => {
      expect.assertions(1);
      const response = await connect.query(`SELECT * FROM message WHERE channel_id = 432`)
      expect(response.rows[0].content).toEqual("message de test");
      done();
   });
   it("sendMessage with null as params", async (done) => {
      expect.assertions(1);
      const response = await sendMessage(null, connect);
      expect(response).toEqual("message && channelId && connect can't be null or undefined");
      done();
   });
   it("sendMessage with undifined as params", async (done) => {
      expect.assertions(1);
      const response = await sendMessage(undefined, connect);
      expect(response).toEqual("message && channelId && connect can't be null or undefined");
      done();
   });
});
afterAll(async () => {
   return await connect.query('DELETE FROM message')
      .then(() => connect.query(`DELETE FROM channel WHERE id=($1)`, [channelId]))
});