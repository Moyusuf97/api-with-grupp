const express = require('express');
const router = express.Router();
const controller = require('../controllers/apiUserController')

router.post('/register', controller.registerAPIUser);
router.post('/token', controller.generateAccessToken);

module.exports = router;