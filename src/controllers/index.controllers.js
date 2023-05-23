
const indexController = {};

indexController.renderIndex=(req,res) =>{
    //res.render('index');
    res.send("hi");
};

indexController.renderProyectos=(req,res) =>{
    res.send("hi");
    //res.render('proyectos');
};

indexController.obtenerFtwo=(req,res) =>{
    res.send("hi");
    //res.render('usuarios/registro');
};

module.exports = indexController;
