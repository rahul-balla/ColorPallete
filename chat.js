// $(function () {
//     var socket = io();
//     $('form').submit(function(){
//       socket.emit('chat message', $('#m').val());
//       $('#m').val('');
//       return false;
//     });
// });
// var user = 

function body_onload1(){
  // console.log(globalDisplayName)

  var user = firebase.auth().currentUser;
  console.log(user);
  // console.log("user's display name: " + user.displayName);
  var socket = io.connect('http://localhost:8000');
  // var handle = document.getElementById("handle");
  var message = document.getElementById("message");
  var send = document.getElementById("send");
  var output = document.getElementById("output");

  send.addEventListener('click', function(){
    socket.emit('chat', {
      message: message.value

    })
  })

  document.addEventListener('keydown', (event) => {
    if (event.keyCode === 13) {
      socket.emit('chat', {
        message: message.value
      })
      document.getElementById("message").innerHTML = "";
    }
  })

 socket.on('chat', function(data){
    output.innerHTML += '<p><strong>' + "user.displayName" + ':</strong> ' + data.message + '</p>';
  });
} 


function onSignOut () {
  console.log("in logout function")
  firebase.auth().signOut().then(function() {
    // var uri = "http://localhost:8000/";
    // fetch(uri, {
    //   method: "GET"
    // })
    // .catch(function (error){
    //   displaAlert(error.message);
    // })

    window.location.href = "index.html"
  }).catch(function(error) {
    // An error happened.
  });
}