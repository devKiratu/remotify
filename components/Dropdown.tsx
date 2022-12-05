import { Menu } from "@headlessui/react";
import Image from "next/image";
import arrowDown from "../public/img/icon-arrow-down.svg";
import arrowUp from "../public/img/icon-arrow-up.svg";

export default function Dropdown() {
  return (
    <Menu as={"div"} className="inline-block relative">
      <Menu.Button>
        {({ open }) =>
          open ? (
            <>
              Company
              <Image src={arrowUp} alt="" className="inline-block ml-2 " />
            </>
          ) : (
            <>
              Company
              <Image src={arrowDown} alt="" className="inline-block ml-2 " />
            </>
          )
        }
      </Menu.Button>
      <Menu.Items
        as="div"
        className="bg-white rounded-[10px] p-3 overflow-hidden w-max h-fit absolute top-5 shadow-[0_0_50px_-12px_rgb(0,0,0,0.25)]"
      >
        <Menu.Item>
          {({ active }) => (
            <a
              href="#"
              className={`w-full p-2 flex justify-start items-center`}
            >
              History
            </a>
          )}
        </Menu.Item>
        <Menu.Item>
          {({ active }) => (
            <a
              href="#"
              className={`w-full p-2 flex justify-start items-center`}
            >
              Our Team
            </a>
          )}
        </Menu.Item>
        <Menu.Item>
          {({ active }) => (
            <a
              href="#"
              className={`w-full p-2 flex justify-start items-center`}
            >
              Blog
            </a>
          )}
        </Menu.Item>
      </Menu.Items>
    </Menu>
  );
}
