require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { dbConnection } = require('./database/config');

//Server express
const app = express();

//CORS
app.use(cors());

//Body lecture
app.use(express.json());

//Database
dbConnection();

<<<<<<< HEAD
=======

//Rutas
app.get('/', (req, res) => {
>>>>>>> fc04063e7f575b780eb3a3e1be7f81a6bca66506

//Rutas
app.use('/api/usuarios', require('./routes/usuarios'));

app.listen(process.env.PORT, () => {
    console.log('Server running in port' + process.env.PORT);
});
