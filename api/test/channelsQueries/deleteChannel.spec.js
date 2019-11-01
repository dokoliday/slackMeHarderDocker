const { deleteChannel } = require("../../dataHandler/queries/channels/deleteChannel");
const { connect } = require("../connectTest");
const name = "channelNameTest";
const channelId = 1;

beforeAll(async () => {
   return await connect
      .query(`INSERT INTO channel (name) VALUES ($1)`, [name])
      .then(() => connect
         .query(`UPDATE channel SET id = ($1) WHERE name = ($2)`, [channelId, name])
      );
});

describe("deleteChannel return response or throw exeption", () => {
   expect.assertions(1);
   it("deleteChannel  with good id as params", async (done) => {
      const response = await deleteChannel(channelId, connect);
      expect(response).toEqual("channel deleted");
      done();
   });
});

it("deleteChannel with null as params", async (done) => {
   expect.assertions(1);
   const response = await deleteChannel(null, connect);
   expect((response)).toEqual("channelId and connect can't be null or undefined");
   done();
});

it("deleteChannel with undefined as params", async (done) => {
   expect.assertions(1);
   const response = await deleteChannel(undefined, connect);
   expect((response)).toEqual("channelId and connect can't be null or undefined");
   done();
});

it("deleteChannel with wrong id as params", async (done) => {
   expect.assertions(1);
   return deleteChannel(2, connect).catch(res => {
      expect(res)
         .toEqual({ "message": "No channel with this id", "status": 400 })
      done();
   });
});

afterAll(async () => {
   return await connect
      .query(`DELETE FROM channel WHERE id=($1)`, [channelId])
});