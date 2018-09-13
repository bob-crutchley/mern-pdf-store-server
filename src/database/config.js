let databaseConfig = {
    name: 'pdf-store',
    url: "mongodb://localhost:27017"
};
if(process.env.DATABASE_URL) databaseConfig.url = process.env.DATABASE_URL;
if(process.env.DATABASE_NAME) databaseConfig.name = process.env.DATABASE_NAME;
module.exports = databaseConfig;
