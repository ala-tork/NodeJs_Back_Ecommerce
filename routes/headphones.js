const express = require('express');
const router = express.Router();
const headphonesCtrl = require('../controllers/headphones')

router.get('', headphonesCtrl.getHeadphones);
router.get('/:id', headphonesCtrl.getById);

module.exports = router;