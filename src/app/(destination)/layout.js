import { Inter } from "next/font/google";
import { Providers } from "../providers";
import "../globals.css";
import { roboto } from "@/utils/font";
import FilterBar from "@/components/Destination/FilterBar";
import Header from "@/components/Common/Header";

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
          <main
            className={`h-screen w-full  flex gap-[17rem] select-none ${roboto}`}
          >
            <Header className={"fixed top-0 bg-white dark:bg-black"} />
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}
