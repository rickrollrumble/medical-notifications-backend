import express from "express";
import dotenv from "dotenv";
import { Log } from "./util/util";

dotenv.config();
const app = express();

const port = process.env.PORT || 3000;

app.get("/", (req, resp) => {
    resp.send("Express + Typescript server");
});

app.listen(port, () => {
    Log.info(`[server]: Server is running at http://localhost:${port}`);
});