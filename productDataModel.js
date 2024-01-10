const mongoose = require("mongoose");

const data = mongoose.Schema({
    id:{
        type: String,
        required: true,

    },
    productName: {
        type: String,
        required: true,

    },
    price: {
        type: String,
        required: true,

    },
    oldPrice: {
        type: String,
        required: true,

    },
    weight: [],
    catImg: {
        type: String,
        required: true,

    },
    discount: {
        type: String,
        required: true,

    }, 
    brand: {
        type: String,
        required: true,

    },
    productImages: {
        type: String,
        required: true,

    },
    rating: {
        type: String,
        required: true,

    },
    description: {
        type: String,
        required: true,

    },

},
{
  timestamps: true,
})
module.exports = mongoose.model("productdata", data);
