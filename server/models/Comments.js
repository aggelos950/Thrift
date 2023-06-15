const mongoose = require("mongoose")


const CommentShcema = new mongoose.Schema(
    {
        user: {
            type: String,
            required :true,
        },
        event: {
            type: String,
            required: true,
        },
        src: {
            type: String,
        },
        commentText: {
            type: String,
            required: true,
        }
    }
)

const CommentModel = mongoose.model("comments",CommentShcema)

module.exports = CommentModel;