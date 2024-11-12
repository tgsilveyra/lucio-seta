import type { Metadata } from "next";
import "./styles/globals.scss";
import { MainNavigation } from "@/app/components/mainNavigation/MainNavigation";
import { fontRoom, fontTrajanPro } from "@/app/styles/fonts";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${fontTrajanPro.variable} ${fontRoom.variable}`}>
        <MainNavigation></MainNavigation>
        {children}
      </body>
    </html>
  );
}
