function body_onload(){
    document.getElementById("divSignIn").style.display = "none";
    document.getElementById("divSignUp").style.display = "none";
    document.getElementById("divAlert").style.display = "none";
}

function displaySignUp(){
    document.getElementById("divSignUp").style.display = "flex";
    document.getElementById("divSignIn").style.display = "none";
    document.getElementById("divAlert").style.display = "none";
}

function displayLogIn(){
    document.getElementById("divSignIn").style.display = "flex";
    document.getElementById("divSignUp").style.display = "none";
    document.getElementById("divAlert").style.display = "none";
}

function closeModal(){
    document.getElementById("divSignIn").style.display = "none";
    document.getElementById("divSignUp").style.display = "none";
    document.getElementById("divAlert").style.display = "none";
}

function displayAlert(message){
    document.getElementById("lblAlertMessage").innerHTML = message;
    document.getElementById("divAlert").style.display = "flex";
}

function btnOK_onclick(){
    document.getElementById("divAlert").style.display = "none";
}


function login(){
    var uri = "http://localhost:8000/";
    var endpoint = "auth/signin"

    var user = document.getElementById("txtUserSignIn").value;
    var password = document.getElementById("txtPassSignIn").value;
    console.log("userID: " + user);
    console.log("userPassword: " + password);

    firebase.auth().signInWithEmailAndPassword(user, password)
    .then(function (user) {
        displayAlert("Authentication successful")
    })
    .catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      displayAlert(error.message);      
      // ...
    });    
}

function playButton(){
    window.location.href = "./game.html"
}

function signUp(){
    var uri = "http://localhost:8000/";
    var endpoint = "auth/signin/"

    var user = document.getElementById("txtUsername").value;
    var password = document.getElementById("txtUserPassword").value;

    firebase.auth().createUserWithEmailAndPassword(user, password)
    .then(function () {
        displayAlert("Authentication Successful");
    })
    .catch(function(error) {
      // Handle Errors here.
      displayAlert(error.message);
      // ...
    });
}