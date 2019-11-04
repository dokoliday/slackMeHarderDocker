const { updateMessage } = require("../../dataHandler/queries/messages/updateMessage");
const { connect } = require("../connectTest");
const message = "message de test";
const messageUpdate = "message Update OK"
const channelId = 736;
const name = "testUpdateMessage";
const messageId = 629;

beforeAll(
   async () => {
      return await connect
         .query(`INSERT INTO channel (name) VALUES ($1)`, [name])
         .then(() => connect
            .query(`UPDATE channel SET id = ($1) WHERE name = ($2)`, [channelId, name]))
         .then(() => connect
            .query(`INSERT INTO message (content,channel_id) VALUES ($1, $2)`, [message, channelId]))
         .then(() => connect
            .query(`UPDATE message SET id = ($1) WHERE channel_id = ($2)`, [messageId, channelId]))
   });

describe("updateMessage return response or throw exeption", () => {
   expect.assertions(1);
   it("getAllMessage for messages > 0", async (done) => {
      const response = await updateMessage(messageUpdate, messageId, connect);
      expect(response.rowCount > 0).toEqual(true);
      done();
   });
   it("updateMessage with null as params", async (done) => {
      expect.assertions(1);
      const response = await updateMessage(null);
      expect(response).toEqual("message && messageId && connect can't be null or undefined");
      done();
   });
   it("updateMessage with undifined as params", async (done) => {
      expect.assertions(1);
      const response = await updateMessage(undefined);
      expect(response).toEqual("message && messageId && connect can't be null or undefined");
      done();
   });
});
afterAll(async () => {
   return await connect.query('DELETE FROM message')
      .then(() => connect.query(`DELETE FROM channel WHERE id=($1)`, [channelId]))

});