const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    name: String,
    productCode: {
        type: String,
        unique: true
    }
});

schema.set('collection', 'products');
module.exports = mongoose.model('product', schema);