import { connectDb } from "@/db/connectDb.js";
import { User } from "@/models/user.model";
import jwt from "jsonwebtoken";
import { parse } from "cookie";
import { NextResponse } from "next/server";

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

    if (!token)
      return NextResponse.json({
        success: false,
        status: 400,
        message: "Unauthorized request!",
      });

    const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);

    await User.findByIdAndUpdate(
      decodedToken._id,
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
