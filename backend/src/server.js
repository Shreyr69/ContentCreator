import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import { createServer } from "http";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import assetRoutes from "./routes/assetRoute.js";
import messageRoutes from "./routes/messageRoutes.js";
import paymentRoutes from "./routes/paymentRoutes.js";
import { initializeSocket } from "./socket/socket.js";
import { connectRedis } from "./config/redis.js";

dotenv.config();

connectDB();

await connectRedis();

const app = express();
const httpServer = createServer(app);

// Initialize Socket.IO
const io = initializeSocket(httpServer);

app.use(express.json());
app.use(cookieParser());

const allowedOrigins = [process.env.CLIENT_URL, 'http://localhost:7153'];

app.use(cors({
    origin: (origin, callback) => {
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    credentials: true
}));

app.use("/api/auth", authRoutes);
app.use("/api/assets", assetRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/payment", paymentRoutes);

httpServer.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
    console.log(`Socket.IO initialized on port ${process.env.PORT}`);
});