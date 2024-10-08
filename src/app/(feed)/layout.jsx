import { Inter } from "next/font/google";
import { Providers } from "../providers";
import "../globals.css";
import Sidebar from "./components/Sidebar";
import { roboto } from "@/utils/font";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Journey Journals Feed",
  description: "Full-Stack interactive travel diary.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>
          <main className={`h-screen w-full md:px-32 flex gap-[17rem] select-none ${roboto}`}>
            <Sidebar />
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}
