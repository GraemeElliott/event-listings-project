const dotenv = require('dotenv'),
      mongodb = require('mongodb').MongoClient;

dotenv.config({ path: './config.env' });

mongodb.connect(process.env.DATABASE, 
  {useNewUrlParser: true, useUnifiedTopology: true}, function(err, client) {
    module.exports = client.db('eventlistings');
    const app = require('./app');
    app.listen(process.env.PORT);
});