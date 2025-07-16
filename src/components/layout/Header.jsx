import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-white w-screen">
      <div className="py-4 flex items-center justify-around">
        <h1 className="text-xl text-black">HELLO WORLD</h1>

        <ul className="flex gap-7 text-black text-xl list-none ">
          <li className="hover:underline">
            <Link href="/">Home</Link>
          </li>
          <li className="hover:underline">
            <Link href="/about">About</Link>
          </li>
          <li className="hover:underline">
            <Link href="/settings">Settings</Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
