import jwt from "jsonwebtoken";

export const jwtVerify = async (token) => {
  try {
    const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);

    if (!decodedToken) {
      throw new Error("Invalid Token");
    }

    const userId = decodedToken?._id;

    if (!userId) {
      throw new Error("UserID not found....");
    }

    return userId;
  } catch (error) {
    return error;
  }
};
