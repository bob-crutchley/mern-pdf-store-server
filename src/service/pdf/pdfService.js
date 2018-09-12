/*
let MongoClient = require('mongodb').MongoClient;
let url = "mongodb://10.0.10.10:27017/";

(req, res) => {
    MongoClient.connect(url, (err, db) => {
        if (err) throw err;
        let dbo = db.db("mydb");
        dbo.collection("test").insertOne(req.body, function(err, mongoResponse) {
            if (err) throw err;
            db.close();
            res.send("added new entry")
        });
    });
 */
const getAll = require('getAll');
const getById = require('getById');
const deleteById = require('delete');
const createPdf = require('create');

module.exports = {
    getAll: (request, response) => {
        response.send('all accounts');
    },
    getById: (request, response) => {
        response.send('an account by id');
    },
    create: (request, response) => {
        response.send('created account: ' + request.body);
    },
    delete: (request, response) => {
        response.send('');
    }
};
