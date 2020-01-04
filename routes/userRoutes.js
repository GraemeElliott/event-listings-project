const express = require('express'),
      authenticationController = require('../controllers/authenticationController');

const router = express.Router();

router
  .route('/register')
  .post(authenticationController.register);

router
  .route('/login')
  .post(authenticationController.login);


module.exports = router