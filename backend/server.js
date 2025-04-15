import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { connectDB } from './config/db.js';
import playerRoutes from './routes/player.route.js';
import userRoutes from './routes/user.route.js';
import matchRoutes from './routes/match.route.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;  

app.use(cors());
app.use(express.json()); 

app.use("/api/players", playerRoutes);
app.use("/api/users", userRoutes);
app.use("/api/matches", matchRoutes);

app.listen(PORT, () => {
    connectDB();
    console.log ("server started at http://localhost:", + PORT +  " hello, nodemon works fine, im proud of myself.");
});