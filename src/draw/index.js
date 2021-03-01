let canvas = document.getElementById('asteroids');
let ctx = canvas.getContext('2d');
ctx.strokeStyle = 'lightgrey';
ctx.fillStyle = 'dimgrey';
ctx.lineWidth = 5;
ctx.rect(75, 75, canvas.width - 150, canvas.height - 100);
ctx.stroke();
ctx.fill();
ctx.font = "34px Arial";
ctx.fillStyle = '#FFAAAA';
ctx.strokeStyle = '#FF2222';
ctx.lineWidth = 0.75;
ctx.textAlign = "center";
let msg = "2D Drawing";
ctx.strokeText(msg, canvas.width / 2, 110);
ctx.fillText(msg, canvas.width / 2, 110);

let msg2 = "its quite easy :-)";
ctx.fillText(msg2, canvas.width / 2, 330);
ctx.strokeText(msg2, canvas.width / 2, 330);

ctx.strokeStyle = "#FFFFFF";
ctx.lineWidth = 2;
ctx.beginPath();
ctx.arc(200, 140, 20, 0, Math.PI * 2);
ctx.moveTo(200, 160);
ctx.lineTo(200, 220);
ctx.moveTo(180, 300);
ctx.lineTo(185, 260);
ctx.lineTo(200, 220);
ctx.lineTo(215, 260);
ctx.lineTo(220, 300);
ctx.moveTo(240, 130);
ctx.lineTo(225, 170);
ctx.lineTo(200, 170);
ctx.lineTo(175, 180);
ctx.lineTo(170, 220);
ctx.stroke();

