import { Inter } from "next/font/google";
import { Providers } from "../providers";
import "../globals.css";
import { roboto } from "@/utils/font";
import Header from "@/components/Common/Header";
import { BackGroundAurora } from "@/components/bucketlist/BackGroundAurora";
import CustomModal from "@/components/bucketlist/CustomModal";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Destinations",
  description: "Full-Stack interactive travel diary.",
};

export default function RootLayout({ children }) {

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>
          <main className={`h-screen w-full select-none relative ${roboto}`}>
            <CustomModal />
            <BackGroundAurora />
            <Header className={"fixed top-0 bg-transparent"} />
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}
