const databaseConfig = require('./config');
let MongoClient = require('mongodb').MongoClient;

module.exports = (exec) => {
    MongoClient.connect(databaseConfig.url, {useNewUrlParser: true}).then(db => {
        let database = db.db(databaseConfig.name);
        exec(database);
        db.close().then().catch(error => console.error(error))
    }, err => {
        console.error('database connection failed');
        throw err
    });
};
