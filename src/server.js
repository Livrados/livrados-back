const express = require('express');
const cors = require('cors');

const routes = require('./routes/routes');
const connToMongoDB = require('./database/conection');

const app = express();
const port = 3000;

connToMongoDB();
app.use(cors());
app.use(express.json());
app.use(routes);


app.listen(port, () => {
   console.log('Server running on http://localhost:3000');
});