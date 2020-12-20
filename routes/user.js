const express = require('express');
const router = express.Router();
const UserController = require('../controllers/user');

router.get('/user', UserController.getUser)

module.exports = router;