const mongoose = require("mongoose")


const ReservationShcema = new mongoose.Schema(
    {
        attendants: {
            type: Number,
            required :true,
        },
        type_ticket: {
            type: String,
            required: true,
        },
        participants: [
            {
                name:String,
                surname:String,
                age:String
            }
        ],
        total: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        card_num: {
            type: String,
            required: true,
        },
        sec_code: {
            type: String,
            required: true,
        },
        bank: {
            type: String,
            required: true,
        },
        user_id: {
            type: String,
            required: true,
        },
        event_id: {
            type: String,
            required: true,
        }

    }
)

const ReservationModel = mongoose.model("reservations",ReservationShcema)

module.exports = ReservationModel;