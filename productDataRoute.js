const express = require("express");
const multer = require('multer'); // For handling file uploads
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });
const { getpaginate, insertdata, updatedata, deletedata, getdata } =
    require('./productDataCtrl')

const router = express.Router();

router.get("/", getpaginate)
router.get("/:id", getdata)
router.post("/",
    upload.fields([{ name: 'catImg' }, { name: 'productImages' }]),
    insertdata)
router.put("/:id", upload.fields([{ name: 'catImg' }, { name: 'productImages' }]), updatedata)
router.delete("/:id", deletedata)

module.exports = router;