import express from "express";
import { demoData } from "../demoData.js";

const router = express.Router();

router.get("/", (req, res) => {
  const limit = req.query.limit;

  if (limit > 0) {
    res.status(200).json(demoData.slice(0, limit));
  } else {
    res.status(200).json(demoData);
  }
});

router.get("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const country = demoData.find((country) => country.id === id);

  if (!country) {
    return res.status(404).json({ message: "Country Not Found" });
  }
  res.status(200).json(country);
});

export default router;
