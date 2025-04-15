import Player from "../models/player.model.js";

export const getPlayer = async (req, res) => {
    try {
        const allPlayers = await Player.find({});
        res.status(201).json({success: true, data: allPlayers});
    } catch (error) {
        console.error ("Shob player khujte jaye error khailam: ", error.message)
        res.status(500).json({success: false, message: "Server er bhitre jhamela"});
    }
}

export const postPalyer = async (req, res) => {
    const playerfromUser = req.body;

    if (!playerfromUser.name || !playerfromUser.age) 
        return res.status(400).json({success: false, message: "Shob bhorat hoy nai"});

    const newPlayer = new Player(playerfromUser);

    try {
        await newPlayer.save();
        res.status(201).json({success: true, data: newPlayer})
    } catch (error) {
        console.error ("Notun Player add korte giya jhamela lagse: ", error.message)
        res.status(500).json({success: false, message: "Server er bhitre jhamela"});
    }
}

export const updatePlayer = async (req, res) => {
    const {id} = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({success: false, message: "Bhul id diso, ei id er keu nai"});
    }

    const updatedData = req.body;

    try {
        const updatedPlayer = await Player.findByIdAndUpdate(id, updatedData, {new: true});
        res.status(200).json({success: true, data: updatedPlayer});
    } catch (error) {
        console.error ("Player update korte giya jhamela lagse: ", error.message)
        res.status(500).json({success: false, message: "Server er bhitre jhamela"});
    }
}

export const deletePlayer = async (req, res) => {
    const {id} = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({success: false, message: "Bhul id diso, ei id er keu nai"});
    }

    try {
        await Player.findByIdAndDelete(id);
        res.status(200).json({success: true, message: "Player delete kora hoise"})
    } catch (error) {
        console.error ("Player delete korte giya jhamela lagse: ", error.message)
        res.status(500).json({success: false, message: "Server er bhitre jhamela"});
    }
}