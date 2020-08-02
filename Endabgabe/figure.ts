namespace Picture {
    export class Figure {
        position: Vector;
        velocity: Vector;
        rotation: number;
        factor: number;

        constructor (_position: Vector, _parameter: number, _rotation: number) {
            this.position = _position;
            this.rotation = _rotation;
            this.velocity = new Vector (0, 0);
            this.factor = this.rotation;

            if (_parameter == 1)
                this.velocity.random(1, 1);
                else if (_parameter == 2)
                    this.velocity.random(2, 2);
                    else if (_parameter)
                        this.velocity.random(3, 3);
                        else
                            console.log("no velocity");  
        }

        move(_timeslice: number): void {
            let offset: Vector = this.velocity.copy();
            offset.scale(_timeslice);
            this.position.add(offset);

            if (this.position.x < 0)
                this.position.x += crc2.canvas.width;
            if (this.position.y < 0)
                this.position.y += crc2.canvas.height;
            if (this.position.x > crc2.canvas.width)
                this.position.x -= crc2.canvas.width;
            if (this.position.y > crc2.canvas.height)
                this.position.y -= crc2.canvas.height;
        }
        
        rotate(): void {
            if (this.rotation != 0) {
                //crc2.resetTransform();
                crc2.translate(this.position.x, this.position.y);
                //console.log(this.position);
                if (this.factor / 100 == 2 + Number ((this.rotation / 100).toFixed(2)))
                    this.factor = this.rotation;
                //crc2.rotate(Math.PI * this.factor);
                if (this.rotation == 1) {
                    this.factor += 1;
                    }
                    else if (this.rotation == 2) {
                        this.factor += 2;
                        }
                        else if (this.rotation == 4) {
                            this.factor += 4;
                            }
                crc2.rotate(Math.PI * this.factor / 100);
                
            }
        }

        draw(): void {
            console.log("drawing circle");
        }

    }
}