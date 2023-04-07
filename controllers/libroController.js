const Libro = require('../models/libro')

const getAllBooks = async (req,res) => {
    // Ejemplo de consulta a la base de datos utilizando el modelo de la tabla libros
    try {
        const libros = await Libro.findAll();
        res.status(200).json(libros);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error en el servidor');
    }
}

// @data 
const createBook = async (req,res) => {
    try {
        const nuevoLibro = Libro.build({
            titulo: req.body.titulo,
            autor: req.body.titulo,
            anio_publicacion: req.body.titulo,
            editorial: req.body.titulo,
            disponible: req.body.titulo
        });
        nuevoLibro.save();
    } catch (error) {
        res.status(500).send('Error en el servidor');        
    }
}

const inProgress = async (req,res) => {
    try {
        res.status(404).json({message:'This page is in building process'})
    } catch (error) {
        res.status(500).send('Error en el servidor');
        console.error('Error');
    }
}

module.exports = {
    getAllBooks,
    createBook,
    inProgress,
}