import { connectDb } from "@/db/connectDb";
import { uploadOnCloudinary } from "@/utils/uploadOnCloudinary";
import { parse } from "cookie";
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { User } from "@/models/user.model";

connectDb();

export const POST = async (req) => {
  try {
    const getToken = parse(req.headers.get("cookie"));
    const token = getToken.accessToken;

    if (!token) {
      return NextResponse.json({
        success: false,
        status: 400,
        message: "Unauthorized request",
        data: null,
      });
    }

    const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);

    if (!decodedToken) {
      return NextResponse.json({
        success: false,
        status: 400,
        message: "Invalid Accesstoken",
        data: null,
      });
    }

    const formData = await req.formData();

    const avatar = formData.get("avatar");

    if (!avatar) {
      return NextResponse.json({
        success: false,
        status: 404,
        message: "Avatar not found...",
        data: null,
      });
    }

    const uploadResponse = await uploadOnCloudinary(
      avatar,
      "wandererwallet-avatars"
    );

    const user = await User.findByIdAndUpdate(
      decodedToken._id,
      {
        $set: {
          avatar: uploadResponse.url,
        },
      },
      { new: true }
    );

    return NextResponse.json({
      success: true,
      status: 200,
      message: "Avatar uploaded successfully",
      data: user,
    });
  } catch (error) {
    return NextResponse.json({
      success: false,
      status: 500,
      message: "Couldn't Update avatar!",
      error: error?.message,
    });
  }
};
