import express from "express";
// import path from "path";
// import { demoData } from "./demoData.js";
import countries from "./routes/countries.js";

const app = express();
const port = process.env.PORT || 8000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// app.use(express.static(path.join(__dirname, "public")));

// app.get("/", (req, res) => {
//   // res.send({ message: "Hello World!", html: "<h1>Hello World!</h1>" });
//   res.sendFile(path.join(__dirname, "public", "index.html"));
// });

// app.get("/about", (req, res) => {
//   res.sendFile(path.join(__dirname, "public", "about.html"));
// });

app.use("/api/countries", countries);

app.listen(port, () => {
  console.log(`Server Running on port ${port}`);
});
