const mongoose = require('mongoose');

const { Schema } = mongoose;

const brandSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    }
});

const Brand = mongoose.model('Brand', brandSchema);

module.exports = Brand;