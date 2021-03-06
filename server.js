const dotenv = require('dotenv');
const mongodb = require('mongodb');
const MongoClient = require('mongodb').MongoClient;

dotenv.config({ path: './config.env' });

mongodb.connect(process.env.DATABASE, 
  {useNewUrlParser: true, useUnifiedTopology: true}, function(err, client) {
    module.exports = client;
    const app = require('./app');
    app.listen(process.env.PORT);
});