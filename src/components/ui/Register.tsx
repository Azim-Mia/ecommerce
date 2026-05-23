"use client";

import Link from "next/link";
import Image from "next/image";
import { Eye, EyeOff, Lock, Mail, User } from "lucide-react";
import { useRef, useState } from "react";
import { useRouter } from "next/navigation";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);

  const router = useRouter();

  // INPUT REFS
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  // KEYBOARD MOVE
  const handleMove = (
    e: React.KeyboardEvent<HTMLInputElement>,
    nextRef?: React.RefObject<HTMLInputElement | null>,
    prevRef?: React.RefObject<HTMLInputElement | null>
  ) => {
    if (e.key === "Enter" || e.key === "ArrowDown") {
      e.preventDefault();
      nextRef?.current?.focus();
    }

    if (e.key === "ArrowUp") {
      e.preventDefault();
      prevRef?.current?.focus();
    }
  };

  // REGISTER SUBMIT
  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    // API CALL / REGISTER LOGIC

    console.log("Register Success");

    // SUCCESS হলে HOME PAGE এ পাঠাবে
    router.push("/");
  };

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#f5f5f5] px-4 py-10">

      {/* BACKGROUND BLUR */}
      <div className="absolute left-[-120px] top-[-120px] h-72 w-72 rounded-full bg-black/10 blur-3xl" />
      <div className="absolute bottom-[-120px] right-[-120px] h-72 w-72 rounded-full bg-gray-400/20 blur-3xl" />

      <div className="relative grid w-full max-w-6xl overflow-hidden rounded-[32px] border border-gray-200 bg-white shadow-[0_20px_80px_rgba(0,0,0,0.08)] lg:grid-cols-2">

        {/* LEFT SIDE */}
        <div className="relative hidden flex-col justify-between overflow-hidden bg-black p-10 text-white lg:flex">

          <div className="absolute inset-0 opacity-20">
   <Image
  src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?q=80&w=1200&auto=format&fit=crop"
  alt="Fashion"
  fill
  sizes="(max-width: 1024px) 100vw, 50vw"
  className="object-cover"
  priority
/>
          </div>

          <div className="relative z-10">
            <span className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs backdrop-blur">
              SALE BD SHOP
            </span>

            <h1 className="mt-6 text-5xl font-bold leading-tight">
              Start Your <br />
              Shopping Journey
            </h1>

            <p className="mt-5 max-w-md text-sm leading-7 text-gray-300">
              Create your account and explore premium collections,
              secure payments, fast delivery and modern shopping experience.
            </p>
          </div>

          <div className="relative z-10 grid grid-cols-2 gap-4">
            <div className="rounded-2xl border border-white/10 bg-white/10 p-5 backdrop-blur">
              <h3 className="text-lg font-semibold">
                Fast Delivery
              </h3>

              <p className="mt-2 text-sm text-gray-300">
                Super fast shipping all over Bangladesh.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/10 p-5 backdrop-blur">
              <h3 className="text-lg font-semibold">
                Secure Payment
              </h3>

              <p className="mt-2 text-sm text-gray-300">
                100% trusted and secure payment system.
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex items-center justify-center p-6 sm:p-10 lg:p-14">
          <div className="w-full max-w-md">

            {/* LOGO */}
            <div className="mb-8 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-black text-lg font-bold text-white">
                S
              </div>

              <div>
                <h2 className="text-lg font-bold text-gray-900">
                  Sale BD
                </h2>

                <p className="text-sm text-gray-500">
                  Premium Ecommerce
                </p>
              </div>
            </div>

            {/* HEADER */}
            <div className="mb-8">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900">
                Create Account
              </h1>

              <p className="mt-3 text-sm leading-6 text-gray-500">
                Join our ecommerce platform and enjoy a modern
                shopping experience with exclusive offers.
              </p>
            </div>

            {/* FORM */}
            <form
              onSubmit={handleSubmit}
              className="space-y-5"
            >

              {/* NAME */}
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Full Name
                </label>

                <div className="flex items-center rounded-2xl border border-gray-200 bg-gray-50 px-4 transition focus-within:border-black focus-within:bg-white">
                  <User size={18} className="text-gray-400" />

                  <input
                    ref={nameRef}
                    type="text"
                    placeholder="Enter your full name"
                    onKeyDown={(e) =>
                      handleMove(e, emailRef)
                    }
                    className="w-full bg-transparent px-3 py-4 text-sm outline-none"
                  />
                </div>
              </div>

              {/* EMAIL */}
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Email Address
                </label>

                <div className="flex items-center rounded-2xl border border-gray-200 bg-gray-50 px-4 transition focus-within:border-black focus-within:bg-white">
                  <Mail size={18} className="text-gray-400" />

                  <input
                    ref={emailRef}
                    type="email"
                    placeholder="Enter your email"
                    onKeyDown={(e) =>
                      handleMove(e, passwordRef, nameRef)
                    }
                    className="w-full bg-transparent px-3 py-4 text-sm outline-none"
                  />
                </div>
              </div>

              {/* PASSWORD */}
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Password
                </label>

                <div className="flex items-center rounded-2xl border border-gray-200 bg-gray-50 px-4 transition focus-within:border-black focus-within:bg-white">
                  <Lock size={18} className="text-gray-400" />

                  <input
                    ref={passwordRef}
                    type={showPassword ? "text" : "password"}
                    placeholder="Create password"
                    onKeyDown={(e) =>
                      handleMove(e, undefined, emailRef)
                    }
                    className="w-full bg-transparent px-3 py-4 text-sm outline-none"
                  />

                  <button
                    type="button"
                    onClick={() =>
                      setShowPassword(!showPassword)
                    }
                    className="text-gray-400 transition hover:text-black"
                  >
                    {showPassword ? (
                      <EyeOff size={18} />
                    ) : (
                      <Eye size={18} />
                    )}
                  </button>
                </div>
              </div>

              {/* CHECKBOX */}
              <label className="flex items-start gap-3 text-sm text-gray-500">
                <input
                  type="checkbox"
                  className="mt-1 h-4 w-4 rounded border-gray-300"
                />

                <span>
                  I agree to the{" "}
                  <span className="font-semibold text-black">
                    Terms & Conditions
                  </span>{" "}
                  and Privacy Policy.
                </span>
              </label>

              {/* BUTTON */}
              <button
                type="submit"
                className="w-full rounded-2xl bg-black py-4 text-sm font-semibold text-white transition hover:bg-gray-800"
              >
                Create Account
              </button>
            </form>

            {/* LOGIN */}
            <p className="mt-8 text-center text-sm text-gray-500">
              Already have an account?{" "}
              <Link
                href="/login"
                className="font-semibold text-black hover:underline"
              >
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Register