import { Inter } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";
import { Providers } from "./providers";
import { FloatingNavBar } from "@/components/Common/FloatingHeader";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Wanderer's Wallet",
  description: "Full-Stack interactive travel diary.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={inter.className}>
        <Providers>
          <FloatingNavBar />
          <main>{children}</main>
        </Providers>
      </body>
    </html>
  );
}
