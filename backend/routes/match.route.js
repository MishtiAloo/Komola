import express  from "express";
import { addMatch, deleteMatch, getMatch, updateMatch } from "../controllers/match.controller.js";


const router = express.Router();

router.post ("/", addMatch);
router.get ("/", getMatch);
router.put ("/:id", updateMatch);
router.delete ("/:id", deleteMatch);

export default router;