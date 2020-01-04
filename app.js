const express = require('express'),
      session = require('express-session'),
      indexRouter = require('./routes/indexRoutes'),
      gigRouter = require('./routes/gigRoutes'),
      venueRouter = require('./routes/venueRoutes'),
      userRouter = require('./routes/userRoutes');

const app = express();

let sessionOptions = session({
  secret: 'The Secret Session Option',
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

//app.use(bodyParser.urlencoded({extended: true}));
//app.use(methodOverride('_method'));


//ROUTES
app.use('/', indexRouter, userRouter);

// ROUTES END


module.exports = app