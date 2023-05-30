const mongoose = require("mongoose")


const EventShcema = new mongoose.Schema(
    {
        src: {
            type: String,
            required :true,
        },
        title: {
            type: String,
            required: true,
        },
        date: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        passed: {
            type: Boolean,
            required: true,
        },
    }
)

const EventModel = mongoose.model("events",EventShcema)

module.exports = EventModel;