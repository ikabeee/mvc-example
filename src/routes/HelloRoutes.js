const express = require('express');
const HelloController = require('./../controllers/HelloController')


const router = express.Router();


router
    .route('/')
    .get(HelloController.getHelloWorld)


module.exports = router;