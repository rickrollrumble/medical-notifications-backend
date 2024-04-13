import { Router } from "express";
import { Log } from "../util/util";

const router = Router();

router.get('/login/:id', (req, resp) => {
    Log.info("successful request");
    resp.status(200).send(`Successful login, welcome user ${req.params.id}`);
});

export { router as ProfileHandler };
