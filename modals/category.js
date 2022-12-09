

import mongoose from 'mongoose';
const { Schema } = mongoose;

const galleryCategorySchema = new Schema({
  name: {type: String, required: true},
  created: { type: Date},
  updated: {type: Date}
});

const imagesGallerySchema = new Schema({
    name: {type: String, required: true},
    created: { type: Date},
    updated: {type: Date},
    category: [String], 
    likes: {type: Number},
    imgLink: {type: String}
})

const Admin = mongoose.model('admin', galleryCategorySchema);
const User = mongoose.model('user', imagesGallerySchema);

module.exports = {
    Admin, User
}