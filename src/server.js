const express = require('express');
//const cors = require('cors');
//const bodyParser = require('body-parser');
//const mongoose = require('mongoose');

const routes = require('./routes/routes');
const connToMongoDB = require('./database/conection');

const app = express();
const port = 3000;


connToMongoDB();
//app.use(cors);
//app.use(bodyParser.urlencoded({ extended: false }));
//app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false}));
app.use(express.json());
app.use(routes);


app.listen(port, () => {
   console.log('Server running on http://localhost:3000');
});