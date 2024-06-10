import bodyParser from "body-parser";
import express from "express";
import { AppDataSource } from "./data-source.js";

AppDataSource.initialize().then(async () => {

    // create express app
    const app = express();
    app.use(bodyParser.json());

    // start express server
    app.listen(3000);

    console.log("Express server has started on port 3000. Open http://localhost:3000/users to see results");

}).catch(error => console.log(error));
