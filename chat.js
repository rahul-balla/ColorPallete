function body_onload1(){
  // firebase.auth().onAuthStateChanged(function(user) {
  //   if (user) {
  //     // User is signed in.
  //   } else {
  //     // No user is signed in.
  //   }
  // });



  // var user = firebase.auth().currentUser;
  // console.log(user);


  // var ref = firebase.database().ref().child('users');

  // ref.on("value", function(snapshot) {
  //    console.log(snapshot.val());
  // }, function (error) {
  //    console.log("Error: " + error.code);
  // });
  
  // var dbRefUser = firebase.database().ref().child('users');
  // var dbRefOneUser = dbRefUser.child();
  // var username = dbRefUser;
  // console.log(username);
  
  // dbRefOneUser.on('child_added', snap => {
  //   console.log("we are inside");
  //   console.log(snap.val());
  //   username = snap.val();
  //   console.log("username: "+ username);
  // });


  
  if (user!= null){
    window.location.href = "/index.html";
  }
  else
  {
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
      document.getElementById("message").value = "";
      // document.getElementById
  })

  document.addEventListener('keydown', (event) => {
    if (event.keyCode === 13) {
      socket.emit('chat', {
        message: message.value
      })
      document.getElementById("message").value = "";
    }
  })
  


 socket.on('chat', function(data){
    output.innerHTML += '<p><strong>' + username + ':</strong> ' + data.message + '</p>';
  });
  
  
} 
}

function btnShowUserData_onclick(){
	// Get elements
	var preGameData = document.getElementById('gameData');
	
	// create reference
	var dbRefUser = firebase.database().ref().child('games');

	// sync object changes
	dbRefUser.on('value', snap => {
		preGameData.innerText = JSON.stringify(snap.val(), null, 3);
		JSONgameData.push(JSON.stringify(snap.val(), null, 3));
		console.log(JSONgameData);
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


function btnShowUserData_onclick(){
	// Get elements
	var preUserData = document.getElementById('userData');
	
	// create reference
	var dbRefUser = firebase.database().ref().child('users');

	// sync object changes
	dbRefUser.on('value', snap => {
		preUserData.innerText = JSON.stringify(snap.val(), null, 3);
	});
}