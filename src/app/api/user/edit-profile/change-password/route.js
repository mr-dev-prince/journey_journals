import { parse } from "cookie";
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import bcryptjs from "bcryptjs";
import { User } from "@/models/user.model.js";

export const POST = async (req) => {
  try {
    const reqBody = await req.json();
    const { oldPassword, newPassword } = reqBody;
    const getToken = parse(req.headers?.get("cookie"));

    const token = getToken.accessToken;

    if (!token) {
      return NextResponse.json({
        success: false,
        status: 400,
        message: "Unauthorized Request",
        error: error?.message,
      });
    }

    const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);

    if (!decodedToken) {
      return NextResponse.json({
        success: false,
        status: 400,
        message: "Invalid token...",
        error: error?.message,
      });
    }

    const user = await User.findById(decodedToken._id);

    const isPasswordValid = await bcryptjs.compare(oldPassword, user.password);

    if (!isPasswordValid) {
      return NextResponse.json({
        success: false,
        status: 400,
        message: "Wrong Password",
        error: error?.message,
      });
    }

    const hashPassword = await bcryptjs.hash(newPassword, 10);

    user.password = hashPassword;

    await user.save();

    return NextResponse.json({
      success: true,
      status: 200,
      message: "Password successfully changed!",
    });
  } catch (error) {
    return NextResponse.json({
      success: false,
      status: 500,
      message: "Something went wrong",
      error: error?.message,
    });
  }
};
