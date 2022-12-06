import { Menu } from "@headlessui/react";
import Image from "next/image";
import { DropDownMenuItems } from "../utils/data";
import ArrowDown from "./icons/ArrowDown";
import ArrowUp from "./icons/ArrowUp";

interface DropDownProps {
  data: DropDownMenuItems;
}

export default function Dropdown({ data }: DropDownProps) {
  return (
    <Menu as={"div"} className="md:inline-block md:relative">
      <Menu.Button className="hover:text-lighterBlack focus:text-lighterBlack">
        {({ open }) =>
          open ? (
            <span className="text-lighterBlack">
              {data.title}
              <ArrowUp />
            </span>
          ) : (
            <span className="focus:text-lighterBlack hover:text-lighterBlack">
              {data.title}
              <ArrowDown />
            </span>
          )
        }
      </Menu.Button>
      <Menu.Items
        as="div"
        className={`lg:bg-whitish rounded-[10px] lg:p-3 p-2 pb-0 overflow-hidden w-max h-fit lg:absolute lg:top-5 ${
          data.items[0].icon ? "right-0" : ""
        } lg:z-50 lg:shadow-[0_0_50px_-12px_rgb(0,0,0,0.25)]`}
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
