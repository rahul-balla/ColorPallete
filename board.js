function drawCircle() {
var c=document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.beginPath()
ctx.moveTo(380, 350)
ctx.lineTo(380, 400)
// ctx.moveTo(400, 400)
// ctx.lineTo(300, 400)
// ctx.moveTo(400, 400)
// ctx.lineTo(300, 400)
// ctx.arc(420,360,250,0, degreesToRadians(45)); // (x, y, radius, start angle, end angle, false/true)
// ctx.lineTo(400, 400);
ctx.stroke();

// var canvas = document.getElementById('myCanvas');
// if (canvas.getContext) {
//    var ctx = canvas.getContext('2d');

//   ctx.beginPath();
//   ctx.arc(75, 75, 50, 0, Math.PI * 2, true); // Outer circle
//   ctx.moveTo(110, 75);
//   ctx.arc(75, 75, 35, 0, Math.PI, false);  // Mouth (clockwise)
//   ctx.moveTo(65, 65);
//   ctx.arc(60, 65, 5, 0, Math.PI * 2, true);  // Left eye
//   ctx.moveTo(95, 65);
//   ctx.arc(90, 65, 5, 0, Math.PI * 2, true);  // Right eye
//   ctx.stroke();
// }
}

function twoPartitions() {
    var c=document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    ctx.beginPath()
    ctx.moveTo(380, 350) // 200 radius
    ctx.lineTo(380, 550)
    ctx.moveTo(380, 350)
    ctx.lineTo(380, 150)
    ctx.stroke()
    ctx.beginPath()
    // ctx.beginPath()
    ctx.arc(380,350,200,0, degreesToRadians(360));
    ctx.stroke()
}

function draw() {
    var canvas = document.getElementById('myCanvas');
    if (canvas.getContext) {
      var ctx = canvas.getContext('2d');
  
      // Filled triangle
    //   ctx.beginPath();
    //   ctx.moveTo(25, 25);
    //   ctx.lineTo(105, 25);
    //   ctx.lineTo(25, 105);
    //   ctx.fill();
  
      // Stroked triangle
      ctx.beginPath();
      ctx.moveTo(125, 125);
      ctx.lineTo(125, 45);
    //   ctx.lineTo(45, 125);
    //   ctx.closePath();
      ctx.stroke();
    }
}

// function drawSegment(canvas, context, i) {
//     context.save();
//     var centerX = Math.floor(canvas.width / 2);
//     var centerY = Math.floor(canvas.height / 2);
//     radius = Math.floor(canvas.width / 2);

//     var startingAngle = degreesToRadians(sumTo(data, i));
//     var arcSize = degreesToRadians(data[i]);
//     var endingAngle = startingAngle + arcSize;

//     context.beginPath();
//     context.moveTo(centerX, centerY);
//     context.arc(centerX, centerY, radius, 
//                 startingAngle, endingAngle, false);
//     context.closePath();

//     context.fillStyle = colors[i];
//     context.fill();

//     context.restore();

//     drawSegmentLabel(canvas, context, i);
// }


function degreesToRadians(degrees) {
    return (degrees * Math.PI)/180;
}

// function sumTo(a, i) {
//     var sum = 0;
//     for (var j = 0; j < i; j++) {
//       sum += a[j];
//     }
//     return sum;
// }

// function drawSegmentLabel(canvas, context, i) {
//     context.save();
//     var x = Math.floor(canvas.width / 2);
//     var y = Math.floor(canvas.height / 2);
//     var angle = degreesToRadians(sumTo(data, i));
 
//     context.translate(x, y);
//     context.rotate(angle);
//     var dx = Math.floor(canvas.width * 0.5) - 10;
//     var dy = Math.floor(canvas.height * 0.05);
 
//     context.textAlign = "right";
//     var fontSize = Math.floor(canvas.height / 25);
//     context.font = fontSize + "pt Helvetica";
 
//     context.fillText(labels[i], dx, dy);
 
//     context.restore();
//  }

//  canvas = document.getElementById("myCanvas");
// var context = canvas.getContext("2d");
// for (var i = 0; i < data.length; i++) {
//     drawSegment(canvas, context, i);
// }
