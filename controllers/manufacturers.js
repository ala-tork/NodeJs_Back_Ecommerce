const Manufacturer = require('../Model/Manufacturer');
const HeadphonesMarque = require('../Model/HeadphonesMarque');

exports.getSmartphonesMarque = async (req, res) => {
    const manufacturers = await Manufacturer.find();
    res.status(200).send(manufacturers);
}


exports.getHeadphonesManufacturer = async (req, res) => {
    const manufacturers = await HeadphonesMarque.find();
    res.status(200).send(manufacturers);
}