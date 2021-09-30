const mongoose = require ('mongoose');

const BookSchema = new mongoose.Schema({
   title: {
      type: String,
      required: true,
   },
   isbn: {
       type: Number,
       required: true,
   },
   author: {
       type: String,
   },
   edition: {
       type: String,
   },
   publisher: {
       type: String,
   },
   language: {
       type: String,
   },
   category: {
       type: String,
   },
   user_name: {
      type: String,
      required: true,
   },
   user_id: {
      type: String,
      required: true,
   },
   user_phone: {
      type: Number,
      required: true,
   },
   user_cep: {
      type: Number,
      required: true,
   },
   user_addressNumber: {
      type: Number,
      required: true,
   },
   createdAt: {
      type: Date,
      default: Date.now,
   }
});

const Book = mongoose.model('Book', BookSchema);
module.exports = Book;