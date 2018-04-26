// reference : leaderboard.html
(function(){
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

	// Get a reference to the database service
	// var database = firebase.database();
	// var bigOne = document.getElementById('bigOne');
	// var dbRef = firebase.database().ref().child('text');
	// dbRef.on('value', snap => bigOne.innerText = snap.val());

	// Get elements
	var preObject = document.getElementById('object');
	var hobbyList = document.getElementById('list');
	
	var prePlayerData = document.getElementById('playerData');
	

	// create reference
	var dbRefObject = firebase.database().ref().child('object');
	var dbRefHobbyList = dbRefObject.child('hobby');

	var dbRefPlayer = firebase.database().ref().child('playerData');
	
	
	
	
	// sync object changes
	// dbRefObject.on('value', snap => console.log(snap.val()));
	dbRefObject.on('value', snap => {
		preObject.innerText = JSON.stringify(snap.val(), null, 3);
	});

	dbRefPlayer.on('value', snap => {
		prePlayerData.innerText = JSON.stringify(snap.val(), null, 3);
	});
	

	// sync list changes
	dbRefHobbyList.on('child_added', snap => console.log(snap.val()));
	dbRefHobbyList.on('child_added', snap => {
		var li = document.createElement('li');
		li.innerText = snap.val();
		li.id = snap.key;
		hobbyList.appendChild(li);
	});

	// sync changing
	dbRefHobbyList.on('child_changed', snap=> {
		var liChanged = document.getElementById(snap.key);
		liChanged.innerText = snap.val();
	})
	
	// sync removing
	dbRefHobbyList.on('child_removed', snap =>{
		var liRemove = document.getElementById(snap.key);
		liRemove.remove();
	})

}());

function body_onload(){
	btnAdd.onclick = btnAdd_onclick;
	uName.value = "123";
	uScore.value = "456";
}


function btnAdd_onclick(){
	// store it to firebase

	var user = document.getElementById("txt_uName").value;
	var score = document.getElementById("txt_uScore").value;
	console.log("uNmae: " + user);
	console.log("uScore: " + score);

}


function addUser(uName){
	var database = firebase.database()
	var uNameRef = database.ref()

	uNameRef.push().key
}

//getters
function getPlayerScore(){

}

function displayPlayerScore(){

}

// ranking
function filterByScore(){

}
