const mongoose = require("mongoose");

const data = mongoose.Schema({
    review: {
        type: String,
        required: true,

    },
    userName: {
        type: String,
        required: true,

    },
    rating: {
        type: String,
        required: true,

    },
    productId: {
        type: String,
        required: true,

    },
    id: {
        type: String,
        required: true,

    },
    date: {
        type: String,
        required: true,

    }, 

},
{
  timestamps: true,
})
module.exports = mongoose.model("productreviews", data);
