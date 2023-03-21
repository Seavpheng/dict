const express = require('express');
const dictionaryController = require('../controllers/dictionary-controller');
const router = express.Router();
 
router.route('/').get(dictionaryController.query);

module.exports = router;