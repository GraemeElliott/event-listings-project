const express = require('express'),
      session = require('express-session'),
      MongoStore = require('connect-mongo')(session),
      router = require('./router');

const app = express();

let sessionOptions = session({
  secret: 'The Secret Session Option',
  store: new MongoStore({client: require('./server'), dbName: 'writersbloc'}),
  resave: false,
  saveUninitialized: false,
  cookie: {maxAge: 1000 * 60 * 60 * 24, httpOnly: true}
});

app.use("/public", express.static(__dirname + "/public"));
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(sessionOptions);


app.set('views', 'views');
app.set('view engine', 'ejs'); 

//ROUTES
app.use('/', router);

// ROUTES END


module.exports = app