
require('dotenv').config();

const express = require('express');
const expressLayout = require('express-ejs-layouts');
const connectDB = require('./server/config/db');



const app = express();
const PORT = process.env.PORT || 3000
const localhost = "192.168.0.61";


// CONNECT TO MONGODB
connectDB();

app.use(express.urlencoded({extended: true}));
app.use(express.json());


app.use(express.static('public'));


//Templating Engine
app.use(expressLayout);
app.set('layout', './layouts/main');
app.set('view engine', 'ejs');


app.use('/', require('./server/routes/main'));

app.listen(PORT, localhost, () => {
    console.log(`App is running on ${localhost} on ${PORT}`);
}); 
