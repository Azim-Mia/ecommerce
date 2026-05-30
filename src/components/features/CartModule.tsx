'use client';

import { useRef, useState } from "react";
import { ShoppingCart, X, Trash2, ArrowRight } from "lucide-react";
import Image from "next/image";
import useOutsideClick from "@/hooks/useOutsideClick";
const CartModal = () => {
  const [open, setOpen] = useState(false);
  const modalRef = useRef<HTMLDivElement | null>(null);

  useOutsideClick(modalRef, () => {
  setOpen(false);
});

  return (
    <div ref={modalRef} className="relative">
      {/* CART BUTTON */}
      <button
        onClick={() => setOpen(!open)}
        className="relative rounded-full border border-gray-200 bg-white p-2.5 shadow-sm transition hover:shadow-md"
      >
        <ShoppingCart size={26} className="text-gray-700" />

        {/* BADGE */}
        <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-pink-600 text-[11px] font-semibold text-white shadow">
          2
        </span>
      </button>

      {/* BACKDROP (mobile UX improvement) */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 z-40 bg-black/20 sm:hidden"
        />
      )}

      {/* MODAL */}
      <div
        className={`fixed right-2 top-16 z-50 
        w-[92vw] sm:w-[380px] 
        max-w-[380px]
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
            <h3 className="text-lg font-bold text-gray-800">
              Shopping Cart
            </h3>
            <p className="text-sm text-gray-500">2 Items Added</p>
          </div>

          <button
            onClick={() => setOpen(false)}
            className="flex h-9 w-9 items-center justify-center rounded-full hover:bg-gray-100"
          >
            <X size={18} />
          </button>
        </div>

        {/* PRODUCTS */}
        <div className="max-h-[350px] space-y-4 overflow-y-auto p-5">
          
          {/* ITEM 1 */}
          <div className="flex gap-4 rounded-2xl border border-gray-100 p-3 transition hover:border-pink-200 hover:bg-pink-50/40">
            <div className="relative h-20 w-20 overflow-hidden rounded-2xl bg-gray-100">
              <Image
                src="/images/products/product_1.jpeg"
                alt="Premium T-Shirt"
                fill
                sizes="80px"
                className="object-cover"
              />
            </div>

            <div className="flex flex-1 flex-col justify-between">
              <div>
                <h4 className="text-sm font-semibold text-gray-800">
                  Premium T-Shirt
                </h4>
                <p className="mt-1 text-xs text-gray-500">
                  Size: M • Qty: 1
                </p>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-base font-bold text-pink-600">
                  $25
                </span>

                <button className="rounded-full p-2 text-gray-400 hover:bg-red-100 hover:text-red-500">
                  <Trash2 size={16} />
                </button>
              </div>
            </div>
          </div>

          {/* ITEM 2 */}
          <div className="flex gap-4 rounded-2xl border border-gray-100 p-3 transition hover:border-pink-200 hover:bg-pink-50/40">
            <div className="relative h-20 w-20 overflow-hidden rounded-2xl bg-gray-100">
              <Image
                src="/images/products/product_2.jpeg"
                alt="Sneakers"
                fill
                sizes="80px"
                className="object-cover"
              />
            </div>

            <div className="flex flex-1 flex-col justify-between">
              <div>
                <h4 className="text-sm font-semibold text-gray-800">
                  Casual Sneakers
                </h4>
                <p className="mt-1 text-xs text-gray-500">
                  Size: 42 • Qty: 1
                </p>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-base font-bold text-pink-600">
                  $40
                </span>

                <button className="rounded-full p-2 text-gray-400 hover:bg-red-100 hover:text-red-500">
                  <Trash2 size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* FOOTER */}
        <div className="border-t border-gray-100 p-5">
          <div className="mb-5 flex items-center justify-between">
            <span className="text-sm font-medium text-gray-500">
              Total Amount
            </span>
            <span className="text-2xl font-bold text-pink-600">
              $65
            </span>
          </div>

          <div className="flex gap-3">
            <button className="flex-1 rounded-2xl border border-gray-200 py-3 text-sm font-semibold text-gray-700 hover:bg-gray-100">
              View Cart
            </button>

            <button className="flex flex-1 items-center justify-center gap-2 rounded-2xl bg-pink-600 py-3 text-sm font-semibold text-white hover:bg-pink-700">
              Checkout
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartModal;