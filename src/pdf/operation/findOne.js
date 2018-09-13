const mongoDB = require('../../database/mongo');
const pdfConfig = require('../config');
const httpStatusCode = require('../../constant/httpStatusCode');

module.exports = (pdf, service) => {
    mongoDB(database => {
        database.collection(pdfConfig.databaseCollectionName).findOne(pdf).then(result => {
            service({status: httpStatusCode.OK, value: result})
        }).catch(error => {
            console.error(error);
            service({status: httpStatusCode.INTERNAL_SERVER_ERROR})
        });
    });
};
