import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

function bandNameGenerator(req, res, next) {
  let bandName = req.body.street + req.body.pet;
  ************* 1. why is this req. in the front necessary?*************
  req.bandName = bandName;
  next();
}

app.use(bandNameGenerator);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/submit", (req, res) => {
  ************************** 2. and why is this req. also required at the front? **************************
  res.send(`<h1>Your band name is:</h1><h2>${req.bandName}✌️</h2>`);
});

// app.post("/submit", function (req, res) {
//   res.send(
//     `<h1>Your band name is:</h1><br>${req.body.street}${req.body.pet}✌️`
//   );
// });

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
