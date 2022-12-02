import Head from "next/head";
import Navbar from "../components/Navbar";
import { useState } from "react";
import MobileMenu from "../components/MobileMenu";
import Hero from "../components/Hero";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const openMenu = () => {
    setMenuOpen(true);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div>
      <Head>
        <title>Remotify 🚀</title>
        <meta name="description" content="Make remote work!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="">
        {menuOpen && <MobileMenu onCloseMenu={closeMenu} />}
        <Navbar onOpenMenu={openMenu} />
        <Hero />
      </main>
    </div>
  );
}
