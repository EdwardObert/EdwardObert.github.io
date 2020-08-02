namespace Picture {

    window.addEventListener("load", handelLoad);
    export let crc2: CanvasRenderingContext2D;
    let figures: Figure [] = [];
    let figure: string;

    let canvasTarget: HTMLCanvasElement;

    let circle: HTMLDivElement;
    let circlein: HTMLElement;

    let triangle: HTMLDivElement;
    let trianglein: HTMLElement;

    let square: HTMLDivElement;
    let squarein: HTMLElement;

    let v: HTMLSelectElement;
    let r: HTMLSelectElement;
    let c: HTMLSelectElement;
    let s: HTMLSelectElement;

    let sizex: HTMLInputElement;
    let sizey: HTMLInputElement;
    let bg: HTMLSelectElement;
    let background: string;

    let save: HTMLButtonElement;
    let restore: HTMLButtonElement;

    function handelLoad (_event: Event): void {
        //get context
        let canvas: HTMLCanvasElement | null = document.querySelector("canvas");
        if (!canvas)
            return;
        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");
        canvasTarget = <HTMLCanvasElement> document.querySelector("canvas");

        circle = <HTMLDivElement> document.querySelector("#circle");
        circlein = <HTMLElement> document.querySelector("#c");

        triangle = <HTMLDivElement> document.querySelector("#triangle");
        trianglein = <HTMLElement> document.querySelector("#t");

        square = <HTMLDivElement> document.querySelector("#square");
        squarein = <HTMLElement> document.querySelector("#s");

        v = <HTMLSelectElement> document.querySelector("#velocity");
        r = <HTMLSelectElement> document.querySelector("#rotation");
        c = <HTMLSelectElement> document.querySelector("#color");
        s = <HTMLSelectElement> document.querySelector("#figuresize");

        sizex = <HTMLInputElement> document.querySelector("#sizex");
        sizey = <HTMLInputElement> document.querySelector("#sizey");
        bg = <HTMLSelectElement> document.querySelector("#backgroundc");

        save = <HTMLButtonElement> document.querySelector("#save");
        restore = <HTMLButtonElement> document.querySelector("#restore");

        //add Listeners
        circle?.addEventListener("click", selectCricle);
        triangle?.addEventListener("click", selectTriangle);
        square?.addEventListener("click", selectSquare);

        c?.addEventListener("change", changeColor);

        sizex?.addEventListener("change", adjustCanvas);
        sizey?.addEventListener("change", adjustCanvas);

        canvasTarget?.addEventListener("click", createFigure);
        //save?.addEventListener("click", savePicture);
        //restore?.addEventListener("click", restoerPicture);

        window.setInterval(update, 20);

    }

    function update(): void {
        drawBackground();
        for (let figure of figures) {
            figure.rotate();
            figure.move(1 / 50);
            figure.draw();
        }
    }

    function drawBackground(): void {
        background = bg.value;
        crc2.resetTransform();
        crc2.fillStyle = background;
        crc2.fillRect(0, 0, canvasTarget.width, canvasTarget.height);
        //console.log(background);
    }

    function selectCricle (): void {
        let color: string = c?.value;
        figure = "circle";

        circle?.setAttribute("style", "background-color: lightblue");
        circlein?.setAttribute("style", "color: " + color);

        triangle?.setAttribute("style", "background-color: lightgray");
        trianglein?.setAttribute("style", "color: black");

        square?.setAttribute("style", "background-color: lightgray");
        squarein?.setAttribute("style", "color: black");
    }

    function selectTriangle (): void {
        let color: string = c?.value;
        figure = "triangle";

        circle?.setAttribute("style", "background-color: lightgray");
        circlein?.setAttribute("style", "color: black");

        triangle?.setAttribute("style", "background-color: lightblue");
        trianglein?.setAttribute("style", "color: " + color);

        square?.setAttribute("style", "background-color: lightgray");
        squarein?.setAttribute("style", "color: black");
    }

    function selectSquare (): void {
        let color: string = c?.value;
        figure = "square";

        circle?.setAttribute("style", "background-color: lightgray");
        circlein?.setAttribute("style", "color: black");

        triangle?.setAttribute("style", "background-color: lightgray");
        trianglein?.setAttribute("style", "color: black");

        square?.setAttribute("style", "background-color: lightblue");
        squarein?.setAttribute("style", "color: " + color);
    }

    function changeColor(): void {
        let color: string = c?.value;

        if (figure == "circle")
            circlein?.setAttribute("style", "color: " + color);
            else if (figure == "triangle")
                trianglein?.setAttribute("style", "color: " + color);
                else if (figure == "square")
                    squarein?.setAttribute("style", "color: " + color);
                        else
                            console.log("no figure selectetd");
    }

    function adjustCanvas(): void {
        let x: string = sizex?.value;
        let y: string = sizey?.value;

        background = bg?.value;

        canvasTarget?.setAttribute("width", "" + x);
        canvasTarget?.setAttribute("height", "" + y);
    }

    function createFigure(_event: MouseEvent): void {
        let position: Vector = new Vector(_event.clientX - crc2.canvas.offsetLeft, _event.clientY - crc2.canvas.offsetTop);
        let velocity: number = Number(v.value);
        let rotation: number = Number(r.value);
        let color: string = c.value;
        let size: number = Number(s.value);
        if (figure == "circle") {
            let circle: Figure = new Circle(position, velocity, rotation, color, size);
            figures.push(circle);
            }
            else if (figure == "triangle") {
                let trinangle: Figure = new Triangle(position, velocity, rotation, color, size);
                figures.push(trinangle);
                }
                else if (figure == "square") {
                    let square: Figure = new Square(position, velocity, rotation, color, size);
                    figures.push(square);
                    }
                    else
                        console.log("no figure selected");
    }
}