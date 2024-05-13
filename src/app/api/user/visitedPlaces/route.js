import { connectDb } from "@/db/connectDb";
import { VisitedPlaces } from "@/models/visitedPlaces.model.js";
import { parse } from "cookie";
import { NextResponse } from "next/server";
import { jwtVerify } from "@/utils/jwtVerification";

connectDb();

export const POST = async (req) => {
  try {
    const reqBody = await req.json();
    const { placeName, date } = reqBody;

    const getToken = parse(req.headers?.get("cookie"));

    const token = getToken.accessToken;

    const userId = await jwtVerify(token);

    const response = await VisitedPlaces.create({
      userId,
      placeName,
      date,
    });

    return NextResponse.json({
      success: false,
      status: 200,
      message: "Successfully saved visited place...",
      data: response,
    });
  } catch (error) {
    return NextResponse.json({
      success: false,
      status: 500,
      message: "Something went wrong while updating visitedplaces...",
      error: error?.message,
    });
  }
};
