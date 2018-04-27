
// var play = document.getElementById("btnPlay")
// var e = document.getElementsByClassName("rect1");
// $(document).read(function () {
var checker = 0
function play2() {
    console.log("starting game")
    document.getElementById("rect1").style.display = 'block'
    // $("#rect2").css({
    //     'display': 'none'

    // })

    // $("#rect3").css({
    //     'display': 'none'

    // })

    // $("#rect4").css({
    //     'display': 'none'

    // })
    startGame()

}

function resetAnimation () {
    var element = document.getElementById("rect1");
    var tryAgainButton = document.getElementById("btnTryAgain");

    tryAgainButton.addEventListener('click', function (e) {
        e.preventDefault

        element.classList.remove("rectangle1");
        void element.offsetWidth
        element.classList.add("rectangle1");
    });
}

function reloadPlay(){
    // checker = 1
    window.location.reload();
    // document.getElementById("rect1").style.display = 'block'
    // console.log("reloading")
    // $("#rect1").css({
    //     '-webkit-animation-play-state': 'running'

    // })
    // startGame()
}

function play3() {
    console.log("starting game2")



    $("#rect1").css({
        '-webkit-animation-play-state': 'running'

    })

    document.getElementById("rect2").style.display = 'none'
    document.getElementById("rect3").style.display = 'none'
    document.getElementById("rect4").style.display = 'none'

    // console.log("yo")
    //     $("#rect2").css({
    //     'display': 'none'

    // })

    // $("#rect3").css({
    //     'display': 'none'

    // })

    // $("#rect4").css({
    //     'display': 'none'

    // })
    startGame()
    resetAnimation()
    console.log("yooooo")
}


if (checker == 1) {
    startGame()
}

function startGame() {
    console.log("why you no work?")

    var start = window.performance.now()
    var color = ""
    var end = 0
    var spaceCheck = 0

    var counter = 0;
    $(body).keyup(function(e){
        if (e.keyCode == 32) {
            console.log("listened to spacebar")
            if (counter === 0) {
                $("#rect1").css({
                    '-webkit-animation-play-state': 'paused'

                })

                color = $("#rect1").css("background-color")

                // console.timeEnd()
                $("#rect2").css({
                    'display': 'block'
                })
                console.log("block 1 paused");
                counter++;
                console.log("counter: " + counter);
            }
            else if (counter === 1) {
                $("#rect2").css({
                    '-webkit-animation-play-state': 'paused'
                })

                var color2 = $("#rect2").css("background-color")

                if (color == color2) {


                $("#rect3").css({
                    'display': 'block'
                })
                counter++;
            } else {
                // document.getElementById("btnPlay").innerHTML = "Play again"
                if (!(spaceCheck >= 1)) {
                end = window.performance.now()
                end -= start
                end /= 1000
                console.log(end + " secs")
                } 
                spaceCheck++

            }
            }
            else if (counter === 2) {
                $("#rect3").css({
                    '-webkit-animation-play-state': 'paused'
                })

                var color3 = $("#rect3").css("background-color")

                if (color == color3) {

                $("#rect4").css({
                    'display': 'block'
                })
                counter++;
            } else {
                if (!(spaceCheck >= 1)) {
                    // document.getElementById("btnPlay").innerHTML = "Play again"
                    end = window.performance.now()
                    end -= start
                    end /= 1000
                    console.log(end + " secs")
                    }
                    spaceCheck++

            }
            }
            else if (counter === 3) {
                $("#rect4").css({
                    '-webkit-animation-play-state': 'paused'
                })

                var color4 = $("#rect4").css("background-color")

                if (color == color4) {
                    console.log("You win!")

                } else {
                    console.log("You lost :(")
                }
                if (!(spaceCheck >= 1)) {
                    // document.getElementById("btnPlay").innerHTML = "Play again"
                    end = window.performance.now()
                    end -= start
                    end /= 1000
                    console.log(end + " secs")
                    }
                    spaceCheck++

                // $("#rect4").css({
                //     'display': 'block'
                // })
                counter++;
            }

        }
    })
}


//     document.getElementById("btnPlay").addEventListener("click", myFunc)

// function myFunc() {

// }