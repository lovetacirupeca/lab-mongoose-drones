const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const DroneSchema = new Schema({
  name : String,
  propellers : Number,
  maxSpeed : {type: Number, max: 25}
});

const Drone = mongoose.model('Drone', DroneSchema);

module.exports = Drone;
