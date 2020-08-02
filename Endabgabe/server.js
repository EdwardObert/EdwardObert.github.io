"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Http = require("http");
const Url = require("url");
const Mongo = require("mongodb");
var Picture;
(function (Picture) {
    let pictures;
    let allPictures = [];
    let port = process.env.PORT;
    if (port == undefined)
        port = 5002;
    let databaseUrl = "mongodb+srv://Testuser:halloichhabekeinelustmehr@eia2-e3syb.mongodb.net/<dbname>?retryWrites=true&w=majority";
    //let destination: string = "";
    startServer(port /*destination*/);
    connectToDatabase(databaseUrl);
    function startServer(_port /*, _destination: string*/) {
        let server = Http.createServer();
        console.log("Server strating on port: " + _port);
        server.listen(_port);
        server.addListener("request", handleRequest);
        /*if (_destination == "local")
            console.log("Using local databse");
            databaseUrl = "mongo://27017";*/
    }
    async function connectToDatabase(_url) {
        let options = { useNewUrlParser: true, useUnifiedTopology: true };
        let mongoClient = new Mongo.MongoClient(_url, options);
        await mongoClient.connect();
        pictures = mongoClient.db("PaintItYourSelf").collection("Pictures");
        console.log("Database connetion", pictures != undefined);
    }
    async function handleRequest(_request, _response) {
        console.log("What's up?");
        _response.setHeader("content-type", "text/html; charset-utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");
        if (_request.url) {
            let url = Url.parse(_request.url, true);
            if (_request.url.indexOf("factor") != -1) {
                _response.write("Pictured saved. Thank you for painting.");
                storeOrder(url.query);
            }
            if (_request.url.indexOf("get") != -1) {
                let cursor = await pictures.find();
                await cursor.forEach(getPictures);
                let jsonString = JSON.stringify(allPictures);
                _response.write(jsonString);
                allPictures = [];
            }
        }
        _response.end();
    }
    function storeOrder(_picture) {
        pictures.insertOne(_picture);
    }
    function getPictures(_item) {
        for (let key in _item) {
            allPictures.push(key);
        }
    }
})(Picture = exports.Picture || (exports.Picture = {}));
//# sourceMappingURL=server.js.map