const { getAllChannels } = require("../../dataHandler/queries/channels/getAllChannels");
const { connect } = require("../connectTest");
const nbInsertion = 3;
const name = "nametest";

beforeAll( async () => {
      for (let i = 0; i < nbInsertion; i++) {
         await connect.query(`INSERT INTO channel (name) VALUES ($1)`, [name])
      };
   });

describe("getAllChannels return response or throw exeption", () => {
   expect.assertions(2);
   it("getAllChannels for channels > 0", async (done) => {
      const response = await getAllChannels(connect);
      expect(response.length > 0).toEqual(true);
      expect(typeof response[0] === "object").toEqual(true);
      done();
   });

   it("getAllChannels for channels === 0", async (done) => {
      expect.assertions(1);
      await connect.query(`DELETE FROM channel`);
      return getAllChannels(connect).catch(res => {
         expect(res)
            .toEqual({ "message": "No channels", "status": 400 })
         done();
      })
   });
   it("getAllChannels with undifined as params", async (done) => {
      expect.assertions(1);
      const response = await getAllChannels(undefined);
      expect(response).toEqual("connect can't be null or undefined");
      done();
   });
   it("getAllChannels with null as params", async (done) => {
      expect.assertions(1);
      const response = await getAllChannels(null);
      expect(response).toEqual("connect can't be null or undefined");
      done();
   });
});

afterAll(async () => {
   return await connect
      .query(`DELETE FROM channel`)
});