const express = require("express");

const { getpaginate, insertdata, updatedata, deletedata, getdata } =
    require('./productReviewsCtrl')

const router = express.Router();

router.get("/", getpaginate)
router.get("/:id", getdata)
router.post("/",insertdata)
router.put("/:id", updatedata)
router.delete("/:id", deletedata)

module.exports = router;