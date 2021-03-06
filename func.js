
function body_onload(){
    document.getElementById("divSignIn").style.display = "none";
    document.getElementById("divSignUp").style.display = "none";
    document.getElementById("divAlert").style.display = "none";
    // document.getElementsByClassName("divModal").style.display = "none";

    // var user = firebase.auth().currentUser;
    // console.log("user is: " + user);
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            console.log(user.displayName)
        //   window.location.href = "gamePage.html"
        }
    });
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
    document.getElementById("divAlertForm").style.display = "none";
}

function displayAlert(message){
    document.getElementById("lblAlertMessage").innerHTML = message;
    document.getElementById("divAlert").style.display = "flex";
}

function btnOK_onclick(){
    document.getElementById("divAlert").style.display = "none";
}


function login(){
    var user = document.getElementById("txtUserSignIn").value;
    var password = document.getElementById("txtPassSignIn").value;
    console.log("userID: " + user);
    console.log("userPassword: " + password);

    firebase.auth().signInWithEmailAndPassword(user, password)
    .then(function (user) {
        displayAlert("Authentication successful")
    })
    .then(function (){
        window.location.href = "gamePage.html"
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
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            console.log(user.displayName)
        //   window.location.href = "gamePage.html"
        }
        else {
            document.getElementById("divSignUp").style.display = "flex";
        }
    });
    
}

function signUp(){
    var user = document.getElementById("txtUsername").value;
    var password = document.getElementById("txtUserPassword").value;
    var displayNameUser = document.getElementById("txtDisplayName").value;

    console.log("display name: " + displayNameUser)

    if (user == "" || password === "" || displayNameUser === "") {
        console.log("inside if");
        displayAlert("Please enter a valid email, password, and display name");
    }
    else {
        console.log("inside else");
        firebase.auth().createUserWithEmailAndPassword(user, password)
        .then((success) => {
            console.log("success")
            success.updateProfile({
                displayName: displayNameUser
            })
            .then(function (sucess){
                globalDisplayName = success.displayName;
                console.log(success.displayName);
            })
            .then(function () {
                window.location.href = "./gamePage.html"
            })
            .catch(function (error){
                displayAlert(error.message)
            })
        })
        .catch(function(error) {
        // Handle Errors here.
        displayAlert(error.message);
        // ...
        });

        // storing to firebase database
        console.log("Save to firebase db");
        var usersRef = firebase.database().ref().child("users");
        usersRef.push({
            userName: displayNameUser,
            userEmail: user
        })
    }
}
