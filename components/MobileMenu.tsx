import Image from "next/image";
import closeIcon from "../public/img/icon-close-menu.svg";
import Dropdown from "./Dropdown";
import { company, features } from "../utils/data";

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
          className="cursor-pointer relative left-[190px]"
        />
        <div className="mt-9 text-xs">
          <ul>
            <li className="pb-4">
              <Dropdown data={features} />
            </li>
            <li className="pb-4">
              <Dropdown data={company} />
            </li>
            <li className="pb-4 ">
              <a
                href="#"
                className="focus:text-lighterBlack hover:text-lighterBlack"
              >
                Careers
              </a>
            </li>
            <li className="pb-4 ">
              <a
                href="#"
                className="focus:text-lighterBlack hover:text-lighterBlack"
              >
                About
              </a>
            </li>
          </ul>
          <div className="flex flex-col justify-center items-center mt-2">
            <button className="block my-2 hover:text-lighterBlack focus:text-lighterBlack">
              Login
            </button>
            <button className="block my-2 py-2 px-4 border-2 border-mediumGray rounded-xl w-full hover:border-lighterBlack hover:text-lighterBlack focus:text-lighterBlack">
              Register
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
