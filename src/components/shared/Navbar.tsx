'use client';

import { useState } from "react";
import Link from "next/link";
import UserSettings from "../features/UserSettings";
import CartModal from "../features/CartModal";
import Notification from "../features/Notification";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* NAVBAR */}
      <nav className="sticky top-0 z-50 min-w-full border-b bg-pink-200">
        
        {/* CONTAINER */}
        <div className=" min-w-full mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">

          {/* LEFT SIDE */}
          <div className="flex items-center gap-3">

            {/* MOBILE MENU BUTTON */}
            <button
              onClick={() => setOpen(true)}
              className="flex flex-col gap-1 md:hidden"
              aria-label="Open menu"
            >
              <span className="h-[2px] w-6 bg-black"></span>
              <span className="h-[2px] w-6 bg-black"></span>
              <span className="h-[2px] w-6 bg-black"></span>
            </button>

            {/* LOGO */}
            <Link
              href="/"
              className="logoAnimation text-lg font-bold sm:text-xl"
            >
              Sale BD
            </Link>
          </div>

          {/* DESKTOP MENU */}
          <ul className="hidden items-center gap-6 md:flex lg:gap-10 text-base">
            <li><Link href="#" className="hover:underline">Men</Link></li>
            <li><Link href="#" className="hover:underline">Women</Link></li>
            <li><Link href="#" className="hover:underline">Child</Link></li>
            <li><Link href="#" className="hover:underline">Toy</Link></li>
            <li><Link href="#" className="hover:underline">Other</Link></li>
          </ul>

          {/* RIGHT SIDE */}
          <div className="flex items-center gap-3 sm:gap-5 lg:gap-7">
            <Notification />
            <CartModal />
            <UserSettings />
          </div>

        </div>
      </nav>

      {/* OVERLAY */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 z-40 bg-black/40 md:hidden"
        />
      )}

      {/* MOBILE DRAWER */}
      <aside
        className={`
          fixed left-0 top-0 z-50 h-full w-64 bg-black text-white
          transition-transform duration-300 md:hidden
          ${open ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        {/* CLOSE BUTTON */}
        <div className="flex justify-end p-4">
          <button
            onClick={() => setOpen(false)}
            className="text-2xl font-bold text-white"
          >
            ✕
          </button>
        </div>

        {/* MOBILE MENU */}
        <ul className="mt-10 flex flex-col items-center gap-6 text-lg">
          <li><Link href="#" onClick={() => setOpen(false)}>Men</Link></li>
          <li><Link href="#" onClick={() => setOpen(false)}>Women</Link></li>
          <li><Link href="#" onClick={() => setOpen(false)}>Child</Link></li>
          <li><Link href="#" onClick={() => setOpen(false)}>Toy</Link></li>
          <li><Link href="#" onClick={() => setOpen(false)}>Other</Link></li>
        </ul>
      </aside>
    </>
  );
};

export default Navbar;