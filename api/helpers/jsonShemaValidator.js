const Validator = require('jsonschema').Validator;
const validator = new Validator();

// Address, to be embedded on Person
const idMessageSchema = {
    "id": "/idMessage",
    "type": "string",
    "pattern":"^[0-9]*$"
};
const channelNameSchema = {
    "id": "/channelName",
    "type": "string",
    "minLength": 1,
    "maxLength": 300,
};
module.exports=
 {
    validator,
    idMessageSchema,
    channelNameSchema
};