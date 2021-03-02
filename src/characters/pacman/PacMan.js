function PacMan(ctx, x, y, radius, wedge, stroke, fill) {
    Brush.call(this, ctx, stroke, fill);
    this.x = x || ctx.canvas.width / 2;
    this.y = y || ctx.canvas.height / 2;
    wedge = Math.abs(wedge);
    if (wedge > 1) {
        wedge = 1;
    }
    this.wedge = wedge || 0.2;
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
    getWedge: function () {
        return this.wedge;
    },
    setWedge: function (wedge) {
        wedge = Math.abs(wedge);
        if (wedge > 1) {
            wedge = 1;
        }
        this.wedge = wedge;
    },
    draw: function (fill = true) {
        let self = this;
        let ct = self.getCanvasCtx();
        ct.save();
        ct.strokeStyle = self.getStroke();
        ct.fillStyle = self.getFill();
        ct.beginPath();
        ct.arc(self.getX(), self.getY(), self.getRadius(),
        self.getWedge()*Math.PI, (2 - self.getWedge())*Math.PI);
        ct.lineTo(self.getX(), self.getY());
        if (fill) {
            ct.fill();
        } else {
            ct.closePath();
            ct.stroke();
        }
        ct.restore();
    },
    animate: function (wedge = 0.3) {
        let self = this;
        // draw first
        self.clear();
        self.setWedge(wedge)
        self.draw();
        // close after 50ms
        setTimeout(function () {
            self.clear();
            self.setWedge(0);
            self.draw();
        }, 300);
    }
}