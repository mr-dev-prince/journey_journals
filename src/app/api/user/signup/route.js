import { connectDb } from "@/db/connectDb";
import { User } from "@/models/user.model";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import { sendEmail } from "@/utils/sendEmail";

connectDb();

export const POST = async (NextRequest) => {
  // get user details
  // check if any of the fields are empty
  // check if user already exists
  // hash password
  // create user

  try {
    const reqBody = await NextRequest.json();

    const { userName, fullName, email, password } = reqBody;

    if (userName === "" || fullName === "" || email === "" || password === "") {
      return NextResponse.json({
        status: 400,
        success: false,
        message: "All fields are required",
      });
    }

    const userExists = await User.findOne({ $or: [{ email }, { userName }] });

    if (userExists)
      return NextResponse.json({
        status: 400,
        success: false,
        message: "User with same name or email already exists",
      });

    const hashedPassword = await bcryptjs.hash(password, 10);

    const createdUser = await User.create({
      fullName,
      userName,
      email,
      password: hashedPassword,
    });

    const mail = await sendEmail({
      email,
      emailType: "verify",
      userId: createdUser._id,
    });

    return NextResponse.json({
      status: 201,
      success: true,
      message: "User created Successfully",
      data: createdUser,
      mail: mail,
      error: null,
    });
    
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: "Error while registering user",
      data: error,
      data: null,
    });
  }
};
