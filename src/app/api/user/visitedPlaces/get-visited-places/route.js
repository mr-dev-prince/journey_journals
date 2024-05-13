import { parse } from "cookie";
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { VisitedPlaces } from "@/models/visitedPlaces.model";
import { jwtVerify } from "@/utils/jwtVerification";

export const GET = async (req) => {
  try {
    const getToken = parse(req.headers?.get("cookie"));

    const token = getToken.accessToken;

    const userId = await jwtVerify(token);

    const visitedPlaces = await VisitedPlaces.find({ userId: userId });

    return NextResponse.json({
      success: true,
      status: 200,
      message: "Visited Places list is fetched successfully....",
      data: visitedPlaces,
    });
  } catch (error) {
    return NextResponse.json({
      success: false,
      status: 500,
      message: "Couldn't fetch your visisted places list....",
      data: null,
    });
  }
};
