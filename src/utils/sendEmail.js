import nodemailer from "nodemailer";
import bcryptjs from "bcryptjs";
import { User } from "@/models/user.model";

export const sendEmail = async ({ email, emailType, userId }) => {
  try {
    const hashedToken = await bcryptjs.hash(userId.toString(), 10);

    if (emailType === "verify") {
      await User.findByIdAndUpdate(
        userId,
        {
          verifyToken: hashedToken,
          verifyTokenExpiry: Date.now() + 3600000,
        },
        { new: true, runValidators: true }
      );
    } else if (emailType === "reset") {
      await User.findByIdAndUpdate(
        userId,
        {
          forgetPasswordToken: hashedToken,
          forgetPasswordTokenExpiry: Date.now() + 3600000,
        },
        { new: true, runValidators: true }
      );
    }

    var transport = nodemailer.createTransport({
      host: "sandbox.smtp.mailtrap.io",
      port: 2525,
      auth: {
        user: process.env.USER,
        pass: process.env.PASS,
      },
    });

    const mailOptions = {
      from: "prince@gmail.com",
      to: email,
      subject:
        emailType === "verify" ? "Verify your email!" : "Reset your password!",
      html: `<p> Click <a href="${process.env.DOMAIN}/api/user/${
        emailType === "verify" ? "verifyemail" : "/forgotpassword/changepassword"
      }?token=${hashedToken}"> here </a> to ${
        emailType === "verify" ? "Verify your email!" : "Reset your password"
      } </p> `,
    };

    const mailResponse = await transport.sendMail(mailOptions);
    return {
      success: true,
      message: "Mail sent to the email successfully",
      data: mailResponse.accepted,
    };
  } catch (error) {
    return Error(error?.message);
  }
};
