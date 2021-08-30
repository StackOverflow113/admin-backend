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


//Rutas
app.use('/api/usuarios', require('./routes/usuarios'));

app.listen(process.env.PORT, () => {
    console.log('Server running in port' + process.env.PORT);
});