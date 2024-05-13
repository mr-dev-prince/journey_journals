import { connectDb } from "@/db/connectDb";
import { uploadOnCloudinary } from "@/utils/uploadOnCloudinary";
import { parse } from "cookie";
import { NextResponse } from "next/server";
import { User } from "@/models/user.model";
import { jwtVerify } from "@/utils/jwtVerification";

connectDb();

export const POST = async (req) => {
  try {
    const getToken = parse(req.headers.get("cookie"));
    const token = getToken.accessToken;

    const userId = await jwtVerify(token);

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
      userId,
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
