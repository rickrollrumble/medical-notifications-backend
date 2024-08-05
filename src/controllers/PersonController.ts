import express from "express";

const personRouter = express.Router();

personRouter.get("/:personId", (req, res) => {
  res.json({ personId: req.params.personId });
});

export { personRouter };
