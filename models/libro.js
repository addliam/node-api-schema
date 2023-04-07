const { DataTypes, sequelize } = require('../db');

// Definimos el modelo de la tabla libros
const Libro = sequelize.define('libro', {
    titulo: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    autor: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    anio_publicacion: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    editorial: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    disponible: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
    }
}, {
    timestamps: false
}
);

module.exports = Libro