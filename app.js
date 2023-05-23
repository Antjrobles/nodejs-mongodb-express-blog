
require('dotenv').config();

const express = require('express');
const expressLayout = require('express-ejs-layouts');
const methodOverride = require('method-override'); // for PUT and DELETE requests
const connectDB = require('./server/config/db');   // connect to MongoDB
const cookieParser = require('cookie-parser');     // for cookies
const session = require('express-session');       // for sessions
const MongoStore = require('connect-mongo');      // for sessions
const { isActiveRoute } = require('./server/helpers/routeHelpers');  // for active routes



// const TurndownService = require('turndown').default;




const app = express();
const PORT = process.env.PORT || 3000;
const localhost = process.env.LOCALHOST;





// CONNECT TO MONGODB
connectDB();

app.use(express.urlencoded({ extended: true }));    // for parsing application/x-www-form-urlencoded
app.use(express.json());                          // for parsing application/json
app.use(cookieParser());                         // for cookies
app.use(methodOverride('_method'));             

app.use(session({
  secret: 'keyboard cat',          // for signing the session ID cookie
  resave: false,                   // forces the session to be saved back to the session store
  saveUninitialized: true,         // forces a session that is "uninitialized" to be saved to the store
  store: MongoStore.create({       // store the session in MongoDB
    mongoUrl: process.env.MONGODB_URI   // connect to MongoDB
  }),
  //cookie: { maxAge: new Date ( Date.now() + (3600000) ) } 
}));

app.use(express.static('public')); 


//Templating Engine 
app.use(expressLayout);                // for using layouts
app.set('layout', './layouts/main');   // set the default layout
app.set('view engine', 'ejs');         // set the view engine to ejs



app.locals.isActiveRoute = isActiveRoute;   // for active routes


app.use('/', require('./server/routes/main'));      //  for main routes
app.use('/', require('./server/routes/admin'));    //   for admin routes

app.listen(PORT, localhost, () => {
  console.log(`App is running on ${localhost} on ${PORT}`);
}); 



