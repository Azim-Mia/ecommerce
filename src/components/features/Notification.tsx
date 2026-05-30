'use client';

import { useEffect, useRef, useState } from "react";
import { Bell, CheckCheck, X } from "lucide-react";
const Notification = () => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  // outside click close
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={ref} className="relative">
      
      {/* BUTTON */}
      <button
        onClick={() => setOpen(!open)}
        className="relative rounded-full border border-gray-200 bg-white p-2.5 shadow-sm transition hover:shadow-md"
      >
        <Bell size={26} className="text-gray-700" />

        {/* DOT */}
        <span className="absolute right-2 top-2 h-2.5 w-2.5 animate-pulse rounded-full bg-red-500" />
      </button>

      {/* BACKDROP (mobile UX better) */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 z-40 bg-black/20 sm:hidden"
        />
      )}

      {/* DROPDOWN */}
      <div
        className={`fixed right-2 top-14 z-50
        w-[92vw] sm:w-80
        max-w-sm
        overflow-hidden rounded-3xl border border-gray-200 bg-white
        shadow-[0_20px_60px_rgba(0,0,0,0.18)]
        transition-all duration-300
        ${
          open
            ? "visible translate-y-0 scale-100 opacity-100"
            : "invisible -translate-y-3 scale-95 opacity-0"
        }`}
      >
        {/* HEADER */}
        <div className="flex items-center justify-between border-b border-gray-100 px-5 py-4">
          <div>
            <h3 className="text-base font-bold text-gray-800">
              Notifications
            </h3>
            <p className="text-xs text-gray-500">Latest updates</p>
          </div>

          <button
            onClick={() => setOpen(false)}
            className="flex h-8 w-8 items-center justify-center rounded-full hover:bg-gray-100"
          >
            <X size={16} />
          </button>
        </div>

        {/* ACTION BAR */}
        <div className="flex items-center justify-between px-5 py-3">
          <button className="flex items-center gap-1 text-xs font-medium text-pink-600 hover:underline">
            <CheckCheck size={14} />
            Mark all read
          </button>

          <span className="text-xs text-gray-400">2 new</span>
        </div>

        {/* LIST */}
        <div className="max-h-[300px] space-y-3 overflow-y-auto px-5 pb-5">

          <div className="rounded-2xl border border-gray-100 bg-gray-50 p-4 hover:border-pink-200 hover:bg-pink-50/40">
            <p className="text-sm font-semibold text-gray-800">
              Your order has been shipped 🚚
            </p>
            <span className="mt-1 block text-xs text-gray-500">
              2 minutes ago
            </span>
          </div>

          <div className="rounded-2xl border border-gray-100 bg-gray-50 p-4 hover:border-pink-200 hover:bg-pink-50/40">
            <p className="text-sm font-semibold text-gray-800">
              New discount available 🔥
            </p>
            <span className="mt-1 block text-xs text-gray-500">
              10 minutes ago
            </span>
          </div>

          <div className="rounded-2xl border border-gray-100 bg-gray-50 p-4 hover:border-pink-200 hover:bg-pink-50/40">
            <p className="text-sm font-semibold text-gray-800">
              Payment successful 💳
            </p>
            <span className="mt-1 block text-xs text-gray-500">
              1 hour ago
            </span>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Notification;