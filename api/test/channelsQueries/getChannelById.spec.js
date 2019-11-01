const { getChannelById } = require("../../dataHandler/queries/channels/getChannelById");
const { connect } = require("../connectTest");
const channelId = 123;
const name = "allChannelName";

beforeAll(
   async () => {
      return await connect
         .query(`INSERT INTO channel (name) VALUES ($1)`, [name])
         .then(() => connect
            .query(`UPDATE channel SET id = ($1)  WHERE name = ($2)`, [channelId, name]))
   });

describe("getChannelById return response or throw exeption", () => {
   it("getChannelById res OK", async (done) => {
      const response = await getChannelById(channelId, connect);
      expect(response[0].name).toEqual(name);
      done();
   });

   it("getAllChannelById channel with null as params", async (done) => {
      expect.assertions(1);
      const response = await getChannelById(null, connect);
      expect(response).toEqual("id and connect can't be null or undefined");
      done();
   });

   it("getAllChannelById channel with undefined as params", async (done) => {
      expect.assertions(1);
      const response = await getChannelById(undefined, connect);
      expect(response).toEqual("id and connect can't be null or undefined");
      done();
   });
});

afterAll(
   async () => {
      return await connect.query(`DELETE FROM message`)
         .then(() => connect.query(`DELETE FROM channel WHERE id=($1)`, [channelId]));
   });