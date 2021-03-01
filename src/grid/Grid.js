function Grid(ctx, minor, major, stroke, fill) {
    if (ctx === undefined || ctx === null || ctx.canvas === undefined) {
        throw Error("Canvas context must be defined.");
    }
    this.ctx = ctx;
    this.minor = minor || 10;
    this.major = major || this.minor * 5;
    this.stroke = stroke || '#0f0';
    this.fill = fill || '#090';
}
Grid.prototype.getCanvasCtx = function() {
    return this.ctx;
}
Grid.prototype.getMinor = function() {
    return this.minor;
}
Grid.prototype.getMajor = function() {
    return this.major;
}
Grid.prototype.getFill = function() {
    return this.fill;
}
Grid.prototype.getStroke = function() {
    return this.stroke;
}
Grid.prototype.draw = function() {
    let self = this;
    let mn = self.getMinor();
    let mj = self.getMajor();
    let ct = self.getCanvasCtx();
    ct.save();
    ct.strokeStyle = self.getStroke();
    ct.fillStyle = self.getFill();
    let width = ct.canvas.width, height = ct.canvas.height;
    // x axis
    for (let x = 0; x < width; x += mn) {
        ct.beginPath();
        ct.moveTo(x, 0);
        ct.lineTo(x, height);
        ct.lineWidth = (x % mj == 0) ? 0.5 : 0.25;
        ct.stroke();
        if (x % mj == 0) {ct.fillText(x, x, 10);}
    }
    // y axis
    for (let y = 0; y < height; y += mn) {
        ct.beginPath();
        ct.moveTo(0, y);
        ct.lineTo(width, y);
        ct.lineWidth = (y % mj == 0) ? 0.5 : 0.25;
        if (y % mj == 0) {ct.fillText(y, 0, y + 10);}
        ct.stroke();
    }
    ct.restore();
}
Grid.prototype.sample1 = function () {
    let self = this;
    let ct = self.getCanvasCtx();
    ct.save();
    ct.strokeStyle = self.getStroke();
    ct.fillStyle = self.getFill();
    ct.beginPath();
    ct.strokeStyle = '#fff';
    ct.fillStyle = '#0f0';
    ct.lineWidth = 2;
    // start lines
    ct.moveTo(50, 50);
    ct.lineTo(150, 250);
    ct.lineTo(250, 170);
    ct.stroke();
    ct.fillText("(50, 50)", 30, 40);
    ct.fillText("(150, 250)", 130, 260);
    ct.fillText("(250, 170)", 255, 175);
    ct.restore();
}