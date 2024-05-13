import { connectDb } from "@/db/connectDb.js";
import { User } from "@/models/user.model";
import jwt from "jsonwebtoken";
import { parse } from "cookie";
import { NextResponse } from "next/server";
import { jwtVerify } from "@/utils/jwtVerification";

connectDb();

export const GET = async (req) => {
  try {
    const response = NextResponse.json({
      success: true,
      status: 200,
      message: "Logout Successful",
    });

    const getCookie = parse(req.headers?.get("cookie"));
    const token = getCookie.accessToken;

    const userId = await jwtVerify(token);

    await User.findByIdAndUpdate(
      userId,
      {
        $unset: {
          refreshToken: 1,
        },
      },
      { new: true }
    );

    const options = {
      httpOnly: true,
      secure: true,
      expires: new Date(0),
    };

    response.cookies
      .set("accessToken", "", options)
      .set("refreshToken", "", options);

    return response;
  } catch (error) {
    return NextResponse.json({
      success: false,
      status: 500,
      message: "Error while logging out the user",
      error: error,
    });
  }
};
