const Validator = require('jsonschema').Validator;
const validator = new Validator();

const idMessageSchema = {
    "id": "/idMessage",
    "type": "string",
    "pattern":"^[0-9]*$"
};
const idChannelSchema = {
    "id": "/idChannel",
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
    idChannelSchema,
    channelNameSchema
};