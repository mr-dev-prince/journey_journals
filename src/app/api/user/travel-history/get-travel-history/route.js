import { parse } from "cookie";
import { NextResponse } from "next/server";
import { TravelHistory } from "@/models/travelHistory.model";
import { jwtVerify } from "@/utils/jwtVerification";

export const GET = async (req) => {
  try {
    const getToken = parse(req.headers?.get("cookie"));
    const token = getToken?.accessToken;

    const userId = await jwtVerify(token);

    const travelHistory = await TravelHistory.find({ userId: userId });

    return NextResponse.json({
      success: true,
      status: 200,
      message: "Travel history is fetched...",
      data: travelHistory,
    });
  } catch (error) {
    return NextResponse.json({
      success: true,
      status: 500,
      message: "Couldn't fetch your travel history....",
      error: error?.message,
    });
  }
};
