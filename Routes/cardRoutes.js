const express = require('express');
const cardController = require('../Controllers/CardController');

const router = express.Router();

router.post('/add-card-details', cardController.addCardDetails);
router.put('/update-card-details', cardController.updateCardDetails);

module.exports = router;
