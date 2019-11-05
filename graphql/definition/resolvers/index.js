const getRequestHandlers = require("../../helpers/getRequestHandlers");

console.log(Object.keys(getRequestHandlers(`${__dirname}/mutations`)))
console.log(Object.keys(getRequestHandlers(`${__dirname}/queries`)))

module.exports = resolvers = {
   Query: getRequestHandlers(`${__dirname}/queries`),
   Mutation: getRequestHandlers(`${__dirname}/mutations`)
}



