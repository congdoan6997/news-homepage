"use client";
import Image from "next/image";
import React from "react";
const links = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "New",
    path: "/new",
  },
  {
    name: "Popular",
    path: "/popular",
  },
  {
    name: "Trending",
    path: "/trending",
  },
  {
    name: "Categories",
    path: "/categories",
  },
];
function NavRight({ isOpen, setIsOpen }: { isOpen: boolean; setIsOpen: any }) {
  return (
    <div
      className={`absolute top-0 right-0 md:hidden w-full h-screen z-40 ${
        isOpen ? "flex" : "hidden"
      } justify-end`}
    >
      <nav className={`bg-neutral-50 w-2/3 h-screen`}>
        <div className="relative">
          <Image
            src={"/assets/images/icon-menu-close.svg"}
            alt="close"
            width={30}
            height={30}
            className="absolute top-5 right-5 cursor-pointer"
            onClick={() => setIsOpen(false)}
          />
          <ul className="flex flex-col gap-5 px-5 py-20">
            {links.map((link) => (
              <li
                className="cursor-pointer text-gray-500  font-bold hover:text-primary-red p-2"
                key={link.name}
              >
                <a href={link.path}>{link.name}</a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default NavRight;
