const express = require('express');
const Manufacturer = require('./db/Manufacturer')
const cors = require('cors')
require('./db/connectDb');
const userRoute = require('./routes/user')
const smartphonesRoute = require('./routes/smartphones')
const headphonesRoute = require('./routes/headphones')
const marqueRoute = require('./routes/manufacturers')

const app = express();
app.use(express.json());
app.use(cors({
    origin: '*'
}));
app.use('/api/products/smartphones', smartphonesRoute);
app.use('/api/products/headphones', headphonesRoute);
app.use('/api/auth', userRoute);
app.use('/api/manufacturer', marqueRoute);

const PORT = process.env.port || 3000;
app.listen(PORT, () => console.log(`app is listening on port" + ${PORT}`))
module.exports = app;