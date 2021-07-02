const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    authors: Array,
    description: String,
    image: String,
    link: {
        type: String,
        required: true,
        unique: true
    }
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;