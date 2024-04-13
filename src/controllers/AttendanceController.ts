import { Router } from "express";
import { Log } from "../util/util";

const router = Router();

router.post('/absence/:id', (req, resp) => {
    Log.info({ id: req.params.id, body: req.body.body }, 'user called in absent',);
    resp.status(200).send(`absence recorded, user ${req.params.id}`);
});

export { router as AttendanceHandler };
