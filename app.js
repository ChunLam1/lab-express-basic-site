const express = require('express');
const app = express();
const hbs = require("hbs");

hbs.registerPartials(__dirname +"/views/partials")


app.use(express.static(__dirname + "/public"))

app.get("/galery", (request, response) => {
    response.render("galery.hbs");
  });


app.get("/works", (request, response) => {
    response.render("works.hbs");
  });


app.get("/about", (request, response) => {
    response.render("about.hbs");
  });

app.get("/", (request, response) => {
    response.render("home.hbs");
  });
  
app.listen('3000')