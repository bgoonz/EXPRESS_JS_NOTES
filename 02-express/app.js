//core modules
// const http = require( "http" );
const path = require("path");

//third party modules
const express = require("express");
const bodyParser = require("body-parser");
//custom modules
const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");
// --------------------------CODE-------------------------

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use("/admin", adminRoutes);
app.use(shopRoutes);

app.use((req, res, next) => {
  res.sendFile(path.join(__dirname, "views", "404.html"));
});

app.listen(3000);
