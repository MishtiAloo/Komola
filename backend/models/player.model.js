import mongoose from "mongoose";

const playerSchema = new mongoose.Schema ({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    rating: {
        type: Number,
        required: false
    },
    image: {
        type: String,
        required: false
    },
}, {
    timestamps: true
});

const Player = mongoose.model('Player', playerSchema);

export default Player;