function Brush(ctx, stroke, fill) {
    if (ctx === undefined || ctx === null || ctx.canvas === undefined) {
        throw Error("Canvas context must be defined.");
    }
    this.ctx = ctx;
    this.stroke = stroke || '#0f0';
    this.fill = fill || '#090';
}
Brush.prototype = {
    getCanvasCtx: function() {
        return this.ctx;
    },
    getFill: function() {
        return this.fill;
    },
    getStroke: function() {
        return this.stroke;
    },
    setCanvasCtx: function (ctx) {
        this.ctx = ctx;
    },
    setFill: function (fill) {
        this.fill = fill;
    },
    setStroke: function (stroke) {
        this.stroke = stroke;
    }
}