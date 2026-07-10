import { ReactNode } from "react";
import NavBar from "./navbar";
import Footer from "./footer";
import Seo from "./seo";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Seo />
      <NavBar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
