import localFont from "next/font/local";

export const fontTrajanPro = localFont({
  src: [
    {
      path: "../../../public/assets/fonts/TrajanPro-Bold.woff",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../../public/assets/fonts/TrajanPro-Regular.woff",
      weight: "400",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--font-trajan-pro",
  preload: true,
});

export const fontRoom = localFont({
  src: [
    {
      path: "../../../public/assets/fonts/Room-Medium.woff",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../../public/assets/fonts/Room-Light.woff",
      weight: "400",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--font-room",
  preload: true,
});
