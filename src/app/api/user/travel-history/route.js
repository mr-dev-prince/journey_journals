import { parse } from "cookie";
import { NextResponse } from "next/server";
import { TravelHistory } from "@/models/travelHistory.model.js";
import { connectDb } from "@/db/connectDb";
import { jwtVerify } from "@/utils/jwtVerification";

connectDb();

export const POST = async (req) => {
  try {
    const reqBody = await req.json();
    const { date, destination, activities, memories } = reqBody;

    const getToken = parse(req.headers?.get("cookie"));

    const token = getToken.accessToken;

    const userId = await jwtVerify(token);

    const response = await TravelHistory.create({
      userId,
      date,
      destination,
      activities,
      memories,
    });

    return NextResponse.json({
      success: true,
      status: 200,
      message: "Travel history updated successfully....",
      data: response,
    });
  } catch (error) {
    return NextResponse.json({
      success: false,
      status: 500,
      message: "Error while updating travel history....",
      error: error?.message,
    });
  }
};
