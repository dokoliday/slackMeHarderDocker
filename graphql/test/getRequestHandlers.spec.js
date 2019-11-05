const getRequestHandlers = require("../helpers/getRequestHandlers");

describe("getRequestHandlers works correctly", () => {
   expect.assertions(3);
   it("on this scope getRequestHandler must\
   require all function or objects of js files ", async (done) => {
      const filesRequired = await getRequestHandlers(__dirname);
      expect(filesRequired.multiplyByTwo(2)).toEqual(4);
      expect(filesRequired.myObject.testString).toEqual("myTest");
      expect(filesRequired.myObject.testNumber).toEqual(2);
      done();
   });
   it("on a nested scope getRequestHandler must\
   require all function or objects of js files ", async (done) => {
      const filesRequired = await getRequestHandlers(`${__dirname}/testRequestHandler`);
      expect(filesRequired.multiplyByTwo(2)).toEqual(4);
      expect(filesRequired.myObject.testString).toEqual("myTest");
      expect(filesRequired.myObject.testNumber).toEqual(2);
      done();
   })

})
