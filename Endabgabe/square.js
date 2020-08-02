"use strict";
var Picture;
(function (Picture) {
    class Square extends Picture.Figure {
        constructor(_position, _parameter, _rotation, _color, _size) {
            super(_position, _parameter, _rotation);
            this.color = _color;
            this.size = _size;
        }
        draw() {
            if (this.rotation == 0)
                Picture.crc2.translate(this.position.x, this.position.y);
            Picture.crc2.beginPath();
            Picture.crc2.moveTo(-25 * this.size, -25 * this.size);
            Picture.crc2.lineTo(-25 * this.size, 25 * this.size);
            Picture.crc2.lineTo(25 * this.size, 25 * this.size);
            Picture.crc2.lineTo(25 * this.size, -25 * this.size);
            Picture.crc2.lineTo(-25 * this.size, -25 * this.size);
            Picture.crc2.scale(this.size, this.size);
            Picture.crc2.fillStyle = this.color;
            Picture.crc2.strokeStyle = this.color;
            Picture.crc2.lineCap = "round";
            Picture.crc2.lineWidth = 5;
            Picture.crc2.lineJoin = "round";
            Picture.crc2.fill();
            Picture.crc2.stroke();
            Picture.crc2.closePath();
            Picture.crc2.resetTransform();
        }
    }
    Picture.Square = Square;
})(Picture || (Picture = {}));
//# sourceMappingURL=square.js.map