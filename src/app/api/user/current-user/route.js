import { parse } from "cookie";
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { User } from "@/models/user.model";

export const GET = async (req) => {
  try {
    const getCookie = parse(req.headers?.get("cookie"));

    const token = getCookie.accessToken;

    if (!token)
      return NextResponse.json({
        success: false,
        status: 400,
        message: "Unauthorized Request",
      });

    const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);

    const user = await User.findById(decodedToken._id).select(
      "-password -refreshToken"
    );

    if (!user)
      return NextResponse.json({
        success: false,
        status: 404,
        message: "User not found!",
      });

    return NextResponse.json({
      success: true,
      status: 200,
      message: "User Fetched!",
      user,
    });
  } catch (error) {
    return NextResponse.json({
      success: false,
      status: 500,
      message: "Fetching user failed!",
      data: error,
    });
  }
};
