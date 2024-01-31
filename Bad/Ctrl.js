const db = require("../Bad/Model");
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

        // const dataUrl1 = `data:${req.files['image'][0].mimetype};base64,${req.files['image'][0].buffer.toString('base64')}`;
        // const dataUrl2 = `data:${req.files['image1'][0].mimetype};base64,${req.files['image1'][0].buffer.toString('base64')}`;
        // const dataUrl3 = `data:${req.files['image2'][0].mimetype};base64,${req.files['image2'][0].buffer.toString('base64')}`;
        // const dataUrl4 = `data:${req.files['image3'][0].mimetype};base64,${req.files['image3'][0].buffer.toString('base64')}`;
        // const dataUrl5 = `data:${req.files['image4'][0].mimetype};base64,${req.files['image4'][0].buffer.toString('base64')}`;

        // const result1 = await cloudinary.uploader.upload(dataUrl1);
        // const result2 = await cloudinary.uploader.upload(dataUrl2);
        // const result3 = await cloudinary.uploader.upload(dataUrl3);
        // const result4 = await cloudinary.uploader.upload(dataUrl4);
        // const result5 = await cloudinary.uploader.upload(dataUrl5);
        // console.log(result1);
        let data = await db.create(
            req.body
        );
        res.status(201).json(data);

    } catch (error) {
        res.status(404).json(error.message);
    }
});



const updatedata = asyncHandler(async (req, res) => {
    try {


        // const dataUrl1 = `data:${req.files['image'][0].mimetype};base64,${req.files['image'][0].buffer.toString('base64')}`;
        // const dataUrl2 = `data:${req.files['image1'][0].mimetype};base64,${req.files['image1'][0].buffer.toString('base64')}`;
        // const dataUrl3 = `data:${req.files['image2'][0].mimetype};base64,${req.files['image2'][0].buffer.toString('base64')}`;
        // const dataUrl4 = `data:${req.files['image3'][0].mimetype};base64,${req.files['image3'][0].buffer.toString('base64')}`;
        // const dataUrl5 = `data:${req.files['image4'][0].mimetype};base64,${req.files['image4'][0].buffer.toString('base64')}`;

        // const result1 = await cloudinary.uploader.upload(dataUrl1);
        // const result2 = await cloudinary.uploader.upload(dataUrl2);
        // const result3 = await cloudinary.uploader.upload(dataUrl3);
        // const result4 = await cloudinary.uploader.upload(dataUrl4);
        // const result5 = await cloudinary.uploader.upload(dataUrl5);


        let result = await db.updateOne(
            { _id: req.params.id },
            {
                $set: req.body
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
