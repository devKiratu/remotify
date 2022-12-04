import Image from "next/image";
import heroImageSmall from "../public/img/image-hero-mobile.png";
import heroImageLarge from "../public/img/image-hero-desktop.png";
import audiophile from "../public/img/client-audiophile.svg";
import databiz from "../public/img/client-databiz.svg";
import maker from "../public/img/client-maker.svg";
import meet from "../public/img/client-meet.svg";

export default function Hero() {
  return (
    <section className="grid grid-cols-1 gap-8 xl:grid-cols-2 xl:gap-10 xl:w-4/5 mx-auto xl:mt-10">
      <div className="xl:order-2">
        <div className="xl:hidden">
          <Image src={heroImageSmall} alt="" />
        </div>
        <div className="hidden xl:block xl:w-8/12 mx-auto">
          <Image src={heroImageLarge} alt="" />
        </div>
      </div>
      <div className="px-4 text-center flex flex-col justify-end items-center xl:items-start xl:text-left xl:ml-8">
        <h1 className="text-lighterBlack text-3xl font-bold xl:text-6xl ">
          Make <span className="xl:block">remote work</span>
        </h1>
        <p className="text-sm my-3 xl:my-10 xl:w-4/5">
          Get your team in sync, no matter your location. Streamline processes,
          create team rituals, and watch productivity soar.
        </p>
        <button className="px-5 py-3 bg-lighterBlack text-whitish rounded-xl text-xs my-2">
          Learn more
        </button>
        <div className="flex justify-between items-center my-7  w-full xl:w-4/5 xl:mt-16 xl:mb-0">
          <Image src={databiz} alt="" width={70} />
          <Image src={audiophile} alt="" width={45} />
          <Image src={meet} alt="" width={60} />
          <Image src={maker} alt="" width={60} />
        </div>
      </div>
    </section>
  );
}
