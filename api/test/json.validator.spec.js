const {
   validate,
   idMessageSchema,
   idChannelSchema,
   channelNameSchema,
   messageSchema
} = require("../helpers/jsonSchemaValidator")

describe("the module json validate work correctly", () => {
   it("validate return params if params is validate by schema ", () => {
      const params = "string";
      expect(validate(params, channelNameSchema)).toEqual(params)
   });
   it("validation throw exception if params is not validate by schema ", () => {
      const params = 1;
      expect(() => validate(params, channelNameSchema)).toThrow()
   });
   it("validate return params if params is validate by schema ", () => {
      const params = 1;
      expect(validate(params, idMessageSchema)).toEqual(params)
   });
   it("validation throw exception if params is not validate by schema ", () => {
      const params = "test";
      expect(() => validate(params, idMessageSchema)).toThrow()
   });
   it("validate return params if params is validate by schema ", () => {
      const params = "string";
      expect(validate(params, messageSchema)).toEqual(params)
   });
   it("validation throw exception if params is not validate by schema ", () => {
      const params = 1;
      expect(() => validate(params, messageSchema)).toThrow()
   });
   it("validate return params if params is validate by schema ", () => {
      const params = 1;
      expect(validate(params, idChannelSchema)).toEqual(params)
   });
   it("validation throw exception if params is not validate by schema ", () => {
      const params = "test";
      expect(() => validate(params, idChannelSchema)).toThrow()
   })
});