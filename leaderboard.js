// reference : leaderboard.html
var userName = document.getElementById("txt_uName");
var uEmail = document.getElementById("txt_uEmail");
var uScore = document.getElementById("txt_uScore");
var uTimestamp = document.getElementById("txt_uTimestamp");
var addBtn = document.getElementById("btnAdd");
var JSONgameData = [];

var firebaseRef = firebase.database().ref();

function body_onload(){
	// Initialize Firebase
	var config = {
		apiKey: "AIzaSyCBY1DZnogGxG4XOxRvRHnigMS4XJ9Q094",
		authDomain: "colorpalettecs252.firebaseapp.com",
		databaseURL: "https://colorpalettecs252.firebaseio.com",
		projectId: "colorpalettecs252",
		storageBucket: "colorpalettecs252.appspot.com",
		messagingSenderId: "306554441966"
	};
	firebase.initializeApp(config);	
}


function btnAddUser_onclick(){
	window.alert("saving user to firebase db");

	var uNameTxt = userName.value; 
	var uEmailTxt = uEmail.value;
	
	var usersRef = firebase.database().ref().child("users");
	usersRef.push({
		userName: uNameTxt,
		userEmail: uEmailTxt
	})
}

function btnAddGameData_onclick(){
	window.alert("saving game data");

	var uNameTxt = userName.value;
	var uScoreTxt = uScore.value;
	var uTimestampTxt = uTimestamp.value;

	var gamesRef = firebase.database().ref().child("games");
	gamesRef.push({
		username: uNameTxt,
		score: uScoreTxt,
		timeStamp: uTimestampTxt
	})
}

function btnShowGameData_onclick(){
	// Get elements
	var preGameData = document.getElementById('gameData');
	
	// create reference
	var dbRefUser = firebase.database().ref().child('games');

	// sync object changes
	dbRefUser.on('value', snap => {
		preGameData.innerText = JSON.stringify(snap.val(), null, 3);
		JSONgameData.push(JSON.stringify(snap.val(), null, 3));
		console.log(JSONgameData);
		
		console.log();
	});
}

function btnCreateUserTable_onclick(){
	window.alert("creating user table");
	var ref = firebase.database().ref().child('users');

  ref.on("child_added", snap => {
    var username = snap.child("userName").val();
	var email = snap.child("userEmail").val();
	console.log("name: " + username);
	console.log("email: " + email);
	
	$("#user_table_body").append("<tr><td>" + username + "</td><td>" + email + "</td><tr>");
  });
}


function btnCreateGameTable_onclick(){
	window.alert("creating game table");
	var gamesRef = firebase.database().ref().child("games");

	gamesRef.on("child_added", snap=>{
		var uNameTxt = snap.child("username").val();
		var uScoreTxt = snap.child("score").val();
		var uTimestampTxt = snap.child("timeStamp").val();
		console.log("uName: " + uNameTxt);
		console.log("uScore: " + uScoreTxt);
		console.log("uTimeStamp: " + uTimestampTxt);

		$("#game_table_body").append("<tr><td>" + uNameTxt + "</td><td>" + uScoreTxt + "</td><td>" + uTimestampTxt + "</td><tr>");
	})
}





// var ref1 = firebase.database().ref().child('games');
// 	var uNameTxt = userName.value;
// 	var uScoreTxt = uScore.value;
// 	var uTimestampTxt = uTimestamp.value;
// $scope.games = $firebaseArray(ref1);

// $scope.addGamesIntoTable = function(userName){
// 	if ($scope.gameList.indexOf(userName == -1))
// 	ref1.push({
// 		username: uNameTxt,
// 		score: uScoreTxt,
// 		timeStamp: uTimestampTxt
// 	})   
// }
