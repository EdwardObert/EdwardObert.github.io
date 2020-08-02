"use strict";
var Picture;
(function (Picture) {
    class Figure {
        constructor(_position, _parameter, _rotation) {
            this.position = _position;
            this.rotation = _rotation;
            this.velocity = new Picture.Vector(0, 0);
            this.factor = this.rotation / 10;
            if (_parameter == 1)
                this.velocity.random(0, 35);
            else if (_parameter == 2)
                this.velocity.random(40, 75);
            else if (_parameter)
                this.velocity.random(80, 115);
            else
                console.log("no velocity");
        }
        move(_timeslice) {
            let offset = this.velocity.copy();
            offset.scale(_timeslice);
            this.position.add(offset);
            if (this.position.x < 0)
                this.position.x += Picture.crc2.canvas.width;
            if (this.position.y < 0)
                this.position.y += Picture.crc2.canvas.height;
            if (this.position.x > Picture.crc2.canvas.width)
                this.position.x -= Picture.crc2.canvas.width;
            if (this.position.y > Picture.crc2.canvas.height)
                this.position.y -= Picture.crc2.canvas.height;
        }
        rotate() {
            if (this.rotation != 0) {
                //crc2.resetTransform();
                Picture.crc2.translate(this.position.x, this.position.y);
                //console.log(this.position);
                if (this.factor == 2)
                    this.factor = this.rotation / 10;
                Picture.crc2.rotate(Math.PI * this.factor);
                if (this.rotation == 1)
                    this.factor += 0.01;
                else if (this.rotation == 2)
                    this.factor += 0.02;
                else if (this.rotation == 4)
                    this.factor += 0.04;
            }
        }
        draw() {
            console.log("drawing circle");
        }
    }
    Picture.Figure = Figure;
})(Picture || (Picture = {}));
//# sourceMappingURL=figure.js.map