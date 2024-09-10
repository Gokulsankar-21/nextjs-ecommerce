"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import handburgerMenuIcon from "../../public/menu.png";

const Menu = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="">
      <Image
        src={handburgerMenuIcon}
        width={30}
        height={30}
        alt="menu_icon"
        className="cursor-pointer"
        onClick={() => setOpen((prev) => !prev)}
      />

      {open && (
        <div className="absolute top-[80px] left-0 bg-black text-white w-full h-[calc(100vh-80px)] z-50 flex justify-center items-center flex-col gap-10">
          <Link href="/">Homepage</Link>
          <Link href="/list">Categoty</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/logut">Logout</Link>
          {/* <Link href='/'>Homepage</Link> */}
        </div>
      )}
    </div>
  );
};

export default Menu;
