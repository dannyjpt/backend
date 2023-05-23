const {Schema, model} = require('mongoose');

const cinema_studentsSchema = new Schema({
    nombre: {
        type: String,
        require: true
    },
    category: {
        type: String,
        require: true
    }
},{
    timestamps: true
});

module.exports = model('cinema_students', cinema_studentsSchema);