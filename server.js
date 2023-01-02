//jshint esversion:6
const express = require('express');
const app = express();

//The home Rout......
app.get("/", function(req, res){
    res.send("<h1>Hello, David!</h1>");
})

// The contact Rout......
app.get("/contact", function(re, res){
    res.send("Contact me at: david.chigbo@gmail.com")
})

// The about Rout......
app.get("/about", function(req, res){
    res.send("<h1><strong><em> I am Engr. David Chigbo the founder of dtechnical group Nigeria Limited</strong><em></h1>")
})

// Hobies Rout....
app.get("/hobbies", function(req, res){
    res.send("<ul><li>Research and Developement</li><li>Coding and Technology</li><li>Reading and Travelling</li></ul>")
})

//Port.....Main Opweration....
app.listen(3000, function(){
    console.log("server started on port 3000");
});
    