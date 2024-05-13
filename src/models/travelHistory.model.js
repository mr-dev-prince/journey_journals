import mongoose from "mongoose";

const travelHistorySchema = mongoose.Schema(
  {
    userId: { type: mongoose.Schema.ObjectId, ref: "User", required: true },
    date: { type: Date, required: true },
    destination: { type: String, required: true },
    activities: [{ type: String }],
    memories: [{ type: String }],
    photos: [{ type: String }],
  },
  { timestamps: true }
);

export const TravelHistory =
  mongoose.models.travelHistories ||
  new mongoose.model("travelHistories", travelHistorySchema);
