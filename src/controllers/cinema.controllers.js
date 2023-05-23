const cinema = require('../models/cinema_films');
const booking = require('../models/cinema_booking');
const students = require('../models/cinema_students');
const usuario = require('../models/cinema_users');
const bcrypt = require('bcryptjs');
const cinemaController = {};

cinemaController.obtenerFilms=async (req, res) =>{

    const allFilms = await cinema.find().lean();
    const elements = [];
        for (let index = 0; index < allFilms.length; index++) {
            elements[index] = 
            {
                "id":allFilms[index]._id,
                "title":allFilms[index].title,
                "time":allFilms[index].Time,
                "category": allFilms[index].category,
                "image": allFilms[index].image,
                "main_category": allFilms[index].main_category
            } 
        }
        //console.log(elements);
        res.json(elements);
};

cinemaController.filmById = async (req, res) =>{

    const data = await cinema.findById(req.params.id).lean();
    if(data){
        console.log(data);
        res.json(data);
    }else{
        res.send("ne");
    }
    
};

cinemaController.bookingById = async (req, res) =>{
    console.log(req.params.id);
    const data = await booking.find({ category: { $eq: req.params.id } }).lean();
    if(data){
        console.log(data);
        res.json(data);
    }else{
        res.send("ne");
    }
    
};

cinemaController.bookingAll = async (req, res) =>{

    const data = await booking.find({ category: { $eq: req.params.id } }).lean();
    if(data){
        console.log(data);
        res.json(data);
    }else{
        res.send("ne");
    }
};

cinemaController.allStudents = async (req, res) =>{

    const data = await students.find({ category: { $eq: req.params.id } }).lean();
    if(data){
        console.log(data);
        res.json(data);
    }else{
        res.send("ne");
    }
};

cinemaController.registrarUsuario=async (req,res) =>{

    const {user, email, password, password2, category, student} = req.body;
    if(password != password2){
        res.send("case1");
     }
     if(password.length < 4){
         res.send("case2");
     }
     else{
         const correoUsuario = await usuario.findOne({email:email});
         if(correoUsuario){
             res.send("case3");
         }else{
             const nuevoUsuario = new usuario({user, email, password, category, student});
             nuevoUsuario.password = await nuevoUsuario.encryptPassword(password);
             await nuevoUsuario.save();
             console.log("Usuario registrado");
             res.send("Usuario registrado");
         }
     }
};

cinemaController.registrarReserva = async (req, res) => {
    console.log(req.body);
    const {category, chair, ide_user} = req.body;
  
    try {
      const nuevaReserva = new booking({category, chair, ide_user});
      const reservaGuardada = await nuevaReserva.save(); // Guardar la reserva y obtener el objeto guardado
      console.log("reserva exitosa:", reservaGuardada);
      res.status(200).send(reservaGuardada); // Devolver los datos de la reserva guardada
    } catch (error) {
      console.error(error);
      res.status(500).send("Error al crear la reserva");
    }
  };

cinemaController.iniciarSesionUsuario=async(req,res) =>{
    console.log(req.params.email)
    console.log(req.params.password)
    const {email,password} = req.params;
    const correoUsuario = await usuario.findOne({email:email});
    if(correoUsuario){
        const verifyUser = await correoUsuario.matchPassword(password);
        if(verifyUser){
            res.send(correoUsuario);
        }else{
            res.send("no password");
        }
    }else{
        res.send("no email");
    }
};

cinemaController.actualizarBooking = async (req, res) => {
    try {
        const { id, data } = req.body;

      const updatedBooking = await booking.findOneAndUpdate(
        { ide_user: id },
        { awards: data },
        { new: true }
      );
  
      if (updatedBooking) {
        res.send("ok");
      } else {
        res.send("no");
      }
    } catch (error) {
      console.error(error);
      res.status(500).send("Error updating booking.");
    }
  };
  

cinemaController.eliminarReserva = async (req, res) => {
    try {
        const reservaEliminada = await booking.findOneAndDelete({ category: req.params.category, chair: req.params.chair });
      if (!reservaEliminada) {
        return res.status(404).json({ message: "La reserva no existe" });
      }
      return res.status(200).json({ message: "La reserva fue eliminada exitosamente" });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: "Error al eliminar la reserva" });
    }
  };



module.exports = cinemaController;