exports.register = (req, res) => {
  if (req.session.user) {
    res.render('user/profile');
  } else {
    res.render('register-form')
  };
};

exports.home = (req, res) => {
  res.render('index')
};