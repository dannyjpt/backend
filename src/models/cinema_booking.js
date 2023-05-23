const { Schema, model } = require('mongoose');

const cinema_bookingSchema = new Schema({
  category: {
    type: String,
    required: true
  },
  chair: {
    type: String,
    required: true
  },
  ide_user: {
    type: String,
    required: true
  },
  awards: {
    type: Boolean,
    default: false
  }
}, {
  timestamps: true
});

module.exports = model('cinema_booking', cinema_bookingSchema);
