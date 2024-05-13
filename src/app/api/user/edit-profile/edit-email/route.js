import { User } from "@/models/user.model";
import { parse } from "cookie";
import { NextResponse } from "next/server";
import { sendEmail } from "@/utils/sendEmail";
import { jwtVerify } from "@/utils/jwtVerification";

export const POST = async (req) => {
  try {
    const reqBody = await req.json();
    const { newEmail } = reqBody;
    const cookie = parse(req.headers?.get("cookie"));
    const token = cookie.accessToken;

    const userId = await jwtVerify(token);
    const updatedUser = await User.findByIdAndUpdate(
      userId,
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
