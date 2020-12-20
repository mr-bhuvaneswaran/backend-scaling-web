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
});

schema.set('collection', 'carts');
module.exports = mongoose.model('cart', schema);