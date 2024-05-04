import { Roboto_Mono } from "next/font/google";
import "./globals.css";
import { HeroContextProvider } from "@/utils/contextProvider";
import SmoothScrolling from "@/components/SmoothScrolling";
const roboto = Roboto_Mono({ weight: "400", subsets: ["latin"] });

export const metadata = {
  title: "ScriptersHub Pvt. Ltd.",
  description:
    "Scripters Hub PvtLtd is a leading digital marketing agency empowering businesses in the digital landscape. Our data-driven strategies adapt to the evolving digital ecosystem. Our services encompass Software Solutions, design development, and digital marketing. ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${roboto.className} `}>
        <SmoothScrolling>
          <HeroContextProvider>{children}</HeroContextProvider>
        </SmoothScrolling>
      </body>
    </html>
  );
}
