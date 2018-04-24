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
    
    var credentials = {
        userID: document.getElementById("txtUserSignIn").value,
        userPassword: document.getElementById("txtPassSignIn").value,
        id: 1
    }

    fetch((uri + endpoint), {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    })
    .then(checkResponse)
    // .then(checkJSON)
    .catch(fetchError);

    function checkResponse(response){
        if(!response.ok){
            window.alert(response.status)
            displayAlert("Invalid credentials")
        }
        else{
           displayAlert("Authentication successful");
        }
    }

    function fetchError(error){
        displayAlert(error)
    }
}

function playButton(){
    window.location.href = "./game.html"
    // var uri = "http://localhost:8000/";
    // var endpoint = "game/"

    // console.log(uri + endpoint);
    // fetch((uri + endpoint), {
    //     method: "GET",
    // })
    // .catch(fetchError)

    // function fetchError(error){
    //     window.alert(error);
    // }
}

function signUp(){
    var uri = "http://localhost:8000/";
    var endpoint = "auth/signin/"

    var user = document.getElementById("txtUsername").value;
    var password = document.getElementById("txtUserPassword").value;
    console.log("userID: " + user);
    console.log("userPassword: " + password);
    
    var credentials = {
        userID: document.getElementById("txtUsername").value,
        userPassword: document.getElementById("txtUserPassword").value,
        id: 0
    }

    fetch((uri + endpoint), {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    })
    .then(checkResponse)
    // .then(checkJSON)
    .catch(fetchError);

    function checkResponse(response){
        if(!response.ok){
            window.alert(response.status)
            displayAlert("Invalid credentials")
        }
        else{
           displayAlert("Authentication successful");
        }
    }

    function fetchError(error){
        displayAlert(error)
    }
}