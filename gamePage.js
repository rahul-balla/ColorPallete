var start = window.performance.now()
var color = ""
var end = 0
// var e = document.getElementsByClassName("rect1");
// $(document).read(function () {
    var counter = 0;
    $(body).keyup(function(e){
        if (e.keyCode == 32) {
            console.log("listened to spacebar")
            if (counter === 0) {
                $(".rect1").css({
                    '-webkit-animation-play-state': 'paused'

                })

                color = $(".rect1").css("background-color")

                // console.timeEnd()


                $(".rect2").css({
                    'display': 'block'
                })
                console.log("block 1 paused");
                counter++;
                console.log("counter: " + counter);
            }
            else if (counter === 1) {
                $(".rect2").css({
                    '-webkit-animation-play-state': 'paused'
                })

                var color2 = $(".rect2").css("background-color")

                if (color == color2) {


                $(".rect3").css({
                    'display': 'block'
                })
                counter++;
            } else {
                end = window.performance.now()
                end -= start
                end /= 1000
                console.log(end + " secs")
            }
            }
            else if (counter === 2) {
                $(".rect3").css({
                    '-webkit-animation-play-state': 'paused'
                })

                var color3 = $(".rect3").css("background-color")

                if (color == color3) {

                $(".rect4").css({
                    'display': 'block'
                })
                counter++;
            } else {
                end = window.performance.now()
                end -= start
                end /= 1000
                console.log(end + " secs")
            }
            }
            else if (counter === 3) {
                $(".rect4").css({
                    '-webkit-animation-play-state': 'paused'
                })

                var color4 = $(".rect4").css("background-color")

                if (color == color4) {
                    console.log("You win!")

                } else {
                    console.log("You lost :(")
                }

                    end = window.performance.now()
                    end -= start
                    end /= 1000
                    console.log(end + " secs")
                // $(".rect4").css({
                //     'display': 'block'
                // })
                counter++;
            }

        }
    })
