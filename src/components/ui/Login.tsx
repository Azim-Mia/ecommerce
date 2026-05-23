"use client";

import Link from "next/link";
import { Eye, EyeOff, Lock, Mail } from "lucide-react";
import { useRef, useState } from "react";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

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

  const handleGoogleLogin = () => {
    console.log("Google login clicked");
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-50 px-4 py-10">
      <div className="grid w-full max-w-6xl overflow-hidden rounded-3xl bg-white shadow-2xl lg:grid-cols-2">

        {/* LEFT SIDE */}
        <div className="hidden flex-col justify-between bg-black p-10 text-white lg:flex">
          <div>
            <h1 className="text-4xl font-bold leading-tight">
              Welcome Back 👋
            </h1>
            <p className="mt-4 max-w-md text-sm leading-6 text-gray-300">
              Login to your account and continue shopping with the best modern ecommerce experience.
            </p>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex items-center justify-center p-6 sm:p-10">
          <div className="w-full max-w-md">

            {/* HEADER */}
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-900">
                Login Account
              </h2>
              <p className="mt-2 text-sm text-gray-500">
                Enter your credentials to continue
              </p>
            </div>

            {/* FORM */}
            <form className="space-y-5">

              {/* EMAIL */}
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Email Address
                </label>

                <div className="flex items-center rounded-xl border border-gray-200 bg-gray-50 px-4 transition focus-within:border-black">
                  <Mail size={18} className="text-gray-400" />

                  <input
                    ref={emailRef}
                    type="email"
                    placeholder="Enter your email"
                    onKeyDown={(e) => handleMove(e, passwordRef)}
                    className="w-full bg-transparent px-3 py-4 text-sm outline-none"
                  />
                </div>
              </div>

              {/* PASSWORD */}
              <div>
                <div className="mb-2 flex items-center justify-between">
                  <label className="text-sm font-medium text-gray-700">
                    Password
                  </label>

                  <Link
                    href="/forgot-password"
                    className="text-sm font-medium text-black hover:underline"
                  >
                    Forgot password?
                  </Link>
                </div>

                <div className="flex items-center rounded-xl border border-gray-200 bg-gray-50 px-4 transition focus-within:border-black">
                  <Lock size={18} className="text-gray-400" />

                  <input
                    ref={passwordRef}
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter password"
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

              {/* REMEMBER */}
              <label className="flex items-center gap-2 text-sm text-gray-600">
                <input
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300"
                />
                Remember me
              </label>

              {/* LOGIN BUTTON */}
              <button
                type="submit"
                className="w-full rounded-xl bg-black py-4 text-sm font-semibold text-white transition hover:bg-gray-800"
              >
                Login Now
              </button>
            </form>

            {/* 🔥 GOOGLE LOGIN (BOTTOM END) */}
            <div className="mt-8">
              <button
                onClick={handleGoogleLogin}
                className="flex w-full items-center justify-center gap-3 rounded-xl border border-gray-200 bg-white py-3 text-sm font-medium text-gray-700 transition hover:bg-gray-100"
              >
                <img
                  src="https://www.svgrepo.com/show/475656/google-color.svg"
                  alt="Google"
                  className="h-5 w-5"
                />
                Continue with Google
              </button>
            </div>

            {/* REGISTER */}
            <p className="mt-6 text-center text-sm text-gray-500">
              Don&apos;t have an account?{" "}
              <Link
                href="/register"
                className="font-semibold text-black hover:underline"
              >
                Create Account
              </Link>
            </p>

          </div>
        </div>
      </div>
    </main>
  );
};

export default Login;