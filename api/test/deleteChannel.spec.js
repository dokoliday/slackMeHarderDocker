const { deleteChannel } = require("../dataHandler/queries/channels/deleteChannel");
const { connect } = require("./connectTest");

beforeAll(async () => {
   name = "test";
   await connect
      .query(`INSERT INTO channel (name) VALUES ($1)`, [name])
      .then(async () => {
         console.log("first query ok")
         await connect
            .query(`UPDATE channel
            SET id = 1
            WHERE name = 'test' `)
            .then(console.log("second query ok"))
      });
});

afterAll(async () => {
   await connect
      .query(`DELETE FROM channel`)
});

describe("deleteChannel return response or throw exeption", () => {
   expect.assertions(1);
   it("deleteChannel  with good id as params", async (done) => {
      const response = await deleteChannel(1, connect);
      expect(response).toEqual("channel deleted");
      done();
   });
})

it("create channel with null as params", async (done) => {
   expect.assertions(1);
   const response = await deleteChannel(null, connect);
   expect((response)).toEqual("channelId and connect can't be null or undefined");
   done();
});

it("create channel with undifined as params", async (done) => {
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