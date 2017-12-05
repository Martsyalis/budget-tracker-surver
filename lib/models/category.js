const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CategorySchema = new Schema({
    name: {
        type: String,
        required: true
    },
    budget: {
        type: Number,
        required: true
    },
    expenses: [
        {
            name: String,
            amount: Number
        }
    ]
});

module.exports = mongoose.model('Category', CategorySchema);