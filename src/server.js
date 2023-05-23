const express = require('express');
const path = require('path');
const morgan = require('morgan');
const methodOverride = require('method-override');
const bodyParser = require('body-parser');
const flash = require('connect-flash');
const session = require('express-session');
const passport = require('passport');
const cors = require('cors');
//inicializaciones
const app = express();
require('./config/passport');
//app.use(cors);
//configuraciones
//app.set('port', process.env.PORT || 3001);
app.use(cors());
app.set('port', 3001);
app.get((req,res)=>{
    console.log("logued");
})
//middelwares
app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}));
app.use(bodyParser.json());


//routes
app.use(require('./routes/index.routes'));
//app.use(require('./routes/usuarios.routes'));
app.use(require('./routes/cinema.routes'));

module.exports = app;