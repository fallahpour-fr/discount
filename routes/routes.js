const express = require('express');
const router = express.Router();
const controllers = require('../controller/controller');

router.get('/commodity',controllers.commodity);

module.exports = router;