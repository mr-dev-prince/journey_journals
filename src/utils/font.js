import { Roboto, DM_Serif_Text } from "next/font/google";

const roboto_init = Roboto({
  subsets: ["latin"],
  weight: ["300", "500", "700"],
});

const dm_serif_init = DM_Serif_Text({
  subsets: ["latin"],
  weight: ["400"],
});

export const roboto = roboto_init.className;
export const dmSerif = dm_serif_init.className;
