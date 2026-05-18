'use client'

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  Plus,
  Minus,
  ShoppingBag,
  Trash2,
  X,
} from "lucide-react";

const CartModal = () => {
  const [open, setOpen] = useState(false);
  const cartRef = useRef<HTMLDivElement>(null);

  // Close outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (
        cartRef.current &&
        !cartRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, []);

  return (
    <div
      ref={cartRef}
      className="relative"
    >
      {/* Cart Button */}
      <button
        onClick={() => setOpen(!open)}
        className="relative rounded-full p-2 transition-all duration-300 hover:bg-pink-100"
      >
        <Image
          src={"/images/icons/cart_2.png"}
          alt="cart"
          width={24}
          height={24}
        />

        {/* Cart Count */}
        <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-pink-500 text-xs font-semibold text-white">
          2
        </span>
      </button>

      {/* Cart Modal */}
      <div
        className={`absolute right-0 top-14 z-50 w-[380px] overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-[0_10px_40px_rgba(0,0,0,0.15)] transition-all duration-300
        ${
          open
            ? "visible translate-y-0 opacity-100"
            : "invisible -translate-y-4 opacity-0"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b px-5 py-4">
          <div className="flex items-center gap-2">
            <ShoppingBag className="text-pink-500" size={22} />

            <h2 className="text-lg font-bold text-gray-800">
              Shopping Cart
            </h2>
          </div>

          <button
            onClick={() => setOpen(false)}
            className="rounded-full p-2 transition hover:bg-gray-100"
          >
            <X size={18} />
          </button>
        </div>

        {/* Cart Items */}
        <div className="max-h-[400px] overflow-y-auto p-4 space-y-4">

          {/* Item */}
          <div className="flex gap-4 rounded-2xl border p-3 transition hover:shadow-md">

            {/* Product Image */}
            <div className="overflow-hidden rounded-xl bg-gray-100">
              <Image
                src={"/images/products/product_1.jpeg"}
                alt="product"
                width={80}
                height={80}
                className="h-20 w-20 object-cover"
              />
            </div>

            {/* Product Info */}
            <div className="flex flex-1 flex-col justify-between">

              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-sm font-semibold text-gray-800">
                    Wireless Headphone
                  </h3>

                  <p className="mt-1 text-sm text-pink-500 font-bold">
                    ৳ 2,500
                  </p>
                </div>

                <button className="text-gray-400 transition hover:text-red-500">
                  <Trash2 size={18} />
                </button>
              </div>

              {/* Quantity */}
              <div className="mt-3 flex items-center gap-3">

                <button className="flex h-8 w-8 items-center justify-center rounded-full border transition hover:bg-pink-50">
                  <Minus size={14} />
                </button>

                <span className="text-sm font-semibold">
                  1
                </span>

                <button className="flex h-8 w-8 items-center justify-center rounded-full border transition hover:bg-pink-50">
                  <Plus size={14} />
                </button>

              </div>
            </div>
          </div>

          {/* Item 2 */}
          <div className="flex gap-4 rounded-2xl border p-3 transition hover:shadow-md">

            <div className="overflow-hidden rounded-xl bg-gray-100">
              <Image
                src={"/images/products/product_2.jpeg"}
                alt="product"
                width={80}
                height={80}
                className="h-20 w-20 object-cover"
              />
            </div>

            <div className="flex flex-1 flex-col justify-between">

              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-sm font-semibold text-gray-800">
                    Smart Watch
                  </h3>

                  <p className="mt-1 text-sm text-pink-500 font-bold">
                    ৳ 4,500
                  </p>
                </div>

                <button className="text-gray-400 transition hover:text-red-500">
                  <Trash2 size={18} />
                </button>
              </div>

              <div className="mt-3 flex items-center gap-3">

                <button className="flex h-8 w-8 items-center justify-center rounded-full border transition hover:bg-pink-50">
                  <Minus size={14} />
                </button>

                <span className="text-sm font-semibold">
                  2
                </span>

                <button className="flex h-8 w-8 items-center justify-center rounded-full border transition hover:bg-pink-50">
                  <Plus size={14} />
                </button>

              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="border-t bg-gray-50 p-5">

          {/* Total */}
          <div className="mb-4 flex items-center justify-between">
            <span className="text-sm text-gray-500">
              Total
            </span>

            <span className="text-2xl font-bold text-pink-500">
              ৳ 7,000
            </span>
          </div>

          {/* Buttons */}
          <div className="grid grid-cols-2 gap-3">

            <button className="rounded-xl border border-pink-500 py-3 text-sm font-semibold text-pink-500 transition hover:bg-pink-50">
              View Cart
            </button>

            <button className="rounded-xl bg-gradient-to-r from-pink-500 to-rose-500 py-3 text-sm font-semibold text-white shadow-lg transition hover:scale-[1.02]">
              Checkout
            </button>

          </div>
        </div>
      </div>
    </div>
  );
};

export default CartModal;