'use client';

import { useState } from "react";
import Link from "next/link";

import {
  Menu,
  X
} from "lucide-react";

/* =========================
   COMPONENTS
========================= */
import Notification from "../features/Notification";
import CartModal from "../features/CartModule";
import UserSettings from "../features/UserSettings";
const Navbar = () => {
  const [open, setOpen] = useState(false);
return (
    <>
      {/* =========================
          NAVBAR
      ========================= */}
      <nav className="flex h-16 w-full items-center justify-between gap-3">

        {/* =========================
            LEFT SIDE
        ========================= */}
        <div className="flex items-center gap-3">

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setOpen(true)}
            className="
              rounded-lg p-2
              transition hover:bg-gray-100
              md:hidden
            "
            aria-label="Open menu"
          >
            <Menu size={24} />
          </button>

          {/* LOGO */}
          <Link
            href="/"
            className="
              text-xl font-extrabold tracking-tight
              text-pink-600
              sm:text-2xl
            "
          >
            Sale BD
          </Link>
        </div>

        {/* =========================
            DESKTOP MENU
        ========================= */}
        <ul
          className="
            hidden items-center
            gap-5 text-sm font-medium
            md:flex
            lg:gap-8 lg:text-base
          "
        >
          <li>
            <Link
              href="/men"
              className="transition hover:text-pink-600"
            >
              Men
            </Link>
          </li>

          <li>
            <Link
              href="/women"
              className="transition hover:text-pink-600"
            >
              Women
            </Link>
          </li>

          <li>
            <Link
              href="/child"
              className="transition hover:text-pink-600"
            >
              Child
            </Link>
          </li>

          <li>
            <Link
              href="/toy"
              className="transition hover:text-pink-600"
            >
              Toy
            </Link>
          </li>

          <li>
            <Link
              href="/other"
              className="transition hover:text-pink-600"
            >
              Other
            </Link>
          </li>
        </ul>

        {/* =========================
            RIGHT SIDE
        ========================= */}
        <div className="flex items-center gap-1 sm:gap-2">

          {/* NOTIFICATION */}
          <Notification />

          {/* CART */}
          <CartModal />

          {/* USER SETTINGS */}
          <UserSettings />

        </div>
      </nav>

      {/* =========================
          OVERLAY
      ========================= */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="
            fixed inset-0 z-40
            bg-black/50 backdrop-blur-sm
            md:hidden
          "
        />
      )}

      {/* =========================
          MOBILE DRAWER
      ========================= */}
      <aside
        className={`
          fixed left-0 top-0 z-50
          h-screen w-72
          bg-white shadow-2xl
          transition-transform duration-300
          md:hidden
          ${open ? "translate-x-0" : "-translate-x-full"}
        `}
      >

        {/* TOP */}
        <div className="flex items-center justify-between border-b p-4">

          <h2 className="text-xl font-bold text-pink-600">
            Sale BD
          </h2>

          <button
            onClick={() => setOpen(false)}
            className="
              rounded-lg p-2
              transition hover:bg-gray-100
            "
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
        </div>

        {/* MOBILE MENU */}
        <ul className="flex flex-col gap-1 p-4 text-base font-medium">

          <li>
            <Link
              href="/men"
              onClick={() => setOpen(false)}
              className="
                block rounded-xl
                px-4 py-3
                transition
                hover:bg-pink-50
                hover:text-pink-600
              "
            >
              Men
            </Link>
          </li>

          <li>
            <Link
              href="/women"
              onClick={() => setOpen(false)}
              className="
                block rounded-xl
                px-4 py-3
                transition
                hover:bg-pink-50
                hover:text-pink-600
              "
            >
              Women
            </Link>
          </li>

          <li>
            <Link
              href="/child"
              onClick={() => setOpen(false)}
              className="
                block rounded-xl
                px-4 py-3
                transition
                hover:bg-pink-50
                hover:text-pink-600
              "
            >
              Child
            </Link>
          </li>

          <li>
            <Link
              href="/toy"
              onClick={() => setOpen(false)}
              className="
                block rounded-xl
                px-4 py-3
                transition
                hover:bg-pink-50
                hover:text-pink-600
              "
            >
              Toy
            </Link>
          </li>

          <li>
            <Link
              href="/other"
              onClick={() => setOpen(false)}
              className="
                block rounded-xl
                px-4 py-3
                transition
                hover:bg-pink-50
                hover:text-pink-600
              "
            >
              Other
            </Link>
          </li>

        </ul>

        {/* BOTTOM CARD */}
        <div className="absolute bottom-0 w-full border-t p-4">

          <div className="rounded-2xl bg-pink-50 p-4">

            <h3 className="font-semibold text-pink-600">
              Welcome to Sale BD
            </h3>

            <p className="mt-1 text-sm text-gray-600">
              Best ecommerce platform in Bangladesh.
            </p>

          </div>
        </div>

      </aside>
    </>
  );
};

export default Navbar;