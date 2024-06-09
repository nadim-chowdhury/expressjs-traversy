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

router.post("/", (req, res) => {
  const newCountry = {
    id: demoData.length + 1,
    country: req.body.country,
    code: req.body.code,
    dial_code: req.body.dial_code,
  };

  if (!req.body.country) {
    return res.status(400).json({ message: "Please provide a country name" });
  }

  demoData.push(newCountry);
  res.status(201).json(newCountry);
});

router.put("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const country = demoData.find((country) => country.id === id);

  if (!country) {
    return res.status(404).json({ message: "Country Not Found" });
  }

  country.country = req.body.country;
  res.status(200).json(country);
});

router.delete("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const data = demoData.filter((country) => country.id !== id);

  return res.json(data);
});

export default router;
