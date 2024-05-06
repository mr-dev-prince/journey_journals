import { connectDb } from "@/db/connectDb";
import { User } from "@/models/user.model.js";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";

connectDb();

const generateAcessAndRefreshToken = async (user) => {
  try {
    const accessToken = user.generateAccessToken();
    const refreshToken = user.generateRefreshToken();

    user.refreshToken = refreshToken;
    await user.save({ validateBeforeSave: false });

    return { accessToken, refreshToken };
  } catch (error) {
    throw NextResponse.json({
      success: false,
      status: 500,
      message: "Failed to generate tokens",
      error,
    });
  }
};

export const POST = async (NextRequest) => {
  try {
    // get user details -----> email &  password || userName & password
    // check for empty user value
    // check if user exists
    // check if password is correct
    // generate tokens
    // get the logged in user
    // give response

    const reqBody = await NextRequest.json();

    Object.entries(reqBody).forEach(([key, value]) => {
      reqBody[key] = value.trim();
    });

    let { email, userName, password } = reqBody;

    if (!(email || userName || password)) {
      return NextResponse.json({
        success: false,
        status: 400,
        message: "All fields are required!",
        data: null,
      });
    }

    const user = await User.findOne({ $or: [{ email }, { userName }] });

    if (!user) {
      return NextResponse.json({
        success: false,
        status: 404,
        message: "User not found",
        data: null,
      });
    }

    const isPasswordValid = await bcryptjs.compare(password, user.password);

    // const isPasswordValid = await user.isPasswordCorrect(password);

    console.log("check", isPasswordValid);

    if (!isPasswordValid) {
      return NextResponse.json({
        success: false,
        status: 400,
        message: "Invalid Password!",
        data: null,
      });
    }

    const { accessToken, refreshToken } = await generateAcessAndRefreshToken(
      user
    );

    const loggedInUser = await User.findById(user._id).select(
      "-password -refreshToken"
    );

    const response = NextResponse.json({
      success: true,
      status: 200,
      message: "Login Successful",
      data: loggedInUser,
      accessToken: accessToken,
      refreshToken: accessToken,
    });

    const options = {
      httpOnly: true,
      secure: true,
    };

    response.cookies.set("accessToken", accessToken, options);
    response.cookies.set("refreshToken", refreshToken, options);

    return response;
  } catch (error) {
    return NextResponse.json({
      status: 500,
      success: false,
      message: "Error while logging the user",
      error: error,
    });
  }
};
