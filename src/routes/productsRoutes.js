

const express = require('express');
const { getProducts } = require('../handlers/productsHandlers');
const router = express.Router();

router.get('/', getProducts);

module.exports = router;
