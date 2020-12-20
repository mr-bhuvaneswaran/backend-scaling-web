const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    items: [{
        product: {
            type: mongoose.Types.ObjectId,
            ref: 'product'
        },
        quantity: {
            type: Number,
            default: 0
        }
    }],
    status: String,
    userId: {
        type: mongoose.Types.ObjectId,
        ref: 'user'
    }
});

schema.set('collection', 'orders');
module.exports = mongoose.model('order', schema);