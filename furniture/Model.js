const mongoose = require("mongoose");

const data = mongoose.Schema({
    image: {
        type: String,
        required: true,

    },
    image1: {
        type: String,
        required: true,

    },
    image2: {
        type: String,
        required: true,

    },
    image3: {
        type: String,
        required: true,

    },
    image4: {
        type: String,
        required: true,

    },
    name: {
        type: String,
        required: true,

    },
    price: {
        type: String,
        required: true,

    },
    brand: {
        type: String,
        required: true,

    },
    description: {
        type: String,
        required: true,

    },
    category: {
        type: String,
        required: true,

    },
    cuttedprice: {
        type: String,
        required: true,

    },
    modelName: {
        type: String,
        required: true,

    },
    style: {
        type: String,
        required: true,

    },
    colour: {
        type: String,
        required: true,

    },
    screenSize: {
        type: String,
        required: true,

    },

},
    {
        timestamps: true,
    })
module.exports = mongoose.model("furniture", data);
