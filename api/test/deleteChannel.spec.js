const { deleteChannel } = require("../dataHandler/queries/channels/deleteChannel");
const { connect } = require("./connectTest");

beforeAll(() => {
   name = "test";
   return connect
      .query(`INSERT INTO channel (name) VALUES ($1)`, [name])
      .then(() => {
         connect
            .query(`UPDATE channel
            SET id = 1
            WHERE name = 'test' `)
      })
});
afterAll(() => {
   return connect
      .query(`DELETE FROM channel`)
});
describe("deleteChannel return response or throw exeption", () => {
   it("deleteChannel  with number as params", async () => {
      const response = await deleteChannel(1, connect);
      expect(response).toEqual("channel deleted");
   });
   it("create channel with null as params", async () => {
      const response = await deleteChannel(null, connect);
      expect((response)).toEqual("channelId and connect can't be null or undefined");
   });
   it("create channel with undifined as params", async () => {
      const response = await deleteChannel(undefined, connect);
      expect((response)).toEqual("channelId and connect can't be null or undefined");
   });
   it("deleteChannel with number as params", async () => {
      expect.assertions(1);
      return deleteChannel(2, connect).catch(res => {
         console.log(res)
         expect(res).toEqual({ "message": "No channel with this id", "status": 400 }
         )
      })
   });
});