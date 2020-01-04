const express = require('express');
const indexController = require('../controllers/indexController');

const router = express.Router();

router
.route('/')
.get(indexController.home);

router
  .route('/register')
  .get(indexController.register);

module.exports = router