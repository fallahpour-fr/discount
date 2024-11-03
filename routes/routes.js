const express = require('express');
const router = express.Router();
const controllers = require('../controller/controller');

router.get('/get-commodity',controllers.getAllCommodities);
router.post('/create-commodity',controllers.createCommodity);
router.post('/discount',controllers.discount);

module.exports = router;