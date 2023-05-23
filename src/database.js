const mongoose = require('mongoose');

const {ITECH_APP_MONGODB_HOST,ITECH_APP_MONGODB_DATABASE} = process.env;
const MONGODB_URI = `mongodb://${ITECH_APP_MONGODB_HOST}/${ITECH_APP_MONGODB_DATABASE}`;

//const MONGODB_URI = `mongodb+srv://dpuerta27:YqLIxmUfjWnXeSq2@itech.nek9dw3.mongodb.net/`;

mongoose.connect(MONGODB_URI,{
    useUnifiedTopolgy:true,
    useNewUrlParser: true,
    useCreateIndex:true
})

.then(db => console.log('DB Connected'))
.catch(err => console.log(err));