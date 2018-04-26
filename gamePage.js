
var counter = 0;
var color;
var newColor;
$(body).keyup(function(e){
    if (e.keyCode == 32) {
        console.log("listened to spacebar")
        if (counter === 0) {
            $(".rect1").css({
                '-webkit-animation-play-state': 'paused'
            })

            color = $(".rect1").css("background-color");
            console.log("background color: " + color);

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

            newColor = $(".rect2").css("background-color");

            if (color === newColor) {
                console.log("color matched");
            }
            else {
                console.log("color NOT matched")
            }

            $(".rect3").css({
                'display': 'block'
            })
            counter++;
        }
        else if (counter === 2) {
            $(".rect3").css({
                '-webkit-animation-play-state': 'paused'
            })
            $(".rect4").css({
                'display': 'block'
            })
            counter++;
        }
        else if (counter === 3) {
            $(".rect4").css({
                '-webkit-animation-play-state': 'paused'
            })
            // $(".rect4").css({
            //     'display': 'block'
            // })
            counter++;
        }
    }
})
