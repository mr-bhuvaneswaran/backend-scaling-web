const mongoose = require('mongoose');
const config = require('config');

var state = {
    db: null
}

exports.connect = async function() {

    if(state.db) return;

    const url = `mongodb://${config.get('db.host')}:${config.get('db.port')}/${config.get('db.name')}`
    const db = await mongoose.connect(url, {
        useNewUrlParser: true,
        useCreateIndex: true
    });

    state.db = db;
};