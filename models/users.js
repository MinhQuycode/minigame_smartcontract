const mongoose = require('mongoose');
const { Schema } = mongoose;

const usersSchema = new Schema({
    email: String,
    name: String,
    phone: String,
    pay: Boolean,
    addressWallet: String,
    dateRegis: Date
});

module.exports = mongoose.model("User", usersSchema)