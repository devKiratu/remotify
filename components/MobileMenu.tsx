import Image from "next/image";
import closeIcon from "../public/img/icon-close-menu.svg";
import arrowDown from "../public/img/icon-arrow-down.svg";
import arrowUp from "../public/img/icon-arrow-up.svg";

interface MobileMenuProps {
  onCloseMenu: () => void;
}

export default function MobileMenu({ onCloseMenu }: MobileMenuProps) {
  return (
    <div className="fixed top-0 left-0 h-full w-full bg-lighterBlack/70">
      <div className="w-60 h-full bg-whitish fixed right-0 p-6">
        <Image
          src={closeIcon}
          alt=""
          onClick={() => onCloseMenu()}
          className="cursor-pointer relative left-[185px]"
        />
        <div className="pt-6 text-xs">
          <ul>
            <li className="pb-4">
              Features{" "}
              <Image src={arrowDown} alt="" className="inline-block ml-2" />
            </li>
            <li className="pb-4">
              Company{" "}
              <Image src={arrowDown} alt="" className="inline-block ml-2" />
            </li>
            <li className="pb-4">Careers</li>
            <li className="pb-4">About</li>
          </ul>
          <div className="flex flex-col justify-center items-center">
            <button className="block my-2">Login</button>
            <button className="block my-2 py-2 px-4 border-2 border-mediumGray rounded-xl w-full">
              Register
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
