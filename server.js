const express = require('express');
const app = express();

const libroRoutes = require('./routes/libroRoutes')

app.use(express.json());
app.use('', libroRoutes);

// Iniciamos el servidor
app.listen(3000, () => {
    console.log('Servidor iniciado en el puerto 3000');
});
