import React from "react";
import Link from "next/link";

const Header = () => {
  return (
      <header className="bg-white w-screen sticky top-0">
        <div className="py-4 flex items-center justify-around">
          <h1 className="text-xl text-black">HELLO WORLD</h1>

          <ul className="flex gap-7 text-black text-xl list-none ">
            <li className="hover:underline">
              <Link href="/">Home</Link>
            </li>
            <li className="h-auto w-[1px] bg-black">

            </li>
            <li className="hover:underline">
              <Link href="/about">About</Link>
            </li>
            <li className="hover:underline">
              <Link href="/settings">Settings</Link>
            </li>
            <li className="hover:underline">
              <Link href="/calendar">Calendar</Link>
            </li>
          </ul>

          <div className="flex items-center">
            {/*Add night/light mode in the future*/}
            <img src="/icons/Moon.svg" alt="Moon svg icon" className="h-6"/>

            <img src="/icons/Sun.svg" alt="Sun svg icon" className="h-6"/>
          </div>
        </div>
      </header>
  );
};

export default Header;
