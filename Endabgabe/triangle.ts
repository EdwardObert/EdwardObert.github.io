namespace Picture {
    export class Triangle extends Figure {
        color: string;
        size: number;

        constructor(_position: Vector, _parameter: number, _rotation: number, _color: string, _size: number) {
            super (_position, _parameter, _rotation);
            this.color = _color;
            this.size = _size;
        }

        draw(): void {
            if (this.rotation == 0)
                crc2.translate(this.position.x, this.position.y);
            crc2.beginPath();
            crc2.moveTo(0, -25 * this.size);
            crc2.lineTo(-30 * this.size, 25 * this.size);
            crc2.lineTo(30 * this.size, 25 * this.size);
            crc2.lineTo(0, -25 * this.size);
            crc2.scale(this.size, this.size);
            crc2.fillStyle = this.color;
            crc2.strokeStyle = this.color;
            crc2.lineCap = "round";
            crc2.lineWidth = 5;
            crc2.lineJoin = "round";
            crc2.fill();
            crc2.stroke();
            crc2.closePath();
            crc2.resetTransform();
        }
    }
}