import { User } from "@/models/user.model.js";
import { NextResponse } from "next/server";
import bcryptjs from "bcryptjs";

export const POST = async (req) => {
  try {
    const reqBody = await req.json();
    const { newPassword } = reqBody;
    const params = new URLSearchParams(req.url);
    const [[key, token]] = params;

    const user = await User.findOne({
      forgetPasswordToken: token,
      forgetPasswordTokenExpiry: { $gt: Date.now() },
    });

    if (!user) {
      return NextResponse.json({
        success: false,
        status: 400,
        message: "Invalid Token",
      });
    }

    const hashPassword = await bcryptjs.hash(newPassword, 10);

    user.password = hashPassword;
    user.forgetPasswordToken = undefined;
    user.forgetPasswordTokenExpiry = undefined;

    return NextResponse.json({
      success: true,
      status: 200,
      message: "Password changed successfully...",
    });
  } catch (error) {
    return NextResponse.json({
      success: true,
      status: 500,
      message: "Couldn't change your password!",
      error: error?.message,
    });
  }
};
