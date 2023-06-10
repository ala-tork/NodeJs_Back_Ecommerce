const Manufacturer = require('../db/Manufacturer');
const HeadphonesMarque = require('../db/HeadphonesMarque');

exports.getSmartphonesMarque = async (req, res) => {
    const manufacturers = await Manufacturer.find();
    res.status(200).send(manufacturers);
}


exports.getHeadphonesManufacturer = async (req, res) => {
    const manufacturers = await HeadphonesMarque.find();
    res.status(200).send(manufacturers);
}