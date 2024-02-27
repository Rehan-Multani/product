const mongoose = require("mongoose");

const data = mongoose.Schema({
    date: {
        type: String,
        required: true,

    },
    source: {
        type: String,
        required: true,

    },
    medium: {
        type: String,
        required: true,

    },
    sessions: {
        type: String,
        required: true,

    }
},
    {
        timestamps: true,
    })
module.exports = mongoose.model("datas", data);
