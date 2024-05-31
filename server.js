import express from "express";
import path from "path";
import { demoData } from "./demoData.js";

const app = express();

// app.use(express.static(path.join(__dirname, "public")));

// app.get("/", (req, res) => {
//   // res.send({ message: "Hello World!", html: "<h1>Hello World!</h1>" });
//   res.sendFile(path.join(__dirname, "public", "index.html"));
// });

// app.get("/about", (req, res) => {
//   res.sendFile(path.join(__dirname, "public", "about.html"));
// });

app.get("/api/countries", (req, res) => {
  res.json(demoData);
});

app.listen(8000, () => {
  console.log(`Server Running on port 8000`);
});
