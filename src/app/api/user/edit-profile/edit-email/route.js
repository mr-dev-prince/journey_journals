import { User } from "@/models/user.model";
import { parse } from "cookie";
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { sendEmail } from "@/utils/sendEmail";

export const POST = async (req) => {
  try {
    const reqBody = await req.json();
    const { newEmail } = reqBody;
    const cookie = parse(req.headers?.get("cookie"));
    const token = cookie.accessToken;

    if (!token) {
      return NextResponse.json({
        success: false,
        status: 400,
        message: "Unauthorized request...",
      });
    }

    const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);

    if (!decodedToken) {
      return NextResponse.json({
        success: false,
        status: 400,
        message: "Invalid Token...",
      });
    }

    const updatedUser = await User.findByIdAndUpdate(
      decodedToken._id,
      {
        $set: {
          email: newEmail,
          isVerified: false,
        },
      },
      {
        new: true,
      }
    );

    const mailResponse = await sendEmail({
      email: newEmail,
      emailType: "verify",
      userId: updatedUser._id,
    });

    return NextResponse.json({
      success: true,
      status: 200,
      message: "Email updated successfully! Please verify updated email!",
      data: mailResponse,
    });
  } catch (error) {
    return NextResponse.json({
      success: false,
      status: 500,
      message: "Error while changing the email!",
      error: error.message,
    });
  }
};
