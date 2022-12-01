import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Remotify 🚀</title>
        <meta name="description" content="Make remote work!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className="text-3xl font-bold underline text-mediumGray">
          Remotify! Make Remote Work!
        </h1>
      </main>
    </div>
  );
}
