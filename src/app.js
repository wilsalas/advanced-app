const express = require("express");
const app = express();
const cors = require("cors");
const morgan = require("morgan");
const { APIVERSION } = require("./config/constants");

app.use(cors());
app.use(morgan("tiny"));
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true, limit: "50mb" }));
app.use(APIVERSION.v1, require("./routes"));

module.exports = app;
