describe("Canvas Grid", function () {
    it('should be able to initialize with valid canvas', function () {
        expect(function () {
            new Grid();
        }).toThrowError("Canvas context must be defined.")
    });
    it('should be able to initialize with valid properties', function () {
        let canvas = document.createElement('canvas');
        let ctx = canvas.getContext('2d');
        const minor = 5, major = 20, stroke = '#000', fill = '#fff';
        let grid = new Grid(ctx, minor, major, stroke, fill);
        expect(grid.getCanvasCtx()).toBe(ctx);
        expect(grid.getFill()).toBe(fill);
        expect(grid.getMajor()).toBe(major);
        expect(grid.getMinor()).toBe(minor);
        expect(grid.getStroke()).toBe(stroke);
    });
})