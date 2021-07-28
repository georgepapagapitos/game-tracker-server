const mongoose = require('mongoose');

const GameSchema = new mongoose.Schema({
  id: { type: Number, required: true, unique: true },
  name: { type: String, required: true, unique: true },
  description_raw: { type: String },
  released: { type: Date },
  background_image: { type: String },
  background_image_additional: { type: String },
  website: { type: String },
  platforms: { type: Array },
  stores: { type: Array },
  developers: { type: Array },
  genres: { type: Array },
  publishers: { type: Array },
  esrb_rating: { id: { type: Number }, name: { type: String } },
});

module.exports = mongoose.model('Game', GameSchema);