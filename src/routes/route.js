const express = require('express')
const router = express.Router()


const controller = require('../controller/controller.js');


router.post('/generate-password', controller.generatePassword);

module.exports = router;