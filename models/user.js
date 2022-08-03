const mongoose = require('mongoose');
const validator = require('validator');

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      validate: {
        validator: validator.isEmail,
      },
    },
    password: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      minlength: 2,
      maxlength: 30,
      required: true,
    },
    about: {
      type: String,
      minlength: 2,
      maxlength: 30,
      required: true,
    },
    avatar: {
      type: String,
      required: true,
    },
  },
  {
    versionKey: false,
  },
);

const User = mongoose.model('user', userSchema);

module.exports = { User };
