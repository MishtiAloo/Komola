import mongoose from "mongoose";

const score = new mongoose.Schema ({
    kbu: {type: Number, required: true},
    opponent: {type: Number, required: true}
});

const goal = new mongoose.Schema ({
    scorer: {type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true},
    assist: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
});

const result = new mongoose.Schema ({
    resScore: {type: score, required: true},
    resGoals: {type: [goal], required: true},
    motm: {type: mongoose.Schema.Types.ObjectId, ref: 'User'}
});

const matchSchema = new mongoose.Schema ({
    vs: {
        type: String,
        required: true
    },
    cup: {
        type: String
    },
    coverImg: {
        type: String
    },
    date: {
        type: String,
        required: true
    },
    time: {
        type: String,
        required: true
    },
    venue: {
        type: String,
        required: true
    },
    participants: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }],
    done: {
        type: Boolean,
        required: true
    },
    tieBreaker: {
        type: Boolean
    },
    matchResult: result
});

const Match = mongoose.model('Match', matchSchema);

export default Match;