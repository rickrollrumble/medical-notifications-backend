import express from "express";
import dotenv from "dotenv";
import { PersonService } from "./services/PersonService";
import datasource from "./datasource";
import { Log } from "./util/logger";

const personService = new PersonService(datasource);

dotenv.config();
const app = express();

const port = process.env.PORT || 3000;

app.get("/", (req, resp) => {
    resp.send("Express + Typescript server");
});

app.get("/person/:id", (req, resp) => {
    try {
        let r = personService.get(parseInt(req.params.id));
        resp.json(r);
        resp.status(200);
    } catch (err) {
        if (err instanceof Error) {
            resp.json({ message: err.message });
            resp.status(500);
        }
    }
});

app.listen(port, () => {
    Log.info(`[server]: Server is running at http://localhost:${port}`);
});