import mongoose from "mongoose";

const bucketListSchema = mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
    destination: {
      type: String,
      required: true,
    },
    isVisited: {
      type: Boolean,
      default: false,
    },
    expectedDate: {
      type: Date,
    },
  },
  { timestamps: true }
);

export const BucketList =
  mongoose.models.BucketList ||
  new mongoose.model("BucketList", bucketListSchema);
