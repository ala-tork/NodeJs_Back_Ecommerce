const Product = require('../Model/Product')
exports.getSmartphones = async (req, res) => {
    try {

        let { product_title, size, page, minprice, maxprice, manufacturer } = req.query;

        if (page == 'null' || page == undefined) {
            page = 0;
        }
        if (size == 'null' || size == undefined) {
            size = 16;
        }
        const limit = parseInt(size);

        let searchQuery = {};
        if (product_title !== 'null' && product_title != undefined) {
            searchQuery.title = { $regex: product_title, "$options": "i" }
        }
        if (minprice !== 'null' && minprice != undefined) {
            searchQuery.price = { $gte: minprice }
        }
        if (maxprice !== 'null' && maxprice != undefined) {
            searchQuery.price = { $lte: maxprice }
        }
        if (manufacturer !== 'null' && manufacturer != undefined) {
            if (manufacturer.length !== 0) {
                manufacturer = manufacturer.split(' ');
                searchQuery.manufacturer = { $in: manufacturer };
            }
        }

        const products = await Product.find(searchQuery).limit(limit).skip(+size * +page)
        const total = await Product.countDocuments(searchQuery);

        res.status(200).send({
            page: page,
            size,
            totalPages: Math.floor((total / size)),
            totalItems: total,
            data: products
        });

    }
    catch (error) {
        res.sendStatus(500);
    }

}

exports.getById = async (req, res) => {
    const product = await Product.find({ _id: req.params.id })
    res.status(200).send(product)
}