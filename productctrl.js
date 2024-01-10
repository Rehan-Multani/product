const db = require("./productmodel");
const asyncHandler = require("express-async-handler");
const multer = require('multer');
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

const getpaginate = async (req, res) => {
    try {
        const data = await db.find()
        await res.status(200).json(data);
    } catch (error) {
        res.status(404).json(error.message);
    }
};


const getdata = asyncHandler(async (req, res) => {
    try {
        data = await db.find({ _id: req.params.id });
        res.status(200).json(data);
    } catch (error) {
        res.status(404).json(error.message);
    }
});


const insertdata = asyncHandler(async (req, res) => {
    try {
    
        const upload = multer({
            storage: multer.diskStorage({
                destination: function (req, file, cb) {
                    cb(null, 'uploads');
                },
                filename: function (req, file, cb) {
                    cb(null, file.fieldname + "-" + Date.now() + ".jpg");
                },
            }),
        }).fields([
            { name: 'catImg', maxCount: 1 },
            { name: 'productImages', maxCount: 1 },
        ]); // Use 'fields' instead of 'single' for multiple files

        upload(req, res, async function (err) {
            if (err instanceof multer.MulterError) {
                // A Multer error occurred when uploading
                return res.status(400).json({ message: 'Multer error' });
            } else if (err) {
                // An unknown error occurred when uploading
                return res.status(500).json(err);
            }

            const imageUrl1 = `https://${req.get('host')}/uploads/${req.files['catImg'][0].filename}`;
            const imageUrl2 = `https://${req.get('host')}/uploads/${req.files['productImages'][0].filename}`;

            let data = await db.create({
                catImg: imageUrl1,
                productImages: imageUrl2,
                ...req.body,
            });
            res.status(201).json(data);
        });
    } catch (error) {
        res.status(404).json(error.message);
    }
});


const updatedata = asyncHandler(async (req, res) => {
    try {

        
        const dataUrl1 = `data:${req.files['catImg'][0].mimetype};base64,${req.files['catImg'][0].buffer.toString('base64')}`;
        const dataUrl2 = `data:${req.files['productImages'][0].mimetype};base64,${req.files['productImages'][0].buffer.toString('base64')}`;

       

        let result = await db.updateOne(
            { _id: req.params.id },
            {
                $set: {
                    catImg: result1.secure_url,
                    productImages: result2.secure_url,
                    ...req.body
                }
            }
        );
        res.status(200).json(result);
    } catch (error) {
        res.status(404).json(error.message);
    }
});


const deletedata = asyncHandler(async (req, res) => {
    try {
        let result = await db.deleteOne(
            { _id: req.params.id },
            {
                $set: req.body,
            }
        );
        res.status(200).json(result);
    } catch (error) {
        res.status(404).json(error.message);
    }
});

module.exports = { getpaginate, getdata, insertdata, updatedata, deletedata };
