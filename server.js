// server document
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');
var firebase = require('firebase');
var cors = require('cors');
var http = require('http').Server(app);
var io = require('socket.io')(http);
var promise = require('promise');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

// app.use(express.static('/Users/rahulballa/Desktop/ColorPallete'))
// app.use('/auth/signin', express.static('/Users/Samrat/Desktop/ColorPallete'))
// app.use('/auth/signin', express.static('/Users/rahulballa/Desktop/ColorPallete'))
app.use('/auth/signin', express.static(path.join(__dirname, ''))); 
app.use( express.static( "Public" ) );
// app.use('/auth/signin', express.static('/Users/kimeric/Desktop/CS252/ColorPallete'))

app.get('/', function (req, res) {
  console.log("hello")
  res.redirect(301, '/auth/signin');
})

app.get('/auth/signin', function (req, res) {
  console.log("inside /auth/signin post")
  res.sendFile(/*path.join(__dirname + */'indexNew.html');
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
  console.log('a user connected', socket.id);
  // socket.on('chat message', function(msg){
  //   console.log('message: ' + msg);
  // });
  socket.on('chat', function(data){
    console.log("listenend to chat");
    io.sockets.emit('chat', data);
  })
});


var port = process.env.PORT || 8000;
http.listen(port, function () {
  console.log("Running server on port " + port);
})
