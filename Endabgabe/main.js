"use strict";
var Picture;
(function (Picture) {
    window.addEventListener("load", handelLoad);
    Picture.figures = [];
    let savedPictures = [];
    let figure;
    let list = "";
    let canvasTarget;
    let listPlace;
    let circle;
    let circlein;
    let triangle;
    let trianglein;
    let square;
    let squarein;
    let v;
    let r;
    let c;
    let s;
    let sizex;
    let sizey;
    let bg;
    let background;
    let save;
    let restore;
    let url = "http://localhost:5002";
    async function handelLoad(_event) {
        //get context
        let canvas = document.querySelector("canvas");
        if (!canvas)
            return;
        Picture.crc2 = canvas.getContext("2d");
        canvasTarget = document.querySelector("canvas");
        listPlace = document.querySelector("#pictures");
        circle = document.querySelector("#circle");
        circlein = document.querySelector("#c");
        triangle = document.querySelector("#triangle");
        trianglein = document.querySelector("#t");
        square = document.querySelector("#square");
        squarein = document.querySelector("#s");
        v = document.querySelector("#velocity");
        r = document.querySelector("#rotation");
        c = document.querySelector("#color");
        s = document.querySelector("#figuresize");
        sizex = document.querySelector("#sizex");
        sizey = document.querySelector("#sizey");
        bg = document.querySelector("#backgroundc");
        save = document.querySelector("#save");
        restore = document.querySelector("#restore");
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
    function update() {
        drawBackground();
        for (let figure of Picture.figures) {
            figure.rotate();
            figure.move(1);
            figure.draw();
        }
    }
    function drawBackground() {
        background = bg.value;
        Picture.crc2.resetTransform();
        Picture.crc2.fillStyle = background;
        Picture.crc2.fillRect(0, 0, canvasTarget.width, canvasTarget.height);
        //console.log(background);
    }
    function selectCricle() {
        let color = c?.value;
        figure = "circle";
        circle?.setAttribute("style", "background-color: lightblue");
        circlein?.setAttribute("style", "color: " + color);
        triangle?.setAttribute("style", "background-color: lightgray");
        trianglein?.setAttribute("style", "color: black");
        square?.setAttribute("style", "background-color: lightgray");
        squarein?.setAttribute("style", "color: black");
    }
    function selectTriangle() {
        let color = c?.value;
        figure = "triangle";
        circle?.setAttribute("style", "background-color: lightgray");
        circlein?.setAttribute("style", "color: black");
        triangle?.setAttribute("style", "background-color: lightblue");
        trianglein?.setAttribute("style", "color: " + color);
        square?.setAttribute("style", "background-color: lightgray");
        squarein?.setAttribute("style", "color: black");
    }
    function selectSquare() {
        let color = c?.value;
        figure = "square";
        circle?.setAttribute("style", "background-color: lightgray");
        circlein?.setAttribute("style", "color: black");
        triangle?.setAttribute("style", "background-color: lightgray");
        trianglein?.setAttribute("style", "color: black");
        square?.setAttribute("style", "background-color: lightblue");
        squarein?.setAttribute("style", "color: " + color);
    }
    function changeColor() {
        let color = c?.value;
        if (figure == "circle")
            circlein?.setAttribute("style", "color: " + color);
        else if (figure == "triangle")
            trianglein?.setAttribute("style", "color: " + color);
        else if (figure == "square")
            squarein?.setAttribute("style", "color: " + color);
        else
            console.log("no figure selectetd");
    }
    function adjustCanvas() {
        let x = sizex?.value;
        let y = sizey?.value;
        background = bg?.value;
        canvasTarget?.setAttribute("width", "" + x);
        canvasTarget?.setAttribute("height", "" + y);
    }
    function createFigure(_event) {
        let position = new Picture.Vector(_event.clientX - Picture.crc2.canvas.offsetLeft, _event.clientY - Picture.crc2.canvas.offsetTop);
        let velocity = Number(v.value);
        let rotation = Number(r.value);
        let color = c.value;
        let size = Number(s.value);
        if (figure == "circle") {
            let circle = new Picture.Circle(position, velocity, rotation, color, size);
            Picture.figures.push(circle);
        }
        else if (figure == "triangle") {
            let trinangle = new Picture.Triangle(position, velocity, rotation, color, size);
            Picture.figures.push(trinangle);
        }
        else if (figure == "square") {
            let square = new Picture.Square(position, velocity, rotation, color, size);
            Picture.figures.push(square);
        }
        else
            console.log("no figure selected");
    }
    async function savePicture(_event) {
        //Daten vorbereiten
        let date = new Date();
        let hh = String(date.getHours()).padStart(2, "0");
        let mimi = String(date.getMinutes()).padStart(2, "0");
        let dd = String(date.getDate()).padStart(2, "0");
        let mm = String(date.getMonth() + 1).padStart(2, "0");
        let yyyy = String(date.getFullYear());
        date = hh + ":" + mimi + "; " + dd + "/" + mm + "/" + yyyy;
        //console.log(date);
        let x = Number(sizex.value);
        if (x == 0)
            x = 580;
        let y = Number(sizey.value);
        if (y == 0)
            y = 400;
        background = bg.value;
        let infos = new Picture.PictureSave(date, Picture.figures, x, y, background);
        //Daten an Server schicken
        console.log("Send Picture");
        let pictures = JSON.stringify(infos);
        let query = new URLSearchParams(pictures);
        let response = await fetch(url + "?" + query.toString());
        let responseText = await response.text();
        alert(responseText);
        list = "";
    }
    async function restoerPicture(_event) {
        if (list == "") {
            //Anfrage senden
            savedPictures.splice(0, savedPictures.length);
            console.log("sending");
            let response = await fetch(url + "?get");
            let responseText = await response.text();
            responseText.slice(2, 40);
            let pictureData = JSON.parse(responseText);
            alert(pictureData);
            savedPictures.push(pictureData);
            console.log(savedPictures);
            createList();
            list = "loaded";
        }
    }
    function createList() {
        listPlace.innerHTML = "";
        for (let index = 0; index < savedPictures.length; index++) {
            let picture = document.createElement("p");
            picture.setAttribute("id", "" + savedPictures[index].date);
            picture.addEventListener("click", loadPicture);
            picture.innerHTML = "abc" + savedPictures[index].date;
            listPlace.appendChild(picture);
        }
    }
    function loadPicture(_event) {
        console.log("loading picture");
        for (let index = 0; index < savedPictures.length; index++) {
            let id = _event.target.id;
            if (id == savedPictures[index].bg) {
                for (let index = 0; index < savedPictures.length; index++) {
                    Picture.figures.push(savedPictures[index].figure[index]);
                }
            }
        }
    }
})(Picture || (Picture = {}));
//# sourceMappingURL=main.js.map