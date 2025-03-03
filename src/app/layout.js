import localFont from "next/font/local";
import "./globals.css";
import { Rubik } from 'next/font/google'
import StoreProvider from "./StoreProvider";

const rubik = Rubik({
  variable: "--font-rubik",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={rubik.className}>
      <body>
        <StoreProvider>
          {children}
        </StoreProvider>
      </body>
    </html>
  );
}
