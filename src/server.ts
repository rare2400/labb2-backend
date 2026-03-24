import * as Hapi from "@hapi/hapi";
import * as dotenv from "dotenv";
import { registerRoutes } from "./routes/todoRoutes";
import "./db/database";

// loading environmental variables from the .env-file
dotenv.config();

// initiate server
const init = async () => {

    // creating new Hapi-server with port from .env and host, allow cors
    const server = Hapi.server({
        port: process.env.PORT || 5000,
        host: "localhost",
        routes: {
            cors: { origin: ["*"] },
        },
    });

    // register todo-routes on server
    registerRoutes(server);

    // starts the server and logs address
    await server.start();
    console.log(`Servern körs på ${server.info.uri}`);
};

init();