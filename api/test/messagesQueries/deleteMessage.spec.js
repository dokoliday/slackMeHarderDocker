const { deleteMessage } = require("../../dataHandler/queries/messages/deleteMessage");
const { connect } = require("../connectTest");
const message = "message de test";
const channelId = 716;
const name = "testDeleteMessage";
const messageId = 729;

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

describe("deleteMessage return response or throw exeption", () => {
   expect.assertions(1);
   it("getAllMessage for messages > 0", async (done) => {
      const response = await deleteMessage(messageId, connect);
      expect(response.rowCount > 0).toEqual(true);
      done();
   });
   it("deleteMessage with null as params", async (done) => {
      expect.assertions(1);
      const response = await deleteMessage(null, connect);
      expect(response).toEqual("messageId && connect can't be null or undefined");
      done();
   });
   it("deleteMessage with undifined as params", async (done) => {
      expect.assertions(1);
      const response = await deleteMessage(undefined, connect);
      expect(response).toEqual("messageId && connect can't be null or undefined");
      done();
   });
});
afterAll(async () => {
   return await connect.query('DELETE FROM message')
      .then(() => connect.query(`DELETE FROM channel WHERE id=($1)`, [channelId]))

});