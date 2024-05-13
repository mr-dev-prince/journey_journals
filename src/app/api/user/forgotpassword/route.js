import { User } from "@/models/user.model";
import { NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import { sendEmail } from "@/utils/sendEmail";

export const POST = async (req) => {
  try {
    const reqBody = await req.json();

    const { email, userName } = reqBody;

    const user = await User.findOne({ $or: [{ email }, { userName }] });

    if (!user) {
      return NextResponse.json({
        success: false,
        status: 400,
        message: "Account not found....",
        data: null,
      });
    }

    const userEmail = user?.email || email;

    const mail = await sendEmail({
      userEmail,
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
      message: "Something went wrong....",
      error: error?.message,
    });
  }
};
