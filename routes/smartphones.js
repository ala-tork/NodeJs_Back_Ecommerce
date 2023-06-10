const express = require('express');
const router = express.Router();
const smartphonesCtrl = require('../controllers/smartphones')

router.get('', smartphonesCtrl.getSmartphones);
router.get('/:id', smartphonesCtrl.getById);

module.exports = router;