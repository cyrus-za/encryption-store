const SimpleDb = require('simple-node-db');
const options = {
    path: './data',
    readAfterChange: true // read-back record after insert/update; else return model
};

const db = new SimpleDb(options);

module.exports = {db};