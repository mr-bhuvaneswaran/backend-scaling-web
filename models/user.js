const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    name: String,
    email : {
        type: String,
        unique: true
    },
    cart: {
        type: mongoose.Types.ObjectId,
        ref: 'cart'
    }
}, {
    timestamps: true
});
schema.set('collection', 'users');
module.exports = mongoose.model('user', schema);