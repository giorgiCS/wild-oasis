import Logo from "@/app/_components/Logo";
import Navigation from "@/app/_components/Navigation";
import { Josefin_Sans } from "next/font/google";
import Header from "./_components/Header";
const josefin = Josefin_Sans({
  subsets: ["latin"],
  display: "swap"
});

import "@/app/_styles/globals.css";
export const metadata = {
  title: {
    template: "%s / The Wild Oasis",
    default: "Welcome / The Wild Oasis"
  },
  description:
    "Luxurious cabin hotel,located in the heart of the Italian Dolomites,sorrounded by beautiful mountains and dark forest"
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${josefin.className} antialiased bg-primary-900 text-blue-100 min-h-screen flex flex-col relative`}
      >
        <Header />
        <div className="flex-1 px-8 py-12 grid">
          <main className="max-w-7xl mx-auto w-full ">{children}</main>
        </div>
      </body>
    </html>
  );
}
