const mongoose = require('mongoose');
mongoose.connect('mongodb://0.0.0.0:27017/product', { useNewUrlParser: true }, (err) => {
    if (!err) { console.log('MongoDB Connection Succeeded.') }
    else { console.log('Error in DB connection : ' + err) }
});
require('./product.model');