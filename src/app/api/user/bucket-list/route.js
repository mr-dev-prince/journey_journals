import { connectDb } from "@/db/connectDb";
import { BucketList } from "@/models/bucketList.model.js";
import { jwtVerify } from "@/utils/jwtVerification";
import { parse } from "cookie";
import { NextResponse } from "next/server";

connectDb();

export const POST = async (req) => {
  try {
    const reqBody = await req.json();

    const { destination, expectedDate } = reqBody;

    const getToken = parse(req.headers?.get("cookie"));

    const token = getToken?.accessToken;

    const userId = await jwtVerify(token);

    const response = await BucketList.create({
      userId,
      destination,
      expectedDate,
    });

    return NextResponse.json({
      success: true,
      status: 200,
      message: "Successfully added in Bucket List...",
      data: response,
    });
  } catch (error) {
    return NextResponse.json({
      success: false,
      status: 500,
      message: "Error uploading bucket list...",
      error: error?.message,
    });
  }
};
