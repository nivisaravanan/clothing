const mongoose = require('mongoose');
var employeeSchema = new mongoose.Schema({
    name: {
        type: String
    },
    image: {
        type: String
    },
    description: {
        type: String
    },
    size: {
        type: String
    },
    color:
    {
        type: String
    },
    price:
    {
        type: Number
    }
});
mongoose.model('Employee', employeeSchema);