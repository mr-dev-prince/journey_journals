import { Inter } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "../globals.css";
import { Providers } from "../providers";
import { FloatingNavBar } from "@/components/Common/FloatingHeader";
import Footer from "@/components/Common/Footer";
import Header from "@/components/Common/Header";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Wanderer's Wallet",
  description: "Full-Stack interactive travel diary.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>
          <Header />
          <FloatingNavBar />
          <main>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
