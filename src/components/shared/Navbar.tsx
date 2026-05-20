'use client';

import { useState } from "react";
import Link from "next/link";
import UserSettings from "../features/UserSettings";
import CartModal from "../features/CartModal";
import Notification from "../features/Notification";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="flex h-16 w-auto px-8 items-center justify-between bg-pink-200 px-4 md:px-8">

      {/* MOBILE MENU ICON */}
      <div
        onClick={() => setOpen(true)}
        className="flex flex-col gap-1 md:hidden cursor-pointer"
      >
        <div className="h-[2px] w-7 bg-black"></div>
        <div className="h-[2px] w-7 bg-black"></div>
        <div className="h-[2px] w-7 bg-black"></div>
      </div>

      {/* MOBILE DRAWER */}
      <div
        className={`
          fixed left-0 top-0 z-50 h-full w-64 bg-black text-white
          transform transition-transform duration-300 md:hidden
          ${open ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        {/* CLOSE BUTTON */}
        <div className="flex justify-end p-3">
          <button
            onClick={() => setOpen(false)}
            className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-black shadow-md transition hover:bg-red-500 hover:text-white hover:rotate-90"
          >
            ✕
          </button>
        </div>

        {/* MENU LIST */}
        <ul className="mt-6 flex flex-col items-center gap-6 text-lg">
          <li>
            <Link href="/home" onClick={() => setOpen(false)} className="hover:text-pink-400">
              Men
            </Link>
          </li>
          <li>
            <Link href="/home" onClick={() => setOpen(false)} className="hover:text-pink-400">
              Women
            </Link>
          </li>
          <li>
            <Link href="/home" onClick={() => setOpen(false)} className="hover:text-pink-400">
              Child
            </Link>
          </li>
          <li>
            <Link href="/home" onClick={() => setOpen(false)} className="hover:text-pink-400">
              Toy
            </Link>
          </li>
          <li>
            <Link href="/home" onClick={() => setOpen(false)} className="hover:text-pink-400">
              Other
            </Link>
          </li>
        </ul>
      </div>

      {/* LOGO */}
      <div className="logoAnimation text-xl font-bold">
        Sale BD
      </div>

      {/* DESKTOP MENU */}
      <ul className="hidden items-center gap-8 md:flex">
        <li><Link href="/home" className="hover:underline">Men</Link></li>
        <li><Link href="/home" className="hover:underline">Women</Link></li>
        <li><Link href="/home" className="hover:underline">Child</Link></li>
        <li><Link href="/home" className="hover:underline">Other</Link></li>
      </ul>

      {/* RIGHT SECTION */}
      <section className="flex px-4 items-center gap-6">
        <Notification />
        <CartModal />
          <UserSettings />
      </section>
    </nav>
  );
};

export default Navbar;