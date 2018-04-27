function body_onload1(){
  var username;
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // var authRef = firebase.database().ref().getAuth();
      // var authRef = new Firebase("https://colorpalettecs252.firebaseio.com");
      authDataObj = firebase.auth();
      // authDataObj = firebase.auth();getAuth();              
      username = authDataObj.uid;
      // username = user.displayName;
      //   console.log(user.displayName)
    //   window.location.href = "gamePage.html"
    }
    else {
      window.location.href = "index.html";
      displayAlert("Please sign in first");
    }
  });


  // var user = firebase.auth().currentUser;
  // console.log(user);
  var ref = firebase.database().ref().child('users');
  var username1;
  ref.on("child_added", snap => {
    username1 = snap.child("userName").val();
    var email = snap.child("userEmail").val();
    console.log("name: " + username1);
    console.log("email: " + email);
  });
  

  
  // if (user!= null){
  //   window.location.href = "index.html";
  // }
  // else
  // {
  // console.log("user's display name: " + user.displayName);

  var host = location.origin;
  var socket = io.connect(host, {port: 8000});
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

    

  console.log("want to print username: "  + username1);
  console.log("want to print username: "  + username);
    output.innerHTML += '<p><strong>' + username1 + ':</strong> ' + data.message + '</p>';

  });
  btnCreateGameTable_onclick()
} 
// }


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


function btnCreateGameTable_onclick(){
	// window.alert("creating game table");
	var gamesRef = firebase.database().ref().child("games");

	gamesRef.on("child_added", snap=>{
		var uNameTxt = snap.child("username").val();
		var uScoreTxt = snap.child("score").val();
		var uTimestampTxt = snap.child("timeStamp").val();
		console.log("uName: " + uNameTxt);
		console.log("uScore: " + uScoreTxt);
		console.log("uTimeStamp: " + uTimestampTxt);

    // $("#game_table_body").append("<tr><td>" + uNameTxt + "</td><td>" + uScoreTxt + "</td><td>" + uTimestampTxt + "</td><tr>");
    $("#game_table_body").append("<tr><td>" + "    " + uNameTxt + "    " + "</td><td>" + "    " + uScoreTxt + "    " + "</td><tr>");
	})
}

