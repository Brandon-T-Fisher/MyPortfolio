function myFirstMethod() {

  var canvas = document.getElementById("myCanvas");
  var ctx = canvas.getContext("2d");
  ctx.fillStyle = "#fd00ff";
  ctx.fillRect(300,150,350,175);
  ctx.moveTo(0,0);
  ctx.lineTo(1000,500);
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(475,240,196,0,2*Math.PI);
  ctx.stroke();
  ctx.strokeRect(279,43,393,393);
  var img = document.getElementById("beta_pichu");
  ctx.drawImage(img, 0, 500);
  ctx.fillStyle = "#FF0000"
  ctx.font = "30px Arial";
  ctx.fillText("You have been visited by beta pichu.",0,975)
}
