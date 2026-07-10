import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Inter, Manrope } from "next/font/google";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-heading",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-sans",
  display: "swap",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div
      className={`${manrope.variable} ${inter.variable} font-sans bg-jfd-ground text-jfd-ink overflow-x-clip`}
    >
      <Component {...pageProps} />
    </div>
  );
}
