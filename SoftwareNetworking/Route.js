const express = require("express");
const multer = require('multer'); // For handling file uploads
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });
const { getpaginate, insertdata, updatedata, deletedata, getdata } =
    require('../SoftwareNetworking/Ctrl')

const router = express.Router();

router.get("/", getpaginate)
router.get("/:id", getdata)
router.post("/",
    // upload.fields([{ name: 'image1' }, { name: 'image2' }, { name: 'image3' }, { name: 'image4' }]),
    insertdata)
router.put("/:id", updatedata)
router.delete("/:id", deletedata)

module.exports = router;