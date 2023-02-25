const { Schema, default: mongoose } = require("mongoose");

const AccountSchema = new Schema({
    name : String,
    userName : String,
    email : String,
    avtar : String,
    createdAt : String,
    walletAddress : String,
    phoneNumber : Number,
})

const AccountModal = mongoose.model('Accounts', AccountSchema);

module.exports = AccountModal;