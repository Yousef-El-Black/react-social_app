import mongoose from "mongoose";

import { MONGODB_ATLAS } from "../config";

const connectDB = () => {
  mongoose
    .connect(MONGODB_ATLAS as string)
    .then(() => {
      console.log("DB Connected!");
    })
    .catch((err) => {
      console.log("Failed to Connect \n Error : " + err);
    });
};

export default connectDB;
