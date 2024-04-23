import localFont from "next/font/local";

export const cascadia = localFont({
    src: [
      {
        path: "../public/fonts/CascadiaCode.woff2",
        weight: "500",
        style: "normal",
      },
      {
        path: "../public/fonts/CascadiaCodeItalic.woff2",
        weight: "400",
        style: "italic",
      },
  
      {
        path: "../public/fonts/CascadiaMono.woff2",
        weight: "700",
        style: "mono",
      },
    ],
  });