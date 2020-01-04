const User = require('../models/userModel');

exports.register = (req, res) => {
  let user = new User(req.body);
  user.register();
  if (user.errors.length) {
    res.send(user.errors)
  } else {
    res.send ("No errors")
  };
};

exports.login = function (req, res) {
  let user = new User(req.body)
  user.login()
    .then(function(result) {
      req.session.user = {username: user.data.username, _id: user.data._id};
      res.send(result)
    })
    .catch(function(error) {
      res.send(error)
    });
  };

exports.home = function(req, res) {
  if (req.session.user) {
    res.send('Welcome to the actual application!!!');
  } else {
    res.render('home-guest');
  }
};