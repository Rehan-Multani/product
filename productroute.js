const express = require("express");
const router = express.Router();

const { getpaginate, insertdata, updatedata, deletedata, getdata } =
    require('./productctrl')


router.get("/", getpaginate)
router.get("/:id", getdata)
router.post("/",insertdata)
router.put("/:id", updatedata)
router.delete("/:id", deletedata)

module.exports = router;