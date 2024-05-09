import { User } from "@/models/user.model";
import { NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import { sendEmail } from "@/utils/sendEmail";

export const POST = async (req) => {
  try {
    const reqBody = await req.json();

    const { email, userName } = reqBody;

    const user = await User.findOne({ $or: [{ email }, { userName }] });

    const mail = await sendEmail({
      email,
      emailType: "reset",
      userId: user._id,
    });

    return NextResponse.json({
      success: true,
      status: 200,
      message: "A mail is sent to your email to change your password",
      data: mail,
    });
  } catch (error) {
    return NextResponse.json({
      success: false,
      status: 500,
      message: "Error in forgot password api",
      error: error?.message,
    });
  }
};
