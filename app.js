const express = require('express');
const app = express();
const hbs = require("hbs");

hbs.registerPartials(__dirname +"/views/partials")


app.use(express.static(__dirname + "/public"))

app.get("/galery", (request, response) => {
    response.render("galery.hbs");
  });


app.get("/family", (request, response) => {
  const family = [
    {name:"Mickey Mouse",
     birth:"15/05/1928",
     img:"/img/Mickey mouse.png"
    },
    {name:"Minnie Mouse",
    birth:"15/05/1928",
    img:"/img/Minnie.png"
   },
   {name:"Pluto",
   birth:"1930",
   img:"/img/Pluto.png"
  },
  {name:"Dingo",
  birth:"1932",
  img:"/img/Dingo.png"
 },
 {name:"Donald Duck",
 birth:"1934",
 img:"/img/Ronald Duck.png"
},
  ];
    response.render("works.hbs",{
      family,
    });
  });


app.get("/about", (request, response) => {
    response.render("about.hbs");
  });

app.get("/", (request, response) => {
    response.render("home.hbs");
  });
  
app.listen('3000')