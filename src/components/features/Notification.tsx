'use client'

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Bell, X } from "lucide-react";

const Notification = () => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // Outside click close
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const notifications = [
    {
      id: 1,
      title: "New Order Received",
      desc: "Your order #1234 has been placed",
      time: "2 min ago",
    },
    {
      id: 2,
      title: "Payment Successful",
      desc: "Payment for order #1233 completed",
      time: "1 hour ago",
    },
    {
      id: 3,
      title: "New Message",
      desc: "You have a new message from support",
      time: "3 hours ago",
    },
  ];

  return (
    <div ref={ref} className="relative">
      
      {/* Button */}
      <button
        onClick={() => setOpen(!open)}
        className="relative rounded-full p-2 transition hover:bg-pink-100"
      >
        <Image
          src={"/images/icons/notification.png"}
          alt="notification"
          width={22}
          height={22}
        />

        {/* badge */}
        <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-red-500 text-[10px] text-white flex items-center justify-center">
          {notifications.length}
        </span>
      </button>

      {/* Dropdown */}
      <div
        className={`absolute right-0 top-14 z-50 w-80 overflow-hidden rounded-2xl border bg-white shadow-xl transition-all duration-300
        ${open ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-3"}`}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b p-4">
          <div className="flex items-center gap-2">
            <Bell size={18} className="text-pink-500" />
            <h2 className="font-semibold">Notifications</h2>
          </div>

          <button onClick={() => setOpen(false)}>
            <X size={18} />
          </button>
        </div>

        {/* List */}
        <div className="max-h-72 overflow-y-auto">
          {notifications.map((item) => (
            <div
              key={item.id}
              className="flex flex-col gap-1 border-b p-4 hover:bg-pink-50 transition"
            >
              <h3 className="text-sm font-semibold">{item.title}</h3>
              <p className="text-xs text-gray-500">{item.desc}</p>
              <span className="text-[10px] text-gray-400">
                {item.time}
              </span>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="p-3 text-center">
          <button className="text-sm font-semibold text-pink-500 hover:underline">
            Views All Notifications
          </button>
        </div>
      </div>
    </div>
  );
};

export default Notification;