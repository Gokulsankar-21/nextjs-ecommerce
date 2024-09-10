"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import Cart from "./Cart";

const NavIcons = () => {
  const router = useRouter();
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(true);

  //   TEMPORARY
  let isLoggedIn = true;

  const handleProfile = () => {
    if (!isLoggedIn) {
      router.push("/login");
      return;
    }
    if (isLoggedIn) {
      setIsProfileOpen((prev) => !prev);
    }
  };

  return (
    <div className="flex gap-4 lg:gap-6 relative">
      <Image
        src={"/profile.png"}
        width={24}
        height={24}
        alt="profile"
        className="cursor-pointer "
        onClick={handleProfile}
      />
      {isProfileOpen && (
        <div className="absolute top-10 right-15 p-4 text-sm rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.24)]">
          <Link href={"/profile"} className="hover:text-red-400">
            Profile
          </Link>
          <div className="mt-2 hover:text-red-400 cursor-pointer">Logout</div>
        </div>
      )}
      <Image
        src={"/notification.png"}
        width={24}
        height={24}
        alt="profile"
        className="cursor-pointer"
      />
      <Image
        src={"/cart.png"}
        width={24}
        height={24}
        alt="profile"
        className="cursor-pointer"
        onClick={() => setIsCartOpen((prev) => !prev)}
      />
      {isCartOpen && <Cart />}
    </div>
  );
};

export default NavIcons;
