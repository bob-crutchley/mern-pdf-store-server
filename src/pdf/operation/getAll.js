const mongoDB = require('../../database/mongo');
const pdfConfig = require('../config');
const httpStatusCode = require('../../constant/httpStatusCode');

module.exports = service => {
    mongoDB(database => {
        database.collection(pdfConfig.databaseCollectionName).find().toArray((error, result) => {
            if (error) {
                console.error(error);
                service({status: httpStatusCode.INTERNAL_SERVER_ERROR, value: 'could not create'});
            }
            service({status: httpStatusCode.OK, value: result})
        })
    });
};
