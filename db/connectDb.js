const mongoose = require('mongoose');
mongoose.set('strictQuery', false);
mongoose.connect('mongodb+srv://system:system@cluster0.8dld4l3.mongodb.net/octaplace?retryWrites=true&w=majority')
    .then(() => console.log('mongo db is connected ...'))
    .catch(error => console.error('mongo not connected ...', error.message))