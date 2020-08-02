namespace Picture {

    window.addEventListener("load", handelLoad);
    export let crc2: CanvasRenderingContext2D;
    export let figures: Figure[] = [];
    let savedPictures: PictureSave[] = [];
    let figure: string;
    let list: string = "";

    let canvasTarget: HTMLCanvasElement;

    let listPlace: HTMLDivElement;

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

    let url: string = "http://localhost:5002";

    async function handelLoad(_event: Event): Promise<void> {

        //get context
        let canvas: HTMLCanvasElement | null = document.querySelector("canvas");
        if (!canvas)
            return;
        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");
        canvasTarget = <HTMLCanvasElement>document.querySelector("canvas");

        listPlace = <HTMLDivElement>document.querySelector("#pictures");

        circle = <HTMLDivElement>document.querySelector("#circle");
        circlein = <HTMLElement>document.querySelector("#c");

        triangle = <HTMLDivElement>document.querySelector("#triangle");
        trianglein = <HTMLElement>document.querySelector("#t");

        square = <HTMLDivElement>document.querySelector("#square");
        squarein = <HTMLElement>document.querySelector("#s");

        v = <HTMLSelectElement>document.querySelector("#velocity");
        r = <HTMLSelectElement>document.querySelector("#rotation");
        c = <HTMLSelectElement>document.querySelector("#color");
        s = <HTMLSelectElement>document.querySelector("#figuresize");

        sizex = <HTMLInputElement>document.querySelector("#sizex");
        sizey = <HTMLInputElement>document.querySelector("#sizey");
        bg = <HTMLSelectElement>document.querySelector("#backgroundc");

        save = <HTMLButtonElement>document.querySelector("#save");
        restore = <HTMLButtonElement>document.querySelector("#restore");

        //add Listeners
        circle.addEventListener("click", selectCricle);
        triangle.addEventListener("click", selectTriangle);
        square.addEventListener("click", selectSquare);

        c.addEventListener("change", changeColor);

        sizex.addEventListener("change", adjustCanvas);
        sizey.addEventListener("change", adjustCanvas);

        canvasTarget.addEventListener("click", createFigure);
        save.addEventListener("click", savePicture);
        restore.addEventListener("click", restoerPicture);

        window.setInterval(update, 20);

    }



    function update(): void {
        drawBackground();
        for (let figure of figures) {
            figure.rotate();
            figure.move(1);
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

    function selectCricle(): void {
        let color: string = c?.value;
        figure = "circle";

        circle?.setAttribute("style", "background-color: lightblue");
        circlein?.setAttribute("style", "color: " + color);

        triangle?.setAttribute("style", "background-color: lightgray");
        trianglein?.setAttribute("style", "color: black");

        square?.setAttribute("style", "background-color: lightgray");
        squarein?.setAttribute("style", "color: black");
    }

    function selectTriangle(): void {
        let color: string = c?.value;
        figure = "triangle";

        circle?.setAttribute("style", "background-color: lightgray");
        circlein?.setAttribute("style", "color: black");

        triangle?.setAttribute("style", "background-color: lightblue");
        trianglein?.setAttribute("style", "color: " + color);

        square?.setAttribute("style", "background-color: lightgray");
        squarein?.setAttribute("style", "color: black");
    }

    function selectSquare(): void {
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

    async function savePicture(_event: Event): Promise<void> {

        //Daten vorbereiten
        let date: Date | string = new Date();
        let hh: string = String(date.getHours()).padStart(2, "0");
        let mimi: string = String(date.getMinutes()).padStart(2, "0");
        let dd: string = String(date.getDate()).padStart(2, "0");
        let mm: string = String(date.getMonth() + 1).padStart(2, "0");
        let yyyy: string = String(date.getFullYear());
        date = hh + ":" + mimi + "; " + dd + "/" + mm + "/" + yyyy;
        //console.log(date);

        let x: number = Number(sizex.value);
        if (x == 0)
            x = 580;
        let y: number = Number(sizey.value);
        if (y == 0)
            y = 400;
        background = bg.value;

        let infos: PictureSave = new PictureSave(date, figures, x, y, background);


        //Daten an Server schicken
        console.log("Send Picture");
        let pictures: string = JSON.stringify(infos);
        let query: URLSearchParams = new URLSearchParams(pictures);
        let response: Response = await fetch(url + "?" + query.toString());
        let responseText: string = await response.text();
        alert(responseText);
        
        list = "";

    }

    async function restoerPicture(_event: Event): Promise<void> {
        if (list == "") {
            //Anfrage senden
            savedPictures.splice(0, savedPictures.length);
            console.log("sending");
            let response: Response = await fetch(url + "?get");

            let responseText: string = await response.text();
            responseText.slice(2, 40);
            let pictureData: PictureSave = JSON.parse(responseText);
            alert(pictureData);
            savedPictures.push(pictureData);
            console.log(savedPictures);
            createList();
            list = "loaded";

        }
    }

    function createList(): void {
        listPlace.innerHTML = "";
        for (let index: number = 0; index < savedPictures.length; index++) {
            let picture: HTMLParagraphElement = document.createElement("p");
            picture.setAttribute("id", "" + savedPictures[index].date);
            picture.addEventListener("click", loadPicture);
            picture.innerHTML = "abc" + savedPictures[index].date;
            listPlace.appendChild(picture);
        }
    }

    function loadPicture(_event: Event): void {
        console.log("loading picture");
        for (let index: number = 0; index < savedPictures.length; index++) {
            let id: string = (_event.target as Element).id;
            if (id == savedPictures[index].bg) {
                for (let index: number = 0; index < savedPictures.length; index++) {
                    figures.push(savedPictures[index].figure[index]);
                }
            }
        }
    }


}