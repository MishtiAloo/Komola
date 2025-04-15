import mongoose from "mongoose";

const userSchema = new mongoose.Schema ({
    userName: {
        type: String,
        required: true,
        unique: true
    },
    age: {
        type: Number,
        required: true  
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true  
    },
    password: {
        type: String,
        required: true,
        trim: true
    },
    image: {
        type: String,
    },
    userType: {
        type: String,
        required: true,
        enum: ['visitor', 'player', 'admin']
    }
}, {
    discriminatorKey: 'userType',
    timestamps: true
});

const User = mongoose.model('User', userSchema);

User.discriminator("player", new mongoose.Schema ({
    KBU_nickname : {type: String},
    rating: {type: Number},
    position: {type: String, required: true, enum: ["GK", "CB", "RB", "LB", "RWB", "LWB", "CBR", "CBL", "CM",   "CDM", "CAM", "LM", "RM", "LMF", "RMF", "CMF", "CF", "ST", "SS", "LF", "RF", "AM", "DM", "W", "FW"]}
}));

User.discriminator("admin", new mongoose.Schema({
    KBU_nickname : {type: String},
    rating: {type: Number},
    position: {type: String, required: true, enum: ["GK", "CB", "RB", "LB", "RWB", "LWB", "CBR", "CBL", "CM",   "CDM", "CAM", "LM", "RM", "LMF", "RMF", "CMF", "CF", "ST", "SS", "LF", "RF", "AM", "DM", "W", "FW"]},
    adminType: {type: String, required: true, enum: ['superAdmin', 'moderator']}
}));

export default User;