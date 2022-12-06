import Image from "next/image";
import heroImageSmall from "../public/img/image-hero-mobile.png";
import heroImageLarge from "../public/img/image-hero-desktop.png";
import audiophile from "../public/img/client-audiophile.svg";
import databiz from "../public/img/client-databiz.svg";
import maker from "../public/img/client-maker.svg";
import meet from "../public/img/client-meet.svg";

export default function Hero() {
  return (
    <section className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:gap-10 lg:w-4/5 mx-auto md:mt-10 xl:mt-10">
      <div className="md:order-2">
        <div className="md:hidden xs:w-3/4 sm:w-3/5 m-auto">
          <Image src={heroImageSmall} alt="" />
        </div>
        <div className="hidden md:block w-2/3 xl:w-8/12 mx-auto">
          <Image src={heroImageLarge} alt="" />
        </div>
      </div>
      <div className="px-4 md:px-2 md:pr-0 lg:px-4 text-center flex flex-col justify-end items-center xs:w-4/5 xs:mx-auto md:items-start md:text-left lg:w-full xl:ml-6">
        <h1 className="text-lighterBlack text-3xl font-bold md:text-4xl xl:text-6xl ">
          Make <span className="md:block">remote work</span>
        </h1>
        <p className="text-sm my-3 md:my-8 xl:my-10 xl:w-4/5">
          Get your team in sync, no matter your location. Streamline processes,
          create team rituals, and watch productivity soar.
        </p>
        <button className="px-5 py-3 bg-lighterBlack text-whitish rounded-xl text-xs my-2">
          Learn more
        </button>
        <div className="flex justify-between items-center my-7  w-full xl:w-4/5 xl:mt-16 md:mb-0">
          <Image src={databiz} alt="" width={70} />
          <Image src={audiophile} alt="" width={45} />
          <Image src={meet} alt="" width={60} />
          <Image src={maker} alt="" width={60} />
        </div>
      </div>
    </section>
  );
}
