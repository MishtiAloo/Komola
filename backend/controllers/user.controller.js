import User from "../models/user.model.js";
import mongoose from "mongoose";

export const getUser = async (req, res) => {
    try {
        const allUsers = await User.find({});
        res.status(201).json({success: true, data: allUsers});
    } catch (error) {
        console.error ("Shob user khujte jaye error khailam: ", error.message)
        res.status(500).json({success: false, message: "Server er bhitre jhamela"});
    }
}

export const postUser = async (req, res) => {
    const userFromReq = req.body;

    if (!userFromReq.userName || !userFromReq.age || !userFromReq.email || !userFromReq.password || !userFromReq.userType) 
        return res.status(400).json({success: false, message: "Shob bhorat hoy nai"});

    const newUser = new User(userFromReq);

    try {
        await newUser.save();
        res.status(201).json({success: true, data: newUser})
    } catch (error) {
        if (error.code === 11000) {
            res.status(411).json({ success: false, message: 'Email already exists. Please choose a different one.',
            });
        } else {
            console.error ("Notun user add korte giya jhamela lagse: ", error.message)
            res.status(500).json({success: false, message: "Server er bhitre jhamela"});
        }
    }
}

export const updateUser = async (req, res) => {
    const {id} = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({success: false, message: "Bhul id diso, ei id er keu nai"});
    }

    const user = await User.findById(id);
    if (user.userType === 'admin') {
        return res.status(404).json({success: false, message: "Admin er tottho update kora jabe na"});
    }

    const updatedData = req.body;

    try {
        const updatedUser = await User.findByIdAndUpdate(id, updatedData, {new: true});
        res.status(200).json({success: true, data: updatedUser});
    } catch (error) {
        if (error.code === 11000) {
            res.status(400).json({ success: false, message: 'Email already exists. Please choose a different one.',
            });
        } else {
            console.error ("User update korte giya jhamela lagse: ", error.message)
            res.status(500).json({success: false, message: "Server er bhitre jhamela"});
        }
    }
}

export const deleteUser = async (req, res) => {
    const {id} = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({success: false, message: "Bhul id diso, ei id er keu nai"});
    }

    const user = await User.findById(id);
    if (user.userType === 'admin') {
        return res.status(404).json({success: false, message: "Admin re delete korte chayy!! Nauzubillah!"});
    }

    try {
        await User.findByIdAndDelete(id);
        res.status(200).json({success: true, message: "User delete kora hoise"})
    } catch (error) {
        console.error ("User delete korte giya jhamela lagse: ", error.message)
        res.status(500).json({success: false, message: "Server er bhitre jhamela"});
    }
}

export const loginUser = async (req, res) => {
    const { userName, password } = req.body;

    try {
        const currentUser = await User.findOne ({userName: userName})

        if (!currentUser)
            return res.status(404).json({success: false, message: "Ei naam er keu nai"});
        if (currentUser.password !== password)
            return res.status(401).json({success: false, message: "Password bhul"});
        
        res.status(200).json({success: true, message: "User login shomponno hoise", data: currentUser});
    } catch (error) {
        console.error ("User delete korte giya jhamela lagse: ", error.message)
        res.status(500).json({success: false, message: "Server er bhitre jhamela"});
    }
}