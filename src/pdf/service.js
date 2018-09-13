const express = require('express');
const service = express.Router();
const getAllOperation = require('./operation/getAll');
const createOperation = require('./operation/create');


service.get('/pdf/all', (request, response) => {
    getAllOperation(result => { response.status(result.status).send(result.value) });
});

service.post('/pdf/create', (request, response) => {
    createOperation(request.body, result => { response.status(result.status).send(result.value) });
});

service.get('/find-one', (request, response) => {

});

module.exports = service;
