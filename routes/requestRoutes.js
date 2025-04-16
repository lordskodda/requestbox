const express = require('express');
const router = express.Router();
const requestController = require('../controllers/requestController');

router.get('/', requestController.getRequests);
router.post('/', requestController.createRequest);

module.exports = router;
