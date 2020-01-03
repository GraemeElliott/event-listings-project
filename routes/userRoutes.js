const express = require('express'),
      authenticationController = require('../controllers/authenticationController');

const router = express.Router();

router
  .route('/register')
  .get(authenticationController.register);

module.exports = router