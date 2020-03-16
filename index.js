const express = require("express");
const app = express();
const port = process.env.PORT || 8000;
const bodyParser = require("body-parser");
const axios = require("axios");
const morgan = require("morgan");
const cors = require("cors");
const helmet = require("helmet");
app.use(helmet());
app.use(morgan("common"));
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/punk", async (req, res, next) => {
  axios
    .get("https://api.punkapi.com/v2/beers?page=2&per_page=80")
    .then(response => res.send(response.data))
    .catch(err => {
      console.log(err);
      res.status(500).send(err);
    });
});

app.use(express.static("client/build"));

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "client", "build", index.html));
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
