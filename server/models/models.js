const mongoose = require('mongoose');
const { NestedSchema } = require('./nested.model');

const AuthorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Field is required."],
        minlength: [3, "Must be 3 characters or more."]
    },
    books: [NestedSchema]
}, { timestamps: true });

const Author = mongoose.model("Author", AuthorSchema);

module.exports = {
    Author
}