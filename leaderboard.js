// reference : leaderboard.html

function body_onload(){
	btnAdd.onclick = btnAdd_onclick;
	uName.value = "123";
	uScore.value = "456";
}

console.log("uName: " + uName)
function btnAdd_onclick(){
	// store it to firebase
	
	var user = document.getElementById("txt_uName").value;
	var score = document.getElementById("txtUserPassword").value;
	console.log("userID: " + user);
	console.log("userPassword: " + password);

}

function addUser(uName){
	var database = firebase.database()
	var uNameRef = database.ref()

	uNameRef.push().key
}

//getters
function getPlayerScore{

}

function displayPlayerScore{

}

// ranking
function filterByScore{

}
