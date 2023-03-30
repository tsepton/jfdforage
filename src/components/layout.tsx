import NavBar from "@/components/navbar";
import FooterM from "@/components/footer";
import Head from "next/head";

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
        <div className="flex-1 text-center">{props.children} </div>
        <FooterM className="flex-none"></FooterM>
      </main>
    </>
  );
}
