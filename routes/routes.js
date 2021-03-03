const express = require('express');
const router = express.Router();
const controllers = require('./../controllers/controllers');

router.get('/cors-proxy', controllers.corsProxy);

module.exports = router;