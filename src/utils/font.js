import { Roboto } from "next/font/google";

const roboto_init = Roboto({
  subsets: ["latin"],
  weight: ["300", "500", "700"],
});

export const roboto = roboto_init.className;
