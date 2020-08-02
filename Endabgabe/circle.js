"use strict";
var Picture;
(function (Picture) {
    class Circle extends Picture.Figure {
        constructor(_position, _parameter, _rotation, _color, _size) {
            super(_position, _parameter, _rotation);
            this.color = _color;
            this.size = _size;
        }
        draw() {
            if (this.rotation == 0)
                Picture.crc2.translate(this.position.x, this.position.y);
            Picture.crc2.beginPath();
            Picture.crc2.arc(0, 0, 30 * this.size, -1.35, 1.4 * Math.PI);
            Picture.crc2.scale(this.size * 2, this.size * 2);
            Picture.crc2.lineCap = "round";
            Picture.crc2.strokeStyle = this.color;
            Picture.crc2.lineWidth = 3;
            Picture.crc2.stroke();
            Picture.crc2.closePath();
            Picture.crc2.resetTransform();
        }
    }
    Picture.Circle = Circle;
})(Picture || (Picture = {}));
//# sourceMappingURL=circle.js.map