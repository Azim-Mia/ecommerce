'use client'

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  Bell,
  CheckCheck,
  Settings,
  X,
  ShoppingBag,
  CreditCard,
  MessageCircle,
  ShieldCheck,
  ChevronRight,
} from "lucide-react";

const Notification = () => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // Outside Click Close
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, []);

  const notifications = [
    {
      id: 1,
      type: "order",
      title: "New Order Received",
      desc: "Order #4582 placed successfully",
      time: "2 min ago",
      unread: true,
      icon: <ShoppingBag size={18} />,
    },
    {
      id: 2,
      type: "payment",
      title: "Payment Successful",
      desc: "৳4,500 payment confirmed",
      time: "20 min ago",
      unread: true,
      icon: <CreditCard size={18} />,
    },
    {
      id: 3,
      type: "message",
      title: "New Customer Message",
      desc: "Support team sent you a message",
      time: "1 hour ago",
      unread: false,
      icon: <MessageCircle size={18} />,
    },
    {
      id: 4,
      type: "security",
      title: "Security Update",
      desc: "Your account security updated",
      time: "3 hours ago",
      unread: false,
      icon: <ShieldCheck size={18} />,
    },
  ];

  const unreadCount = notifications.filter((n) => n.unread).length;

  return (
    <div ref={ref} className="relative">
      
      {/* Notification Button */}
      <button
        onClick={() => setOpen(!open)}
        className="group relative flex h-10 w-10 items-center justify-center rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:shadow-lg active:scale-95"
      >
        <Image
          src={"/images/icons/notification.png"}
          alt="notification"
          width={22}
          height={22}
          className="transition-transform duration-300 group-hover:scale-110"
        />

        {/* Badge */}
        <span className="absolute -right-1 -top-1 flex h-5 min-w-[20px] items-center justify-center rounded-full border-2 border-white bg-gradient-to-r from-pink-500 to-rose-500 px-1 text-[10px] font-bold text-white shadow-lg">
          {unreadCount}
        </span>

        {/* Ping */}
        <span className="absolute -right-1 -top-1 h-5 w-5 animate-ping rounded-full bg-pink-400 opacity-30"></span>
      </button>

      {/* Overlay Mobile */}
      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 z-40 bg-black/40 backdrop-blur-sm transition-all duration-300 md:hidden
        ${
          open
            ? "visible opacity-100"
            : "invisible opacity-0"
        }`}
      />

      {/* Notification Panel */}
      <div
        className={`
          fixed m-4 md:m-0 bottom-0 left-0 right-0 z-50 h-[85vh]
          rounded-t-[30px] bg-white shadow-2xl transition-all duration-500
          
          md:absolute md:bottom-auto md:left-auto md:right-0 md:top-14
          md:h-auto md:w-[420px] md:rounded-[28px] md:border
        
          ${
            open
              ? "translate-y-0 opacity-100"
              : "translate-y-full opacity-0 invisible md:translate-y-0"
          }
        `}
      >
        {/* Mobile Drag Bar */}
        <div className="flex  justify-center pt-3 md:hidden">
          <div className="h-1.5 w-16 rounded-full bg-gray-300"></div>
        </div>

        {/* Header */}
        <div className="border-b pr-16 md:pr-1 border-gray-100 px-5 py-4">
          <div className="flex items-center justify-between">
            
            {/* Left */}
            <div className="flex items-center gap-4">
              <div className="relative  flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-pink-500 to-rose-500 text-white shadow-lg">
                <Bell size={22} />

                <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-white text-[10px] font-bold text-pink-600 shadow">
                  {unreadCount}
                </span>
              </div>

              <div>
                <h2 className="text-lg font-bold text-gray-800">
                  Notifications
                </h2>

                <p className="text-xs text-gray-500">
                  Stay updated with your activities
                </p>
              </div>
            </div>

            {/* Right */}
            <div className="flex items-center gap-2">
              <button className="flex h-10 w-10 items-center justify-center rounded-xl bg-gray-100 transition hover:bg-gray-200">
                <Settings size={18} className="text-gray-600" />
              </button>

              <button
                onClick={() => setOpen(false)}
                className="flex h-10 w-10 items-center justify-center rounded-xl bg-gray-100 transition hover:bg-red-50"
              >
                <X size={18} className="text-gray-600" />
              </button>
            </div>
          </div>

          {/* Top Actions */}
          <div className="mt-4 flex gap-3">
            <button className="flex flex-1 items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-pink-500 to-rose-500 py-3 text-sm font-semibold text-white shadow-lg transition hover:scale-[1.02]">
              <CheckCheck size={16} />
              Mark all as read
            </button>

            <button className="flex h-12 w-12 items-center justify-center rounded-2xl border border-gray-200 bg-white transition hover:bg-gray-50">
              <Bell size={18} />
            </button>
          </div>
        </div>

        {/* Notification List */}
        <div className="max-h-[60vh] overflow-y-auto px-3 py-3">
          {notifications.map((item) => (
            <div
              key={item.id}
              className={`
                group mb-3 cursor-pointer rounded-3xl border p-4 transition-all duration-300
                hover:-translate-y-1 hover:shadow-xl
                ${
                  item.unread
                    ? "border-pink-100 bg-gradient-to-r from-pink-50 to-rose-50"
                    : "border-gray-100 bg-white"
                }
              `}
            >
              <div className="flex gap-4">
                
                {/* Icon */}
                <div
                  className={`
                    flex h-12 w-12 items-center justify-center rounded-2xl shadow-sm
                    ${
                      item.unread
                        ? "bg-gradient-to-br from-pink-500 to-rose-500 text-white"
                        : "bg-gray-100 text-gray-600"
                    }
                  `}
                >
                  {item.icon}
                </div>

                {/* Content */}
                <div className="flex-1">
                  
                  {/* Top */}
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className="text-sm font-bold text-gray-800 transition group-hover:text-pink-600">
                        {item.title}
                      </h3>

                      <p className="mt-1 text-xs leading-5 text-gray-500">
                        {item.desc}
                      </p>
                    </div>

                    {item.unread && (
                      <span className="mt-1 h-2.5 w-2.5 rounded-full bg-pink-500"></span>
                    )}
                  </div>

                  {/* Bottom */}
                  <div className="mt-3 flex items-center justify-between">
                    <span className="text-[11px] font-medium text-gray-400">
                      {item.time}
                    </span>

                    <button className="flex items-center gap-1 text-xs font-semibold text-pink-500 opacity-0 transition group-hover:opacity-100">
                      View
                      <ChevronRight size={14} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="border-t border-gray-100 p-4">
          <button className="group flex w-full items-center justify-center gap-2 rounded-2xl bg-gray-900 py-4 text-sm font-semibold text-white transition hover:bg-black">
            View All Notifications
            <ChevronRight
              size={16}
              className="transition group-hover:translate-x-1"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Notification;