
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
                console.log("block 2 paused");
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
                console.log("block 3 paused");
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
            } else if (counter === 3) {
                $("#rect4").css({
                    '-webkit-animation-play-state': 'paused'
                })

                var color4 = $("#rect4").css("background-color")

                // if (color == color4) {
                //     console.log("You win!")

                // } else {
                //     console.log("You lost :(")
                // }
                if (color == color4) {

                    $("#rect5").css({
                        'display': 'block'
                    })
                    console.log("block 4 paused");
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

            } else if (counter === 4) {
                $("#rect5").css({
                    '-webkit-animation-play-state': 'paused'
                })

                var color5 = $("#rect5").css("background-color")

                if (color == color5) {

                    $("#rect6").css({
                        'display': 'block'
                    })
                    console.log("block 5 paused");
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

            } else if (counter === 5) {
                $("#rect6").css({
                    '-webkit-animation-play-state': 'paused'
                })

                var color6 = $("#rect6").css("background-color")

                if (color == color6) {

                    $("#rect7").css({
                        'display': 'block'
                    })
                    console.log("block 6 paused");
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

            } else if (counter === 6) {
                $("#rect7").css({
                    '-webkit-animation-play-state': 'paused'
                })

                var color7 = $("#rect7").css("background-color")

                if (color == color7) {

                    $("#rect8").css({
                        'display': 'block'
                    })
                    console.log("block 7 paused");
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
            } else if (counter === 7) {
                $("#rect8").css({
                    '-webkit-animation-play-state': 'paused'
                })

                var color8 = $("#rect8").css("background-color")

                if (color == color8) {

                    $("#rect9").css({
                        'display': 'block'
                    })
                    console.log("block 8 paused");
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
            } else if (counter === 8) {
                $("#rect9").css({
                    '-webkit-animation-play-state': 'paused'
                })

                var color9 = $("#rect9").css("background-color")

                if (color == color9) {
                    console.log("you won")
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
        }
    })
}


//     document.getElementById("btnPlay").addEventListener("click", myFunc)

// function myFunc() {

// }