import Head from "next/head";
import { ReactNode } from "react";
import NavBar from "./navbar";
import Footer from "./footer";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Head>
        <title>JFD forage — Forage géothermique en Belgique &amp; Luxembourg</title>
        <meta
          name="description"
          content="JFD forage, entreprise spécialisée dans le forage géothermique en Belgique et au Luxembourg"
        />
        <meta
          name="keywords"
          content="JFD, jfdforage, géothermique, puit, forage, pompe à chaleur, géothermie, forage géothermique, géothermie verticale, chaleur du sol"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/img/logo-squared.webp" />
      </Head>
      <NavBar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
