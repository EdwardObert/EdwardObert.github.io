import * as Http from "http";
import * as Url from "url";
import * as Mongo from "mongodb";

export namespace Picture {

    

    let pictures: Mongo.Collection;
    let allPictures: string [] = [];

    let port: number | string | undefined  = process.env.PORT;
    if (port == undefined)
        port = 5002;

    let databaseUrl: string = "mongodb+srv://Testuser:halloichhabekeinelustmehr@eia2-e3syb.mongodb.net/<dbname>?retryWrites=true&w=majority";

    //let destination: string = "";

    startServer(port /*destination*/);
    connectToDatabase(databaseUrl);

    function startServer(_port: number | string /*, _destination: string*/ ): void {
        let server: Http.Server = Http.createServer();
        console.log("Server strating on port: " + _port);

        server.listen(_port);
        server.addListener("request", handleRequest);

        /*if (_destination == "local")
            console.log("Using local databse");
            databaseUrl = "mongo://27017";*/
    }

    async function connectToDatabase (_url: string): Promise<void> {
        let options: Mongo.MongoClientOptions = {useNewUrlParser: true, useUnifiedTopology: true};
        let mongoClient: Mongo.MongoClient = new Mongo.MongoClient(_url, options);
        await mongoClient.connect();
        pictures = mongoClient.db("PaintItYourSelf").collection("Pictures");
        console.log("Database connetion", pictures != undefined);
    }

    async function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): Promise<void> {
        console.log("What's up?");

        
        _response.setHeader("content-type", "text/html; charset-utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");
        if (_request.url) {
            let url: Url.UrlWithParsedQuery = Url.parse(_request.url, true);
            if (_request.url.indexOf("factor") != -1) {
                _response.write("Pictured saved. Thank you for painting.");
                storeOrder(url.query);
            }

            if (_request.url.indexOf("get") != -1) {
                let cursor: Mongo.Cursor<any> = await pictures.find();
                await cursor.forEach(getPictures);
                let jsonString: string = JSON.stringify(allPictures);
                _response.write(jsonString);
                allPictures = [];
            }
        }

        _response.end();
    }

    function storeOrder(_picture: string): void {
        pictures.insertOne(_picture);
    }

    function getPictures(_item: object): void {
        for (let key in _item) {
            allPictures.push(key);

        }
    }

    
}