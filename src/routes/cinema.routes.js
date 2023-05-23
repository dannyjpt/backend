const { Router } = require("express");
const router = Router();

const {
  obtenerFilms,
  filmById,
  bookingById,
  bookingAll,
  allStudents,
  registrarUsuario,
  iniciarSesionUsuario,
  registrarReserva,
  actualizarBooking,
  eliminarReserva,
} = require("../controllers/cinema.controllers");

router.get("/cinema/films", obtenerFilms);
router.get("/cinema/films/details/:id", filmById);
router.get("/cinema/booking/category/:id", bookingById);
router.get("/cinema/students/:id", allStudents);
router.get("/bookings", bookingAll);
router.post("/cinema/register/users", registrarUsuario);
router.post("/cinema/register/booking", registrarReserva);
router.put('/cinema/actualizar/booking', actualizarBooking);
router.get("/cinema/login/:email/:password", iniciarSesionUsuario);
router.delete("/cinema/booking/eliminar/:category/:chair", eliminarReserva);

module.exports = router;
