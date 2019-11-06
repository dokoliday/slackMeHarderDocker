const { connect } = require("../../helpers/connect");
const name = "tutu";
beforeAll(
   async () => {
      return await connect
         .query(`CREATE DATABASE tutu`)
   });

describe("db created must exist", () => {
   it("getAllMessage for messages > 0", async (done) => {
      expect.assertions(1);

      const testDb = await connect
         .query('SELECT datname FROM pg_database')
         .then(res => res.rows.find(element => element.datname === name))
      expect(testDb.datname).toEqual(name)
      done();
   });
})
afterAll(async () => {
   return await connect.query(`DROP DATABASE ${name}`)
})
