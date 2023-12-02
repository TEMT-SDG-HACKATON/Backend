const express = require('express');
const investmentController = require('../Controllers/InvestmentController');

const router = express.Router();

router.get('/get-investments', investmentController.getInvestments);
router.post('/invest-in-farm', investmentController.investInFarm);

module.exports = router;
