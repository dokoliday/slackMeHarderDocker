const { createChannel } = require("../dataHandler/queries/channels/createChannel");
const { connect } = require("./connectTest");

beforeAll(() => {
   return connect
      .query(`DELETE FROM channel`)
});
afterAll(() => {
   return connect
      .query(`DELETE FROM channel`)
});

describe("createChannel return response or throw exeption", () => {
   it("create channel with string as params", async () => {
      const response = await createChannel("nametest", connect);
      expect(response.rowCount).toEqual(1);
   });
   it("create channel with null as params", async () => {
      const response = await createChannel(null, connect);
      expect((response)).toEqual("name and connect can't be null or undefined");
   });
   it("create channel with undifined as params", async () => {
      const response = await createChannel(undefined, connect);
      expect((response)).toEqual("name and connect can't be null or undefined");
   });
});