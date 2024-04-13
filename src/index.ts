import express from "express";
import dotenv from "dotenv";
import { Log } from "./util/util";
import { ProfileHandler } from "./controllers/ProfileController";
import { AttendanceHandler } from "./controllers/AttendanceController";

dotenv.config();
const app = express();

const port = process.env.PORT || 3000;

app.use(express.json());
app.use('/profile', ProfileHandler);
app.use('/attendance', AttendanceHandler);

app.get("/", (req, resp) => {
    resp.send("Express + Typescript server");
});

app.listen(port, () => {
    Log.info(`[server]: Server is running at http://localhost:${port}`);
});