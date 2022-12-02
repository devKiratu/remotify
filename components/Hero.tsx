import Image from "next/image";
import heroImage from "../public/img/image-hero-mobile.png";
import audiophile from "../public/img/client-audiophile.svg";
import databiz from "../public/img/client-databiz.svg";
import maker from "../public/img/client-maker.svg";
import meet from "../public/img/client-meet.svg";

export default function Hero() {
  return (
    <section>
      <div>
        <Image src={heroImage} alt="" />
      </div>
      <div className="px-4 py-7 text-center">
        <h1 className="text-lighterBlack text-3xl font-bold">
          Make remote work
        </h1>
        <p className="text-sm my-3 ">
          Get your team in sync, no matter your location. Streamline processes,
          create team rituals, and watch productivity soar.
        </p>
        <button className="px-5 py-3 bg-lighterBlack text-whitish rounded-xl text-xs my-2">
          Learn more
        </button>
        <div className="flex justify-between items-center my-7">
          <Image src={databiz} alt="" width={70} />
          <Image src={audiophile} alt="" width={45} />
          <Image src={meet} alt="" width={60} />
          <Image src={maker} alt="" width={60} />
        </div>
      </div>
    </section>
  );
}
