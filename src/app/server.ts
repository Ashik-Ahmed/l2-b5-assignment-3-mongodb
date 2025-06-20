import { Server } from "http";
import app from "./app";
import mongoose from "mongoose";
import dotenv from "dotenv";
import "colors";

dotenv.config();

const PORT = process.env.PORT || 5000;

async function main() {
    try {

        //database connection
        const mongoUri = process.env.MONGODB_URI;

        if (!mongoUri) {
            throw new Error("MONGODB_URI environment variable is not defined");
        }
        mongoose.connect(mongoUri).then(() => {
            console.log(`MongoDB Connection Successful...`.red.bold);
        })

        // Start the server
        const server: Server = app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`.yellow.bold);
        });
    } catch (error) {
        console.error("Error starting the server:", error);
        process.exit(1);
    }
}

main();
