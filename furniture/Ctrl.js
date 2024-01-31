const db = require("../furniture/Model");
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
