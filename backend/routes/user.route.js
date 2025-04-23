import express  from "express";
import { deleteUser, findUserByID, getUser, loginUser, postUser, updateUser } from "../controllers/user.controller.js";

const router = express.Router();

router.get ("/", getUser);
router.post ("/", postUser);
router.put ("/:id", updateUser);
router.delete ("/:id", deleteUser);
router.post ("/login", loginUser);
router.get ("/:id", findUserByID);

export default router;