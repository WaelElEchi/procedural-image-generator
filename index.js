const { createCanvas, loadImage } = require("canvas");
const canvas = createCanvas(200, 200);
const ctx = canvas.getContext("2d");

ctx.font = "30px Impact";
ctx.rotate(0.1);
ctx.fillText("Awesome!", 50, 100);

var text = ctx.measureText("Awesome!");
ctx.strokeStyle = "rgba(0,0,0,0.5)";
ctx.beginPath();
ctx.lineTo(50, 102);
ctx.lineTo(50 + text.width, 102);
ctx.stroke();

loadImage("img/leaves.png").then((image) => {
  ctx.drawImage(image, 50, 0, 70, 70);

  console.log('<img src="' + canvas.toDataURL() + '" />');
});
