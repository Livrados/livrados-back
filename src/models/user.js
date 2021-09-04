const mongoose = require ('mongoose');

const UserSchema = new mongoose.Schema({
   name: {
      type: String,
      required: true,
      lowercase: true,
   },
   email: {
      type: String,
      unique: true,
      required: true,
      lowercase: true,
   },
   password: {
      type: String,
      required: true,
      select: false,
   },
   phone: {
      type: Number,
      required: true,
   },
   cep: {
      type: Number,
      required: true,
   },
   addressNumber: {
      type: Number,
      required: true,
   },
   createdAt: {
      type: Date,
      default: Date.now,
   }
});

const User = mongoose.model('User', UserSchema);
module.exports = User;