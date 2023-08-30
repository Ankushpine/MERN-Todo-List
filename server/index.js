import express, { urlencoded } from "express";
const app = express();

//Connecting Mongo DB
import "./config/db.js";
import cors from "cors";
import router from "./routers/index.js";

app.use(cors());
app.use(express.json());
app.use(urlencoded());

app.use("/", router);

app.listen(5000, () => console.log("Server Connected to port."));
