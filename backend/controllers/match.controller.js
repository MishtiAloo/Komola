import Match from "../models/match.model.js"

export const addMatch = async (req, res) => {
    const requestedMatch = req.body;

    const newMatch = new Match(requestedMatch);

    try {
        await newMatch.save();
        res.status(201).json({success: true, data: newMatch})
    } catch (error) {
        console.error ("Notun match add korte giya jhamela lagse: ", error.message)
        res.status(500).json({success: false, message: "Server er bhitre jhamela"});
    }
}

export const getMatch = async (req, res) => {
    try {
        const allMatches = await Match.find({});
        res.status(201).json({success: true, data: allMatches});
    } catch (error) {
        console.error ("Shob Match khujte jaye error khailam: ", error.message)
        res.status(500).json({success: false, message: "Server er bhitre jhamela"});
    }
}

export const updateMatch = async (req, res) => {
    const {id} = req.params;

    try {
        const updatedMatch = await Match.findByIdAndUpdate(id, req.body, {new: true});
        res.status(200).json({success: true, data: updatedMatch});
    } catch (error) {
        console.error ("Match update korte giya jhamela lagse: ", error.message)
        res.status(500).json({success: false, message: "Server er bhitre jhamela"});
    }
}

export const deleteMatch = async (req, res) => {
    const {id} = req.params;

    try {
        await Match.findByIdAndDelete(id);
        res.status(200).json({success: true, message: "Match delete kora hoise"})
    } catch (error) {
        console.error ("Match delete korte giya jhamela lagse: ", error.message)
        res.status(500).json({success: false, message: "Server er bhitre jhamela"});
    }
}