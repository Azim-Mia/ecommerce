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
      <nav className="w-full border-b bg-pink-200">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-3 sm:px-5 md:px-8">
          
          {/* LEFT */}
          <div className="flex items-center gap-4">
            
            {/* MOBILE MENU */}
            <button
              onClick={() => setOpen(true)}
              className="flex flex-col gap-1 md:hidden"
            >
              <div className="h-[2px] w-6 bg-black"></div>
              <div className="h-[2px] w-6 bg-black"></div>
              <div className="h-[2px] w-6 bg-black"></div>
            </button>

            {/* LOGO */}
            <Link
              href="/"
              className="text-lg font-bold tracking-wide sm:text-xl"
            >
              Sale BD
            </Link>
          </div>

          {/* DESKTOP MENU */}
          <ul className="hidden items-center gap-6 lg:gap-10 md:flex">
            <li>
              <Link href="/home" className="hover:text-pink-600 transition">
                Men
              </Link>
            </li>

            <li>
              <Link href="/home" className="hover:text-pink-600 transition">
                Women
              </Link>
            </li>

            <li>
              <Link href="/home" className="hover:text-pink-600 transition">
                Child
              </Link>
            </li>

            <li>
              <Link href="/home" className="hover:text-pink-600 transition">
                Toy
              </Link>
            </li>

            <li>
              <Link href="/home" className="hover:text-pink-600 transition">
                Other
              </Link>
            </li>
          </ul>

          {/* RIGHT */}
          <section className="flex items-center gap-2 sm:gap-4 md:gap-6">
            <Notification />
            <CartModal />
            <UserSettings />
          </section>
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
      <div
        className={`
          fixed left-0 top-0 z-50 h-full w-64 bg-black text-white
          transform transition-transform duration-300 md:hidden
          ${open ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        {/* CLOSE BUTTON */}
        <div className="flex justify-end p-4">
          <button
            onClick={() => setOpen(false)}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-black transition hover:rotate-90 hover:bg-red-500 hover:text-white"
          >
            ✕
          </button>
        </div>

        {/* MOBILE MENU */}
        <ul className="mt-10 flex flex-col items-center gap-7 text-lg font-medium">
          <li>
            <Link
              href="/home"
              onClick={() => setOpen(false)}
              className="hover:text-pink-400"
            >
              Men
            </Link>
          </li>

          <li>
            <Link
              href="/home"
              onClick={() => setOpen(false)}
              className="hover:text-pink-400"
            >
              Women
            </Link>
          </li>

          <li>
            <Link
              href="/home"
              onClick={() => setOpen(false)}
              className="hover:text-pink-400"
            >
              Child
            </Link>
          </li>

          <li>
            <Link
              href="/home"
              onClick={() => setOpen(false)}
              className="hover:text-pink-400"
            >
              Toy
            </Link>
          </li>

          <li>
            <Link
              href="/home"
              onClick={() => setOpen(false)}
              className="hover:text-pink-400"
            >
              Other
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;