const { updateChannel } = require("../../dataHandler/queries/channels/updateChannel");
const { connect } = require("../connectTest");
const channelId = 654;
const name = "TestChannelName";
const newName = "updateName";

beforeAll(
   async () => {
      return await connect
         .query(`INSERT INTO channel (name) VALUES ($1)`, [name])
         .then(() => connect
            .query(`UPDATE channel SET id = ($1)  WHERE name = ($2)`, [channelId, name]))
   });

describe("updateChannel return response or throw exeption", () => {
   expect.assertions(1);
   it("updateChannel res OK", async (done) => {
      const response = await updateChannel(newName, channelId, connect);
      expect(response.rowCount).toEqual(1);
      done();
   });
   it("channel updated exist", async (done) => {
      expect.assertions(1);
      const response = await connect.query(`SELECT * FROM channel WHERE name = ($1)`, [newName]);
      expect(response.rowCount).toEqual(1);
      done();
   });

   it("updateChannel channel with null as params", async (done) => {
      expect.assertions(1);
      const response = await updateChannel(null, connect);
      expect(response).toEqual("name and channelId and connect can't be null or undefined");
      done();
   });

   it("updateChannel channel with undefined as params", async (done) => {
      expect.assertions(1);
      const response = await updateChannel(undefined, connect);
      expect(response).toEqual("name and channelId and connect can't be null or undefined");
      done();
   });
});

afterAll(
   async () => {
      return await connect.query(`DELETE FROM message`)
         .then(() => connect.query(`DELETE FROM channel WHERE id=($1)`, [channelId]));
   });