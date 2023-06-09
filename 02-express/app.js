//core modules
const http = require("http");

//third party modules
const express = require("express");
const bodyParser = require("body-parser");
//custom modules
const adminRoutes = require( "./routes/admin" );
const shopRoutes = require( "./routes/shop" );
// --------------------------CODE-------------------------

const app = express();


app.use(bodyParser.urlencoded({extended: false}));

app.use( adminRoutes );
app.use( shopRoutes );


app.listen(3000);
