import { Server } from "http";
import app from "./app";

const PORT = process.env.PORT || 5000;

async function main() {
    try {
        const server: Server = app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    } catch (error) {
        console.error("Error starting the server:", error);
        process.exit(1);
    }
}

main();
