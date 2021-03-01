function Grid(ctx, minor, major, stroke, fill) {
    if (ctx === undefined || ctx === null || ctx.canvas === undefined) {
        throw Error("Canvas context must be defined.");
    }
    this.ctx = ctx;
    this.minor = minor || 10;
    this.major = major || minor * 5;
    this.stroke = stroke || '#0f0';
    this.fill = fill || '#090';
}
Grid.prototype.draw = function() {

}