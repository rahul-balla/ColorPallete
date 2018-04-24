// $(function () {
//     var socket = io();
//     $('form').submit(function(){
//       socket.emit('chat message', $('#m').val());
//       $('#m').val('');
//       return false;
//     });
// });

var socket = io.connect('http://localhost:8000');

var handle = document.getElementById("handle");
var message = document.getElementById("message");
var send = document.getElementById("send");
var output = document.getElementById("output");

send.addEventListener('click', function(){
  socket.emit('chat', {
    message: message.value,
    handle: handle.value,

  })
})

socket.on('chat', function(data){
  output.innerHTML += '<p><strong>' + data.handle + ':</strong> ' + data.message + '</p>';
});