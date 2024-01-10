const db = require("./productmodel");
const asyncHandler = require("express-async-handler");

const cloudinary = require('cloudinary').v2;
cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.SECRET_KEY,
});

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

        const dataUrl1 = `data:${req.files['catImg'][0].mimetype};base64,${req.files['catImg'][0].buffer.toString('base64')}`;
        const dataUrl2 = `data:${req.files['productImages'][0].mimetype};base64,${req.files['productImages'][0].buffer.toString('base64')}`;

        const result1 = await cloudinary.uploader.upload(dataUrl1);
        const result2 = await cloudinary.uploader.upload(dataUrl2);

        let data = await db.create(
            {
                catImg: result1.secure_url,
                productImages: result2.secure_url,
                ...req.body
            }
        );
        res.status(201).json(data);
    } catch (error) {
        res.status(404).json(error.message);
    }
});



const updatedata = asyncHandler(async (req, res) => {
    try {

        
        const dataUrl1 = `data:${req.files['catImg'][0].mimetype};base64,${req.files['catImg'][0].buffer.toString('base64')}`;
        const dataUrl2 = `data:${req.files['productImages'][0].mimetype};base64,${req.files['productImages'][0].buffer.toString('base64')}`;

        const result1 = await cloudinary.uploader.upload(dataUrl1);
        const result2 = await cloudinary.uploader.upload(dataUrl2);

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
