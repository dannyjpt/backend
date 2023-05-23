const {Schema, model} = require('mongoose');

const cinema_filmsSchema = new Schema({
    title: {
        type: String,
        require: true
    },
    category: {
        type: String,
        require: true
    },
    Time: {
        type: String,
        require: true
    },
    booking_amount: {
        type: String,
        require: true
    },
    image: {
        type: String,
        require: true
    }
},{
    timestamps: true
});

module.exports = model('cinema_films', cinema_filmsSchema);