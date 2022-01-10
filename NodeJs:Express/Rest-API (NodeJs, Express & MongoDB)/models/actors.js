const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Geo Schema

const GeoSchema = new Schema({
  type: {
    type: String,
    default: 'point'
  },
  coordinates: {
    type: [Number],
    index: '2d'
  }
});

// Create names schema and model

const ActorsSchema = new Schema({
  
  name: {
    type: String,
    require: [true, 'name is required']
  },
  member: {
    type: String,

  },
  available: {
    type: Boolean,
    default: false

  },

  geometry: GeoSchema

});

const actors = mongoose.model('actors', ActorsSchema);

module.exports = actors; 