const express = require('express');
const router = express.Router();
const manufaturerCtrl = require('../controllers/manufacturers')

router.get('/headphones', manufaturerCtrl.getHeadphonesManufacturer)
router.get('', manufaturerCtrl.getSmartphonesMarque)

module.exports = router;
