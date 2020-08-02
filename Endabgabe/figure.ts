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
                if (this.factor == 2)
                    this.factor = this.rotation / 10;
                crc2.rotate(Math.PI * this.factor);
                if (this.rotation == 1)
                    this.factor += 0.01;
                    else if (this.rotation == 2)
                        this.factor += 0.02;
                        else if (this.rotation == 4)
                            this.factor += 0.04;
                
            }
        }

        draw(): void {
            console.log("drawing circle");
        }

    }
}