const {Schema, model} = require('mongoose');
const bcrypt = require('bcryptjs');

const cinema_userSchema = new Schema({
    user: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    password: {
        type: String,
        require: true
    },
    category: {
        type: String,
        require: true
    },
    student: {
        type: String,
        require: true
    }
},{
    timestamps: true
});

cinema_userSchema.methods.encryptPassword = async password =>{
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password,salt);
    
}

cinema_userSchema.methods.matchPassword = async function(password){
    return await bcrypt.compare(password, this.password);   
}



module.exports = model('cinema_user', cinema_userSchema);