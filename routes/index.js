const express = require('express');
const router = express.Router();
const discountRoutes = require('./routes');

router.use('/discounts',discountRoutes);

module.exports = router;