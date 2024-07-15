import container from "./src/startup/container";
const server = container.resolve("Server"); 
const { MONGO_URI } = container.resolve("Config");
import mongoose  from "mongoose";

mongoose
  .connect(MONGO_URI)
  .then(() => {
    server.start();
  })
  .catch(console.log);
