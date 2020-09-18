const mongoose = require('mongoose');

const NestedSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Field is required."],
        minlength: [2, "Must be 2 characters or more."]
    }
});

module.exports = {
    NestedSchema
}