const mongoDB = require('../../database/mongo');
const pdfConfig = require('../config');
const httpStatusCode = require('../../constant/httpStatusCode');

module.exports = (pdf, service) => {
    mongoDB(database => {
        database.collection(pdfConfig.databaseCollectionName).insertOne(pdf, (error, result) => {
            if (error) {
                console.error(error);
                service({status: httpStatusCode.INTERNAL_SERVER_ERROR, value: 'could not create'});
            }
            service({status: httpStatusCode.OK, value: result})
        })
    });
};
