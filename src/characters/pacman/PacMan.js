function PacMan(ctx, x, y, radius, stroke, fill) {
    Brush.call(this, ctx, stroke, fill);
    this.x = x || ctx.canvas.width / 2;
    this.y = y || ctx.canvas.height / 2;
    this.radius = radius || 150;
}
Object.defineProperty(PacMan.prototype, 'constructor', {
    value: PacMan,
    enumerable: false,
    writable: true
});

PacMan.prototype = {
    ...Brush.prototype,
    getX: function () {
        return this.x;
    },
    setX: function (x) {
       this.x = x;
    },
    setY: function (y) {
        this.y = y;
    },
    getY: function () {
        return this.y;
    },
    getRadius: function() {
        return this.radius;
    },
    setRadius: function (radius) {
      this.radius = radius;
    },
    draw: function (fill = true) {
        let self = this;
        let ct = self.getCanvasCtx();
        ct.save();
        ct.strokeStyle = self.getStroke();
        ct.fillStyle = self.getFill();
        ct.beginPath();
        ct.arc(self.getX(), self.getY(), self.getRadius(), 0.2*Math.PI, 1.8*Math.PI);
        ct.lineTo(self.getX(), self.getY());
        if (fill) {
            ct.fill();
        } else {
            ct.closePath();
            ct.stroke();
        }
        ct.restore();
    }
}