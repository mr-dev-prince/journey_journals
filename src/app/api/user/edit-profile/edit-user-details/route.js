import { parse } from "cookie";
import { NextResponse, NextRequest } from "next/server";
import jwt from "jsonwebtoken";
import { User } from "@/models/user.model";
import { connectDb } from "@/db/connectDb";
import { jwtVerify } from "@/utils/jwtVerification";

connectDb();

// editing username, fullname, dob
export const POST = async (req) => {
  try {
    const reqBody = await req.json();

    const { userName, fullName, dateOfBirth } = reqBody;

    const getToken = parse(req.headers?.get("cookie"));

    const token = getToken.accessToken;

    const userId = await jwtVerify(token);

    const user = await User.findByIdAndUpdate(
      userId,
      {
        $set: {
          userName: userName,
          fullName: fullName,
          dateOfBirth: dateOfBirth,
        },
      },
      { new: true }
    );

    if (!user)
      return NextResponse.json({
        success: false,
        status: 400,
        message: "User not found!",
      });

    return NextResponse.json({
      success: true,
      status: 200,
      message: "Details updated Successfully!",
      user,
    });
  } catch (error) {
    return NextResponse.json({
      success: false,
      status: 500,
      message: "Unable to edit profile!",
      error: error?.message,
    });
  }
};
