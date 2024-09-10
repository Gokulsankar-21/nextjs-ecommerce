"use client";
import Image from "next/image";
import React from "react";
import SearchIcon from "../../public/search.png";
import { useRouter } from "next/navigation";
const SearchBox = () => {
  // useRouter FOR NAVIGATION IN CLIENT SIDE | useRouter FOR API ROUTING IN SERVER SIDE as next/router
  const router = useRouter();
  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // CREATING FORM INSTANCE USING FormData Class
    const formData = new FormData(e.currentTarget);
    console.log(formData.get("name"));
    const queryString = formData.get("name") as string;

    if (queryString) {
      // CHANGE LOCATION TO LIST PAGE WITH QUERY STRING
      router.push(`/list?name=${queryString}`);
    }
  }; // romba simple ana logic
  return (
    <form
      className="flex justify-between flex-1 bg-gray-100 p-2 rounded-md items-center gap-2"
      onSubmit={handleSearch}
    >
      <input
        type="text"
        placeholder="Search"
        name="name"
        className="bg-transparent outline-none w-full"
      />
      <Image
        src={SearchIcon}
        width={24}
        height={24}
        alt="search"
        className="cursor-pointer"
      />
    </form>
  );
};

export default SearchBox;
