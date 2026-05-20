'use client';

import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import { Plus, Minus, ShoppingBag, Trash2, X } from "lucide-react";

const CartModal = () => {
  const [open, setOpen] = useState(false);

  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Wireless Headphone",
      price: 2500,
      quantity: 1,
      image: "/images/products/product_1.jpeg",
    },
    {
      id: 2,
      name: "Smart Watch",
      price: 4500,
      quantity: 2,
      image: "/images/products/product_2.jpeg",
    },
    {
      id: 3,
      name: "Smart Watch",
      price: 4500,
      quantity: 2,
      image: "/images/products/product_2.jpeg",
    },
    {
      id: 4,
      name: "Smart Watch",
      price: 4500,
      quantity: 2,
      image: "/images/products/product_2.jpeg",
    },
  ]);

  const cartRef = useRef<HTMLDivElement>(null);

  // outside click close
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (cartRef.current && !cartRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  // increase qty
  const increaseQty = (id: number) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  // decrease qty
  const decreaseQty = (id: number) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity > 1 ? item.quantity - 1 : 1 }
          : item
      )
    );
  };

  // remove item
  const removeItem = (id: number) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  // total price
  const total = useMemo(
    () =>
      cartItems.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
      ),
    [cartItems]
  );

  // total items
  const totalItems = useMemo(
    () => cartItems.reduce((acc, item) => acc + item.quantity, 0),
    [cartItems]
  );

  return (
    <div ref={cartRef} className="relative">
      {/* CART BUTTON */}
      <button
        onClick={() => setOpen(!open)}
        className="group relative rounded-full p-2.5 transition hover:bg-pink-100"
      >
           <Image
                  src={"/images/icons/cart_2.png"}
                  alt="cart"
                  width={30}
                  height={30}
                  className="transition-transform duration-300 group-hover:scale-110"
                />

        <span className="absolute right-1 top-1 flex h-4 w-4 items-center justify-center rounded-full bg-pink-500 text-[10px] font-bold text-white">
          {totalItems}
        </span>
      </button>

      {/* OVERLAY */}
      {open && (
        <div className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm md:hidden" />
      )}

      {/* MODAL */}
      <div
        className={`
          mx-8 p-4
          fixed right-0 top-0 z-50 flex h-screen w-full flex-col bg-white transition-all duration-300

          md:absolute md:top-14 md:right-0
          md:h-[90vh] md:w-[420px]
          md:rounded-3xl md:border md:border-gray-100 md:shadow-xl
          md:flex md:flex-col

          ${open ? "translate-x-0 opacity-100" : "translate-x-full opacity-0 md:translate-y-4"}
          ${open ? "visible" : "invisible"}
        `}
      >
        {/* HEADER */}
        <div className="shrink-0 flex items-center justify-between border-b bg-white px-5 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-pink-100">
              <ShoppingBag className="text-pink-500" size={22} />
            </div>

            <div>
              <h2 className="text-lg font-bold text-gray-800">
                Shopping Cart
              </h2>
              <p className="text-sm text-gray-500">
                {totalItems} Items
              </p>
            </div>
          </div>

          <button onClick={() => setOpen(false)}>
            <X size={20} />
          </button>
        </div>

        {/* ITEMS (ONLY SCROLL AREA) */}
        <div className="flex-1 overflow-y-auto space-y-4 p-4">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex gap-4 rounded-2xl border p-3 hover:shadow-lg"
            >
              {/* IMAGE */}
              <div className="relative h-24 w-24 overflow-hidden rounded-xl bg-gray-100">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover"
                />
              </div>

              {/* INFO */}
              <div className="flex flex-1 flex-col justify-between">
                <div className="flex justify-between">
                  <div>
                    <h3 className="text-sm font-semibold">
                      {item.name}
                    </h3>
                    <p className="font-bold text-pink-500">
                      ৳ {item.price.toLocaleString()}
                    </p>
                  </div>

                  <button
                    onClick={() => removeItem(item.id)}
                    className="text-gray-400 hover:text-red-500"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>

                {/* QUANTITY */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 rounded-full border px-2 py-1">
                    <button onClick={() => decreaseQty(item.id)}>
                      <Minus size={14} />
                    </button>

                    <span>{item.quantity}</span>

                    <button onClick={() => increaseQty(item.id)}>
                      <Plus size={14} />
                    </button>
                  </div>

                  <p className="font-semibold">
                    ৳{" "}
                    {(
                      item.price * item.quantity
                    ).toLocaleString()}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* FOOTER (ALWAYS VISIBLE) */}
        <div className="shrink-0 border-t bg-white p-5">
          <div className="mb-3 flex justify-between">
            <span>Total</span>
            <span className="text-xl font-bold text-pink-500">
              ৳ {total.toLocaleString()}
            </span>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <button className="rounded-xl border border-pink-500 py-2 text-pink-500">
              View Cart
            </button>

            <button className="rounded-xl bg-pink-500 py-2 text-white">
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartModal;