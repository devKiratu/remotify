import { Menu } from "@headlessui/react";
import Image from "next/image";
import arrowDown from "../public/img/icon-arrow-down.svg";
import arrowUp from "../public/img/icon-arrow-up.svg";
import { DropDownMenuItems } from "../utils/data";

interface DropDownProps {
  data: DropDownMenuItems;
}

export default function Dropdown({ data }: DropDownProps) {
  return (
    <Menu as={"div"} className="inline-block relative z-50">
      <Menu.Button>
        {({ open }) =>
          open ? (
            <span className="text-lighterBlack">
              {data.title}
              <Image src={arrowUp} alt="" className="inline-block ml-2 " />
            </span>
          ) : (
            <span className="focus:text-lighterBlack hover:text-lighterBlack active:text-lighterBlack ">
              {data.title}
              <Image src={arrowDown} alt="" className="inline-block ml-2 " />
            </span>
          )
        }
      </Menu.Button>
      <Menu.Items
        as="div"
        className={`bg-whitish rounded-[10px] p-3 overflow-hidden w-max h-fit absolute top-5 ${
          data.items[0].icon ? "right-0" : ""
        } z-50 shadow-[0_0_50px_-12px_rgb(0,0,0,0.25)]`}
      >
        {data.items.map((item) => (
          <Menu.Item key={item.title}>
            {({ active }) => (
              <a
                href="#"
                className={`w-full p-2 flex justify-start items-center ${
                  active ? "text-lighterBlack" : ""
                }`}
              >
                {item.icon && <Image src={item.icon} alt="" className="mr-3" />}
                {item.title}
              </a>
            )}
          </Menu.Item>
        ))}
      </Menu.Items>
    </Menu>
  );
}
