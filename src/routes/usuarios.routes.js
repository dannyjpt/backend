const {
    Router
} = require('express');
const router = Router();

const {
    nuevoUsuario,
    registrarUsuario,
    mostrarInicioSesionUsuario,
    iniciarSesionUsuario,
    cerrarSesionUsuario
} = require('../controllers/usuario.controllers');


router.get('/usuarios/registrar', nuevoUsuario);

router.post('/usuarios/registrar', registrarUsuario);

router.get('/usuarios/inicio-sesion', mostrarInicioSesionUsuario);

router.post('/usuarios/iniciar-sesion', iniciarSesionUsuario);

router.get('/usuarios/cerrar-sesion', cerrarSesionUsuario);

module.exports = router;
