const { connect } = require("../helpers/connect")
const createTestDb = async (name) => {
   try {
      await connect
         .query('SELECT datname FROM pg_database')
         .then(res => {
            if (res.rows
               .find(element => element.datname === name) !== {}) {
               console.log(`db name:${name} created`);
               return connect
                  .query(`CREATE DATABASE ${name}`)
            }
            console.log("##############")
            console.log("db allready exist")
            console.log("##############")
         })
   } catch (error) {
      return error;
   };
}

createTestDb(process.env.DB_TEST_NAME)



