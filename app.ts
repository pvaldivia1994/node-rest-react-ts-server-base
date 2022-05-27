import dotenv from "dotenv";
import Server from "./models/Server";

dotenv.config({ path: `./configs/.env.${process.env.NODE_ENV}` });

if (!process.env.NODE_ENV) {
  throw Error("NODE_ENV is not defined.");
}

const server = new Server();

server.listen();
