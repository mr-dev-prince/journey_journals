import mongoose from "mongoose";

const visitedPlacesSchema = mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
    placeName: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
    },
  },
  { timestamps: true }
);

export const VisitedPlaces =
  mongoose.models.visitedPlaces ||
  new mongoose.model("visitedPlaces", visitedPlacesSchema);
