import type { Metadata } from "next";
import "./styles/globals.scss";
import { MainNavigation } from "@/app/components/mainNavigation/MainNavigation";
import { fontRoom } from "@/app/styles/fonts";
import { StaticNoise } from "@/app/components/StaticNoise/StaticNoise";
import { Inter, IBM_Plex_Mono } from "next/font/google";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const metadata: Metadata = {
  title: "Lucio Seta - Dancer | Teacher | Choreographer",
  description:
    'He is a dancer/performer/teacher from Buenos Aires Argentina, based in Berlin, with a background in Breaking and Contemporary Dance. Starting as a performer and educator with the company "Fuera de Foco Crew" in Argentina, his artistic path brought him to Berlin where he is currently working as a dancer and choreographer on projects such as “Wolf im Schafspelz” directed by Viola Mikolasch, “Cleo” (directed by Lior Shneior) "UPDOWNDOWNSTAIRS" (directed by Karin Wickenhaeuser), “State of Joint” (own production), and others. Recently he has presented his dance solo “Unlocked” at Expedition Metropolis Theater. Furthermore, the somatic practices (Particulary Klein Technique) are part of his regular movement investigation. With the Berlin Moves Project, in addition to acting, he collaborates as a teacher giving his dance method EXPERIMENTAL LAB with Naja Parejas, which also works regularly. And on the last year with Sofia Seta (who also gives classes/workshops together) they have created the dance collective "Out of Whack".',
};

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const ibm = IBM_Plex_Mono({
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-ibm",
});

gsap.registerPlugin(ScrollTrigger);

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${ibm.variable} ${fontRoom.variable}`}
      >
        <MainNavigation></MainNavigation>
        <StaticNoise />
        {children}
      </body>
    </html>
  );
}
