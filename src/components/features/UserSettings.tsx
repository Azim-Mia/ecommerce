'use client';
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import {
  User,
  Heart,
  LogOut,
  ChevronDown,
  Settings,
  ShoppingBag,
  X,
} from "lucide-react";

const UserSettings = () => {
  const [open, setOpen] = useState(false);

  const dropdownRef = useRef<HTMLDivElement | null>(null);

  // OUTSIDE CLICK CLOSE
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    <div
      ref={dropdownRef}
      className="relative flex items-center justify-center"
    >
      {/* USER BUTTON */}
      <button
        onClick={() => setOpen(true)}
        className="group flex items-center gap-2 rounded-full border border-gray-200 bg-white px-2 py-1.5 shadow-sm transition-all duration-300 hover:shadow-lg"
      >
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-gray-900 to-gray-700 text-white">
          <User size={18} />
        </div>

      </button>

      {/* DROPDOWN */}
      <div
        className={`absolute right-0 top-16 z-50 w-80 origin-top-right overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-[0_20px_60px_rgba(0,0,0,0.18)] transition-all duration-300 ${
          open
            ? "visible translate-y-0 scale-100 opacity-100"
            : "invisible -translate-y-3 scale-95 opacity-0"
        }`}
      >
        {/* HEADER */}
        <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black p-6 text-white">

          {/* CLOSE BUTTON */}
          <button
            onClick={() => setOpen(false)}
            className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition hover:bg-white/20"
          >
            <X size={18} />
          </button>

          {/* USER INFO */}
          <div className="flex items-center gap-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-full border border-white/20 bg-white/10 backdrop-blur-sm">
              <User size={28} />
            </div>

            <div>
              <h2 className="text-lg font-semibold tracking-wide">
                Azim Mia
              </h2>

              <p className="text-sm text-gray-300">
                azim@gmail.com
              </p>
            </div>
          </div>
        </div>

        {/* MENU */}
        <div className="space-y-1 p-3">

          <button className="flex w-full items-center gap-4 rounded-2xl px-4 py-3 text-sm font-medium text-gray-700 transition-all duration-200 hover:bg-gray-100">
            <User size={19} />
            My Profile
          </button>

          <button className="flex w-full items-center gap-4 rounded-2xl px-4 py-3 text-sm font-medium text-gray-700 transition-all duration-200 hover:bg-gray-100">
            <Heart size={19} />
            Wishlist
          </button>

          <button className="flex w-full items-center gap-4 rounded-2xl px-4 py-3 text-sm font-medium text-gray-700 transition-all duration-200 hover:bg-gray-100">
            <ShoppingBag size={19} />
            Orders
          </button>

          <Link href="/account" className="flex w-full items-center gap-4 rounded-2xl px-4 py-3 text-sm font-medium text-gray-700 transition-all duration-200 hover:bg-gray-100">
            <Settings size={19} />
              <span>Account</span>
          </Link>

          {/* DIVIDER */}
          <div className="my-2 border-t border-gray-100" />

          <button className="flex w-full items-center gap-4 rounded-2xl px-4 py-3 text-sm font-medium text-red-500 transition-all duration-200 hover:bg-red-50">
            <LogOut size={19} />
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserSettings;