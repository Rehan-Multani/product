const mongoose = require("mongoose");

const data = mongoose.Schema({
    brand: {
        type: String,
        required: true,

    },
    catImg: {
        type: String,
        required: true,

    },
    description: {
        type: String,
        required: true,

    },
    discount: {
        type: String,
        required: true,

    },
    id: {
        type: String,
        required: true,

    },
    oldPrice: {
        type: String,
        required: true,

    }, 
     price: {
        type: String,
        required: true,

    },
    productImages: {
        type: String,
        required: true,

    },
    productName: {
        type: String,
        required: true,

    },
    quantity: {
        type: String,
        required: true,

    },
    rating: {
        type: String,
        required: true,

    },
    weight: []

},
{
  timestamps: true,
})
module.exports = mongoose.model("addproduct", data);
