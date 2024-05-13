import { parse } from "cookie";
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { User } from "@/models/user.model";
import { jwtVerify } from "@/utils/jwtVerification";

export const GET = async (req) => {
  try {
    const getCookie = parse(req.headers?.get("cookie"));

    const token = getCookie.accessToken;

    const userId = await jwtVerify(token);

    const user = await User.findById(userId).select("-password -refreshToken");

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
