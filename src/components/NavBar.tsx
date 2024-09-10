import Image from "next/image";
import React, { useState } from "react";

import Menu from "./Menu";
import Link from "next/link";
import Logo from "../../public/logo.png";
import NavIcons from "./NavIcons";
import SearchBox from "./SearchBox";
const NavBar = () => {
  return (
    <div className="h-20 w-screen px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative">
      {/* MOBILE SCREEN */}
      <div className=" h-full flex justify-between items-center md:hidden">
        <Link href={"/"}>
          <div className="text-2xl uppercase tracking-widest">Galaxy</div>
        </Link>
        <Menu />
      </div>

      {/* DESKTOP SCREEN */}
      <div className="h-full w-full hidden md:flex justify-between items-center">
        {/* LEFT */}
        <div className="w-1/3 ">
          <Link
            href={"/"}
            className="h-full flex gap-2 items-center justify-center"
          >
            <Image src={Logo} width={25} height={25} alt="logo" />
            <div className="text-2xl uppercase tracking-widest">Galaxy</div>
          </Link>
        </div>
        {/* RIGHT*/}
        <div className="w-2/3  flex justify-between gap-8 items-center">
          <SearchBox />
          <NavIcons />
        </div>
      </div>
    </div>
  );
};

export default NavBar;

// Mobile First Design

// NavBar la antha logo and menu ah responsive devices ku etha maari complete ah change pandrom
