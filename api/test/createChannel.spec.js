const { createChannel } = require("../dataHandler/queries/channels/createChannel");
const { connect } = require("./connectTest");


describe("createChannel return response or throw exeption", () => {
   expect.assertions(1);
   it("create channel with string as params", async (done) => {
      const response = await createChannel("nametest", connect);
      expect(response.rowCount).toEqual(1);
      done();
   });
   it("create channel with null as params", async (done) => {
      expect.assertions(1);
      const response = await createChannel(null, connect);
      expect((response)).toEqual("name and connect can't be null or undefined");
      done();
   });

   it("create channel with undifined as params", async (done) => {
      const response = await createChannel(undefined, connect);
      expect((response)).toEqual("name and connect can't be null or undefined");
      done();
   });
})