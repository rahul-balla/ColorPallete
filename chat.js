// $(function () {
//     var socket = io();
//     $('form').submit(function(){
//       socket.emit('chat message', $('#m').val());
//       $('#m').val('');
//       return false;
//     });
// });

var socket = io.connect('http://localhost:8000');