import Image from "next/image";
import logo from "../public/img/logo.svg";
import menuIcon from "../public/img/icon-menu.svg";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center py-6 px-4">
      <div>
        <Link href={"/"}>
          <Image src={logo} alt="" />
        </Link>
      </div>
      <div>
        <Image src={menuIcon} alt="" className="cursor-pointer" />
      </div>
    </nav>
  );
}
