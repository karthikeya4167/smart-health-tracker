const express = require('express');
const router = express.Router();
const { getWeeklyHistory } = require('../controllers/healthController');

router.get('/history', getWeeklyHistory);

module.exports = router;