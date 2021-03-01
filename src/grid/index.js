canvas = document.getElementById("grid");
ctx = canvas.getContext('2d');
ctx.strokeStyle = '#0f0';
ctx.fillStyle = '#090';
ctx.lineWidth = 0.25;
// vertical grid lines
for (let x = 0; x < canvas.width; x += 10) {
    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x, canvas.height);
    ctx.lineWidth = (x % 50 == 0) ? 0.5 : 0.25;
    if (x % 50 == 0) {
        ctx.fillText(x, x, 10);
    }
    ctx.stroke();
}
// horizontal grid lines
for (let y = 0; y < canvas.height; y += 10) {
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(canvas.width, y);
    ctx.lineWidth = (y % 50 == 0) ? 0.5 : 0.25;
    if (y % 50 == 0) {
        ctx.fillText(y, 0, y + 10);
    }
    ctx.stroke();
}