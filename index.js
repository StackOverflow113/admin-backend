require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { dbConnection } = require('./database/config');

//Server express
const app = express();

//CORS
app.use(cors());
//Database
dbConnection();


//Rutas
app.get('/', (req, res) => {

    res.json({
        ok: true,
        msg: 'hellou'
    });

});

app.listen(process.env.PORT, () => {
    console.log('Server running in port' + process.env.PORT);
});
