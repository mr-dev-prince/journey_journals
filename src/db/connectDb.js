import mongoose from "mongoose";

export const connectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, { dbName: "wandererwallet" });
    console.log("⚙️   Database connected succesfully");
  } catch (error) {
    console.log("⚙️ Database Connection Error", error);
  }
};
