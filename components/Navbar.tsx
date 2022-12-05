import Image from "next/image";
import logo from "../public/img/logo.svg";
import menuIcon from "../public/img/icon-menu.svg";
import Link from "next/link";
import Dropdown from "./Dropdown";
import { company, features } from "../utils/data";

interface NavbarProps {
  onOpenMenu: () => void;
}

export default function Navbar({ onOpenMenu }: NavbarProps) {
  return (
    <nav className="flex justify-between items-center py-6 px-4 md:px-10">
      <div>
        <Link href={"/"}>
          <Image src={logo} alt="" />
        </Link>
      </div>
      <div className="text-xs hidden md:block flex-grow">
        <ul className="flex justify-start ml-16 items-center">
          <li className="cursor-pointer mr-10">
            <Dropdown data={features} />
          </li>
          <li className="cursor-pointer mr-10 ">
            <Dropdown data={company} />
          </li>
          <li className="cursor-pointer mr-10 hover:text-lighterBlack focus:text-lighterBlack active:text-lighterBlack">
            Careers
          </li>
          <li className="cursor-pointer mr-10 hover:text-lighterBlack focus:text-lighterBlack active:text-lighterBlack">
            About
          </li>
        </ul>
      </div>
      <div className=" text-xs md:flex justify-between items-center hidden">
        <button className="block">Login</button>
        <button className="block py-2 px-4 border-2 border-mediumGray rounded-xl w-full ml-10">
          Register
        </button>
      </div>
      <div className="md:hidden">
        <Image
          src={menuIcon}
          alt=""
          className="cursor-pointer"
          onClick={() => onOpenMenu()}
        />
      </div>
    </nav>
  );
}
