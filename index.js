// firebase.auth().onAuthStateChanged(function(user) {
//     if (user) {
//       // User is signed in.
//     } else {
//       // No user is signed in.
//     }
//   });

var express = require("express");
//var sqlite3 = require("sqlite3");
var app = express();
var bodyParser = require("body-parser");
var path    = require("path");

// express.static(root, [options])
// app.use(express.static('public'))

// app.use(express.static(__dirname + '/View'));
// //Store all HTML files in view folder.
// app.use(express.static(__dirname + '/Script'));
// //Store all JS and CSS in Scripts folder.



function login(){
    var userEmail = document.getElementById("userEmail").value;
    var userPassword = document.getElementById("userPassword").value;

    // console.log(userEmail + " " + userPassword);
    // window.alert("went inside login");
    firebase.auth().signInWithEmailAndPassword(userEmail, userPassword).catch(function(error) {
    // console.log("inside authentication");
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    window.alert("ErrorCode: " + errorCode + "\nMessage: " + errorMessage);
    // ...
    });
}

// app.get("/", function(req,res){
//   res.sendFile("index.html");
//   //res.render('index.html');
// })

app.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/index.html'));
  //__dirname : It will resolve to your project folder.
});

// app.get('/about',function(req,res){
//   res.sendFile(path.join(__dirname+'/about.html'));
// });

// app.get('/sitemap',function(req,res){
//   res.sendFile(path.join(__dirname+'/sitemap.html'));
// });

// app.get("/index.html", function(req, res){
//   console.log("went into index.html");
// })

var port = process.env.PORT || 8000;
app.listen(port, function() {
	console.log("Running server on port " + port);
});