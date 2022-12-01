import Head from "next/head";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Remotify 🚀</title>
        <meta name="description" content="Make remote work!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="">
        <Navbar />
      </main>
    </div>
  );
}
