import mongoose from "mongoose";

/**
 * Connected to Mongodb
 */
export const connectedToDb = () => {
  const db = process.env.MONGODB_KEY;
  mongoose
    .connect(db)
    .then(() => {
      console.log("connected to mongodb");
    })
    .catch((err) => {
      console.log("mongodb connection error !!!!");
    });
};
