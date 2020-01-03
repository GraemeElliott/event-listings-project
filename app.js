const express = require('express'),
      indexRouter = require('./routes/indexRoutes'),
      gigRouter = require('./routes/gigRoutes'),
      venueRouter = require('./routes/venueRoutes'),
      userRouter = require('./routes/userRoutes');

const app = express();



app.set('views', 'views');
app.set('view engine', 'ejs');
app.use(express.json());
//app.use("/assets", express.static(__dirname + "/assets"));
//app.use(bodyParser.urlencoded({extended: true}));
//app.use(methodOverride('_method'));


//ROUTES
app.use('/', indexRouter, userRouter);

// ROUTES END


app.listen(process.env.PORT || 3000);