"use client";
import Image from "next/image";
import React from "react";
import NavRight from "./NavRight";
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
function Header() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="flex justify-between items-center">
      <Image src="/assets/images/logo.svg" alt="logo" width={50} height={50} />
      <nav className="max-md:hidden">
        <ul className="flex gap-10">
          {links.map((link) => (
            <li
              className="cursor-pointer text-gray-500 hover:text-primary-red p-2"
              key={link.name}
            >
              <a href={link.path}>{link.name}</a>
            </li>
          ))}
        </ul>
      </nav>
      <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
        <Image
          src={"/assets/images/icon-menu.svg"}
          alt="menu"
          width={50}
          height={50}
          className="cursor-pointer"
        />
      </button>
      <NavRight isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
}

export default Header;
