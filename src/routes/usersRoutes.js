const express = require('express');
const { getUsers } = require('../handlers/usersHandlers');
const router = express.Router();

router.get('/', getUsers);

module.exports = router;
