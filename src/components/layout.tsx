import NavBar from "@/components/navbar";
import FooterM from "@/components/footer";
import Head from "next/head";
import React, { useState, useEffect } from 'react';

export default function Layout(props: any) {
  return (
    <>
      <Head>
        <title>JFD forage</title>
        <meta name="description" content="JFD forage géothermique - Belgique" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/img/logo-squared.jpg" />
      </Head>
      <main className="flex h-screen flex-col">
        <NavBar className="flex-none"></NavBar>
        <NavBarFiller className="flex-none" />
        <div className="flex-1 text-center">{props.children} </div>
        <FooterM className="flex-none"></FooterM>
      </main>
    </>
  );
}


function NavBarFiller(props: any) {
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (!process.env.navbarId) throw new Error("No navbar id. Check next config file for the navbarId variable.");
    const navbarRef = document.getElementById(process.env.navbarId);
    if (!navbarRef) throw new Error("No nabbar element. Did you forget to include it inside the project?");
    setHeight(navbarRef.clientHeight);
  }, []);

  return (
    <div className={props.className} style={{ height: height }}>salut</div>
  );
};
