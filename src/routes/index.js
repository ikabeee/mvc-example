const express = require('express');
const router = express.Router();
const HelloRoutes = require('./HelloRoutes');

router.use('/hello-world', HelloRoutes)

module.exports= router;