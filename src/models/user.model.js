import mongoose from "mongoose";
import bcryptjs from "bcryptjs";
import jwt, { verify } from "jsonwebtoken";

const arrayMaxLength = function (val) {
  return val.length <= 10;
};

const userSchema = mongoose.Schema(
  {
    userName: {
      type: String,
      trim: true,
      lowercase: true,
      required: [true, "Username is required!"],
    },
    fullName: {
      type: String,
      trim: true,
      required: [true, "Fullname is required"],
    },
    email: {
      type: String,
      trim: true,
      required: [true, "Email is required"],
    },
    password: {
      type: String,
      required: [true, "Password is required"],
    },
    avatar: { type: String, default: null },
    dateOfBirth: { type: Date, default: null },
    location: { type: String },
    interests: {
      type: [{ type: String, maxlength: 15 }],
      validate: [arrayMaxLength, "{PATH} exceeds the limit of 10"],
    },
    privacySettings: {
      type: {
        visibility: { type: String, enum: ["public", "private", "friends"] },
        notification: Boolean,
      },
      default: {
        visibility: "public",
        notification: true,
      },
    },
    isVerified: { type: Boolean, default: false },
    hasMembership: {
      type: Boolean,
      default: false,
    },
    verifyToken: { type: String },
    verifyTokenExpiry: { type: Date },
    forgetPasswordToken: { type: String },
    forgetPasswordTokenExpiry: { type: Date },
    refreshToken: { type: String },
    refreshTokenExpiry: { type: Date },
  },
  { timestamps: true }
);

userSchema.pre("save", function (next) {
  if (!this.isModified("password")) return next();
  this.password = bcryptjs.hash(this.password);
  next();
});

userSchema.methods.isPasswordCorrect = async function (password) {
  return bcryptjs.compare(password, this.password);
};

userSchema.methods.generateAccessToken = function () {
  return jwt.sign(
    {
      _id: this._id,
      fullName: this.fullName,
      userName: this.userName,
      email: this.email,
      password: this.password,
    },
    process.env.ACCESS_TOKEN_SECRET,
    { expiresIn: process.env.ACCESS_TOKEN_EXPIRY }
  );
};

userSchema.methods.generateRefreshToken = function () {
  return jwt.sign(
    {
      _id: this._id,
    },
    process.env.REFRESH_TOKEN_SECRET,
    { expiresIn: process.env.REFRESH_TOKEN_EXPIRY }
  );
};

export const User =
  mongoose.models.users || new mongoose.model("users", userSchema);
