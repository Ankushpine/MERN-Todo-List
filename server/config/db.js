import mongoose from "mongoose";
import "dotenv/config";

//Database Connection
const db = mongoose
  .connect(process.env.MONGO_DB_URL)
  .then(() => console.log("Database Connected Sucessfully."))
  .catch((error) =>
    console.log("Error in connecting Database. --->Error::", error.message)
  );

export default db;
