const Validator = require('jsonschema').Validator;
const validator = new Validator();

const idMessageSchema = {
    "id": "/idMessage",
    "type": "number",
    "pattern": "^[0-9]*$"
};
const idChannelSchema = {
    "id": "/idChannel",
    "type": "number",
    "pattern": "^[0-9]*$"
};
const channelNameSchema = {
    "id": "/channelName",
    "type": "string",
    "minLength": 1,
    "maxLength": 300
};
const messageSchema = {
    "id": "/message",
    "type": "string",
    "minLength": 1,
    "maxLength": 30000
};
const validate = (item, schema) => {
    const result =  validator.validate(item, schema);
    if (result.errors.length > 0) {
        throw (result.errors[0].message)
    } 
    return item;
}
module.exports =
    {
        validate,
        idMessageSchema,
        idChannelSchema,
        channelNameSchema,
        messageSchema
    };