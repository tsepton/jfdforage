import NavBar from "@/components/navbar";
import FooterM from "@/components/footer";
import Head from "next/head";
import React from "react";

export default function Layout(props: any) {
  return (
    <>
      <Head>
        <title>JFD forage</title>
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
      <main className="flex h-auto flex-col">
        <NavBar className="flex-1"></NavBar>
        <div className="flex-1 text-center">{props.children} </div>
        <FooterM className="flex-none"></FooterM>
      </main>
    </>
  );
}
