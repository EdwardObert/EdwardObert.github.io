"use strict";
var Picture;
(function (Picture) {
    class Vector {
        constructor(_x, _y) {
            this.set(_x, _y);
        }
        set(_x, _y) {
            this.x = _x;
            this.y = _y;
        }
        scale(_factor) {
            this.x *= Number(_factor.toFixed());
            this.y *= Number(_factor.toFixed());
        }
        add(_addend) {
            this.x += Number(_addend.x.toFixed());
            this.y += Number(_addend.y.toFixed());
        }
        random(_minLength, _maxLength) {
            let length = _minLength + Math.random() * (_maxLength - _minLength);
            let direction = Math.random() * 2 * Math.PI;
            let cos = Math.cos(direction);
            let sin = Math.sin(direction);
            this.set(Number(cos.toFixed()), Number(sin.toFixed()));
            this.scale(length);
        }
        copy() {
            return new Vector(this.x, this.y);
        }
    }
    Picture.Vector = Vector;
})(Picture || (Picture = {}));
//# sourceMappingURL=vector.js.map