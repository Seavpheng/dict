const express = require('express'); 
const routes = require('./routes/index');
const path = require('path');
require('dotenv').config();
require('./db/config');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use(function(req, res, next){
    console.log(req.url, req.method);
    next();
}); 
 
app.set("view engine", 'pug');

app.use((req, res, next) => {  
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Preflight, Authorization, X-Token"); 
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    
    next();
  });

app.use(routes); 

const server = app.listen(parseInt(process.env.SERVER_PORT), ()=>{
    console.log("server information: %s", server.address().port);
});

