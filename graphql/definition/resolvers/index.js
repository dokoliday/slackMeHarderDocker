const getRequestHandlers = require("../../helpers/getRequestHandlers");

console.log({
   resolvers:
   {
      mutations: Object.keys(getRequestHandlers(`${__dirname}/mutations`)),
      queries: Object.keys(getRequestHandlers(`${__dirname}/queries`))
   }
});

module.exports = resolvers = {
   Query: getRequestHandlers(`${__dirname}/queries`),
   Mutation: getRequestHandlers(`${__dirname}/mutations`)
}



