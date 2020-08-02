namespace Picture {
    export class Vector {
        x: number;
        y: number;

        constructor(_x: number, _y: number) {
            this.set(_x, _y);
        }

        set(_x: number, _y: number): void {
            this.x = _x;
            this.y = _y;
        }

        scale(_factor: number): void {
            this.x *= Number(_factor.toFixed());
            this.y *= Number(_factor.toFixed());
        }

        add(_addend: Vector): void {
            this.x += Number(_addend.x.toFixed());
            this.y += Number(_addend.y.toFixed());
        }

        random(_minLength: number, _maxLength: number): void {
            let length: number = _minLength + Math.random() * (_maxLength - _minLength);
            let direction: number = Math.random() * 2 * Math.PI;

            let cos: number = Math.cos(direction);
            let sin: number = Math.sin(direction);

            this.set(Number(cos.toFixed()), Number(sin.toFixed()));
            this.scale(length);
        }

        copy(): Vector {
            return new Vector(this.x, this.y);
        }
    }
}