'use client'

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import {
  User,
  Heart,
  ShoppingBag,
  Settings,
  LogOut,
  X,
  ChevronRight,
} from "lucide-react";

const UserSettings = () => {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Outside click close
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, []);

  const menus = [
    {
      id: 1,
      title: "My Profile",
      icon: <User size={18} />,
      link: "/profile",
    },
    {
      id: 2,
      title: "My Orders",
      icon: <ShoppingBag size={18} />,
      link: "/orders",
    },
    {
      id: 3,
      title: "Wishlist",
      icon: <Heart size={18} />,
      link: "/wishlist",
    },
    {
      id: 4,
      title: "Settings",
      icon: <Settings size={18} />,
      link: "/settings",
    },
  ];

  return (
    <div
      ref={menuRef}
      className="relative flex items-center justify-center"
    >
      {/* Avatar Button */}
      <button
        onClick={() => setOpen(!open)}
        className="group relative overflow-hidden rounded-full border-2 border-transparent transition-all duration-300 hover:border-pink-500"
      >
        <Image
          src={"/images/avatars/azim.jpg"}
          alt="user"
          width={44}
          height={44}
          className="rounded-full object-cover"
        />

        {/* Online Dot */}
        <span className="absolute bottom-0 right-0 h-3.5 w-3.5 rounded-full border-2 border-white bg-green-500"></span>
      </button>

      {/* Dropdown */}
      <div
        className={`absolute right-0 top-16 z-50 w-80 overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-[0_15px_45px_rgba(0,0,0,0.15)] transition-all duration-300
        ${
          open
            ? "visible translate-y-0 opacity-100"
            : "invisible -translate-y-5 opacity-0"
        }`}
      >
        {/* Top User Section */}
        <div className="relative overflow-hidden bg-gradient-to-r from-pink-500 via-rose-500 to-purple-600 p-5 text-white">

          {/* Background Blur Circle */}
          <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-white/10 blur-2xl"></div>

          <div className="relative flex items-start justify-between">
            
            {/* User Info */}
            <div className="flex items-center gap-4">
              
              {/* Avatar */}
              <div className="relative">
                <Image
                  src={"/images/avatars/azim.jpg"}
                  alt="user"
                  width={60}
                  height={60}
                  className="rounded-full border-2 border-white/40 object-cover"
                />

                <span className="absolute bottom-0 right-0 h-4 w-4 rounded-full border-2 border-white bg-green-400"></span>
              </div>

              {/* Name */}
              <div>
                <h2 className="text-lg font-semibold tracking-wide">
                  Azim Mia
                </h2>

                <p className="text-sm text-white/80">
                  azim@gmail.com
                </p>

                <span className="mt-1 inline-block rounded-full bg-white/20 px-2 py-1 text-xs">
                  Premium Member
                </span>
              </div>
            </div>

            {/* Close Button */}
            <button
              onClick={() => setOpen(false)}
              className="rounded-full bg-white/10 p-2 transition-all duration-300 hover:bg-white hover:text-pink-600"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Menu Items */}
        <div className="p-3">
          <ul className="space-y-2">
            {menus.map((menu) => (
              <li key={menu.id}>
                <Link
                  href={menu.link}
                  className="group flex items-center justify-between rounded-2xl px-4 py-3 transition-all duration-300 hover:bg-pink-50"
                >
                  <div className="flex items-center gap-3">
                    
                    {/* Icon */}
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-pink-100 text-pink-600 transition-all duration-300 group-hover:scale-110">
                      {menu.icon}
                    </div>

                    {/* Text */}
                    <div>
                      <h3 className="text-sm font-semibold text-gray-800">
                        {menu.title}
                      </h3>

                      <p className="text-xs text-gray-500">
                        Manage your {menu.title.toLowerCase()}
                      </p>
                    </div>
                  </div>

                  <ChevronRight
                    size={18}
                    className="text-gray-400 transition-all duration-300 group-hover:translate-x-1"
                  />
                </Link>
              </li>
            ))}
          </ul>

          {/* Divider */}
          <div className="my-4 border-t border-gray-100"></div>

          {/* Logout */}
          <button className="group flex w-full items-center justify-between rounded-2xl bg-red-50 px-4 py-3 transition-all duration-300 hover:bg-red-100">
            
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-100 text-red-500 transition-all duration-300 group-hover:rotate-6">
                <LogOut size={18} />
              </div>

              <div className="text-left">
                <h3 className="text-sm font-semibold text-red-500">
                  Logout
                </h3>

                <p className="text-xs text-red-400">
                  Sign out from account
                </p>
              </div>
            </div>

            <ChevronRight
              size={18}
              className="text-red-400 transition-all duration-300 group-hover:translate-x-1"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserSettings;