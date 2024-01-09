const bodyParser = require("body-parser");
const express = require("express");
const dbConnect = require("./Config/dbConnect");
const app = express();
const dotenv = require("dotenv").config();

const PORT = process.env.PORT;

const cookieParser = require("cookie-parser");
const cors = require("cors");

dbConnect();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/api/addproduct", require('./productroute'));

app.listen(PORT, () => {
  console.log(
    ` Server is running at PORT ${PORT}`
  );
});
