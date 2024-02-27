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

app.use("/api/cartItems", require('./productroute'));
app.use("/api/productReviews", require('./productReviewsRoute'));
app.use("/api/productData", require('./productDataRoute'));
app.use("/api/salon", require('./Product/Route'));
app.use("/api/sofwarenetworking", require('./SoftwareNetworking/Route'));
app.use("/api/furniture", require('./furniture/Route'));
app.use("/api/bad", require('./Bad/Route'));
app.use("/api/bath", require('./BATH/Route'));
app.use("/api/data", require('./Data/Route'));






app.listen(PORT, () => {
  console.log(
    ` Server is running at PORT ${PORT}`
  );
});
