const usuarioController = {};
const usuario = require('../models/cinema_users');
const passport = require('passport');



usuarioController.nuevoUsuario = (req, res) => {
    res.render('usuarios/registro');
};

usuarioController.registrarUsuario=async (req,res) =>{
    const errores = [];
    const {user, email, password, password2, typeU} = req.body;
    console.log(req.body);
    if(password != password2){
       res.send("case1");
    }
    if(password.length < 4){
        res.send("case2");
    }
    if(errores.length > 0){
        res.send("case3");
    } else{
        const correoUsuario = await usuario.findOne({email:email});
        if(correoUsuario){
            res.send("case4");
        }else{
            const nuevoUsuario = new usuario({user, email, password, typeU});
            nuevoUsuario.password = await nuevoUsuario.encryptPassword(password);
            await nuevoUsuario.save();
            req.flash('mensaje', 'Usuario registrado');
            res.redirect('/usuarios/inicio-sesion');
        }
    }
    //res.send('registrado');
};

usuarioController.mostrarInicioSesionUsuario=(req,res) =>{
    res.render('usuarios/inicio-sesion');
};

usuarioController.iniciarSesionUsuario=passport.authenticate('local',{
    failureRedirect:'/usuarios/inicio-sesion',
    successRedirect:'/',
    failureFlash:true
});

usuarioController.cerrarSesionUsuario=(req,res) =>{
    req.logout();
    req.flash('mensaje','Sesion finalizada');
    res.redirect('/usuarios/inicio-sesion');
};



module.exports = usuarioController;