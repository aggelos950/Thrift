const mongoose = require("mongoose")


const UserShcema = new mongoose.Schema(
    {
        username: {
            type: String,
            required :true,
        },
        email: {
            type: String,
            required: true,
        },
        password: {
            type: String,
            required: true,
        }
    }
)

const UserModel = mongoose.model("users",UserShcema)

module.exports = UserModel;