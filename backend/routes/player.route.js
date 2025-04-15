import express  from "express";
import { deletePlayer, getPlayer, postPalyer, updatePlayer } from "../controllers/player.controller.js";

const router = express.Router();

router.get ("/", getPlayer);
router.post ("/", postPalyer);
router.put ("/:id", updatePlayer);
router.delete ("/:id", deletePlayer);

export default router;