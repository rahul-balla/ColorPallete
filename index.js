var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');
var firebase = require('firebase');
var cors = require('cors');
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

var config = {
  apiKey: "AIzaSyCBY1DZnogGxG4XOxRvRHnigMS4XJ9Q094",
  authDomain: "colorpalettecs252.firebaseapp.com",
  databaseURL: "https://colorpalettecs252.firebaseio.com",
  projectId: "colorpalettecs252",
  storageBucket: "colorpalettecs252.appspot.com",
  messagingSenderId: "306554441966"
};

firebase.initializeApp(config);
var database = firebase.database();

// app.use(express.static('/Users/rahulballa/Desktop/ColorPallete'))
app.use('/auth/signin', express.static('/Users/rahulballa/Desktop/ColorPallete'))
//app.use('/game', express.static('/Users/rahulballa/Desktop/ColorPallete'))

app.get('/', function (req, res) {
  res.redirect(301, '/auth/signin');
  //res.send("Hello")
})

app.get('/auth/signin', function (req, res) {
  res.sendFile(path.join(__dirname + '/indexNew.html'));
})

app.post('/auth/signin/', function (req, res) {
  console.log("went inside login");
  
  var userID = req.body.userID;
  var userPassword = req.body.userPassword;
  var id = req.body.id;

  console.log("userID: " + userID);
  console.log("userPassword: " + userPassword);

  if (userID == null || userPassword == null) {
    return res.status(401).json({
      message: "Invalid credentials"
    })
  }

  var flag = 0;
  var errorMessage;

  if (id === 0){
    firebase.auth().createUserWithEmailAndPassword(userID, userPassword).catch(function(error) {
      // Handle Errors here.
      flag = 1;
      // console.log("inside creating username, flag: " + flag);
      console.log("did not create account");
      console.log("error code: " + error.code);
      console.log("error message: " + error.message);
      var errorCode = error.code;
      var errorMessage = error.message;
      
      // ...
    });
  }
  
  else if (id === 1) { 
    firebase.auth().signInWithEmailAndPassword(userID, userPassword).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      flag = 1;
      console.log("did not log in");      
      console.log("error code: " + error.code);
      console.log("error message: " + error.message);
      
      // ...
    });
  }
  

  console.log("flag: " + flag);

  if(flag === 1){
    return res.status(401).json({
      message: "invalid"
    })
  }
  else{
    return res.status(200).json({
      message: "authentication successful"
    })
  }
})

app.use('/game', function (req, res) {
  res.sendFile(path.join(__dirname + '/game.html'));
  // console.log("path: " + __dirname + '/game.html');
  //res.render('game.html');
  res.redirect(301,'/trial');
  console.log("accessed game endpoint");
})

app.use('/trial',function(req,res){
  res.sendFile(path.join(__dirname+'/game.html'));
  console.log("idk");
});


io.on('connection', function(socket){
  console.log('a user connected');
  socket.on('chat message', function(msg){
    console.log('message: ' + msg);
  });
});


var port = process.env.PORT || 8000;
http.listen(port, function () {
  console.log("Running server on port " + port);
})