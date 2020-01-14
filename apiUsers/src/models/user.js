// Require Mongoose
const mongoose = require('mongoose');

// Define a schema
const Schema = mongoose.Schema;

const UserModelSchema = new Schema({
    userName: String,
    email: String
});
// Export model from schema
module.exports = mongoose.model('users', UserModelSchema);;