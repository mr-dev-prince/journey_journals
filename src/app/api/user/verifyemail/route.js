import { connectDb } from "@/db/connectDb.js";
import { NextResponse } from "next/server";
import { User } from "@/models/user.model";

connectDb();

export const GET = async (req) => {
  try {
    const params = new URLSearchParams(req.url);
    const [[key, token]] = params;

    if (!token) {
      return NextResponse.json({
        success: false,
        status: 400,
        message: "Invalid URL",
        data: null,
      });
    }

    const user = await User.findOne({
      verifyToken: token,
      verifyTokenExpiry: { $gt: Date.now() },
    });

    if (!user) {
      return NextResponse.json({
        success: false,
        status: 400,
        message: "Invalid Token",
      });
    }

    user.isVerified = true;
    user.verifyToken = undefined;
    user.verifyTokenExpiry = undefined;
    await user.save();

    return NextResponse.json({
      success: true,
      status: 200,
      message: "Email verified successfully",
    });
  } catch (error) {
    return NextResponse.json({
      success: false,
      status: 500,
      message: "Error while verifying email",
      error: error.message,
    });
  }
};
