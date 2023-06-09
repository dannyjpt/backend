const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;


const User = require('../models/cinema_users');

passport.use(new LocalStrategy({
    usernameField:'email',
    passportField:'password'
}, async (email, password, done)=>{
    
    const user = await User.findOne({email});
    if(!user){
        return done(null,false,{message:'El usuario no existe'});
    }else{
        const match = await user.matchPassword(password);
        if(match){
            //console.log(user.typeU);
            //req.flash('mensaje', user.typeU);
            
            return done(null, user);
        }else{
            return done(null,false,{message:'Contraseña incorrecta'});
        }
    }
    
}));

passport.serializeUser((user, done)=>{
    done(null, user.id);
});

passport.deserializeUser((id,done)=>{
    User.findById(id, (err, user)=>{
        done(err,user);
    })
});
