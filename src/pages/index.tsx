import Head from "next/head";
import NavBar from "@/components/navbar";

export default function Home() {
  return (
    <>
      <Head>
        <title>JFD forage</title>
        <meta name="description" content="JFD forage géothermique - Belgique" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/img/logo-squared.jpg" />
      </Head>
      <main>
        <NavBar></NavBar>
        <div>TODO</div>
      </main>
    </>
  );
}
