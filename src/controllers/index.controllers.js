
const indexController = {};

indexController.renderIndex=(req,res) =>{
    //res.render('index');
    res.send("hi y");
};

indexController.renderProyectos=(req,res) =>{
    res.send("hi p");
    //res.render('proyectos');
};

indexController.obtenerFtwo=(req,res) =>{
    res.send("hi p");
    //res.render('usuarios/registro');
};

module.exports = indexController;
