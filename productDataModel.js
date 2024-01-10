const mongoose = require("mongoose");

const data = mongoose.Schema({
    cat_name: {
        type: String,
        required: true,

    },
    id: {
        type: String,
        required: true,

    },
    image: {
        type: String,
        required: true,

    },
    items: {
        type: String,
        required: true,

    },
    products: {
        type: String,
        required: true,

    },
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
    weight: []

},
{
  timestamps: true,
})
module.exports = mongoose.model("productdata", data);
