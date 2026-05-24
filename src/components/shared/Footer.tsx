'use client';

import {
  MapPin,
  Phone,
  Mail,
  ShieldCheck,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t bg-white">
      {/* TOP SECURITY */}
      <div className="border-b bg-gray-50">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-3 px-4 py-5">
          {[
            "SSL Secure",
            "PCI DSS",
            "Buyer Protection",
            "Trusted Payment",
          ].map((item) => (
            <div
              key={item}
              className="flex items-center gap-2 rounded-full border bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm"
            >
              <ShieldCheck size={16} className="text-green-600" />
              {item}
            </div>
          ))}
        </div>
      </div>

      {/* MAIN FOOTER */}
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 md:grid-cols-2 lg:grid-cols-4">
        {/* COMPANY INFO */}
        <div>
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900">
            SALE BD
          </h2>

          <p className="mb-6 text-sm leading-7 text-gray-600">
            Trusted B2B wholesale marketplace platform inspired by
            Alibaba. Secure online shopping and modern eCommerce
            solutions for Bangladesh.
          </p>

          <div className="space-y-4">
            {/* LOCATION */}
            <div className="flex items-start gap-3">
              <div className="rounded-xl bg-orange-100 p-2">
                <MapPin
                  size={18}
                  className="text-orange-600"
                />
              </div>

              <div>
                <p className="text-xs uppercase tracking-wide text-gray-400">
                  Location
                </p>

                <p className="text-sm font-medium text-gray-700">
                  Jamalpur, Bangladesh
                </p>
              </div>
            </div>

            {/* PHONE */}
            <div className="flex items-start gap-3">
              <div className="rounded-xl bg-blue-100 p-2">
                <Phone
                  size={18}
                  className="text-blue-600"
                />
              </div>

              <div>
                <p className="text-xs uppercase tracking-wide text-gray-400">
                  Contact Number
                </p>

                <a
                  href="tel:01980673460"
                  className="text-sm font-medium text-gray-700 hover:text-black"
                >
                  01980673460
                </a>
              </div>
            </div>

            {/* EMAIL */}
            <div className="flex items-start gap-3">
              <div className="rounded-xl bg-green-100 p-2">
                <Mail
                  size={18}
                  className="text-green-600"
                />
              </div>

              <div>
                <p className="text-xs uppercase tracking-wide text-gray-400">
                  Gmail
                </p>

                <a
                  href="mailto:mdazimmia53@gmail.com"
                  className="text-sm font-medium text-gray-700 hover:text-black"
                >
                  mdazimmia53@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3 className="mb-5 text-lg font-semibold text-gray-900">
            Quick Links
          </h3>

          <div className="space-y-3">
            {[
              "About Us",
              "All Products",
              "Best Sellers",
              "Customer Support",
              "Track Order",
            ].map((item) => (
              <a
                key={item}
                href="#"
                className="block text-sm text-gray-600 transition hover:translate-x-1 hover:text-black"
              >
                {item}
              </a>
            ))}
          </div>
        </div>

        {/* POLICIES */}
        <div>
          <h3 className="mb-5 text-lg font-semibold text-gray-900">
            Policies
          </h3>

          <div className="space-y-3">
            {[
              "Privacy Policy",
              "Terms & Conditions",
              "Refund Policy",
              "Shipping Policy",
              "Help Center",
            ].map((item) => (
              <a
                key={item}
                href="#"
                className="block text-sm text-gray-600 transition hover:translate-x-1 hover:text-black"
              >
                {item}
              </a>
            ))}
          </div>
        </div>

        {/* PAYMENT METHODS */}
        <div>
          <h3 className="mb-5 text-lg font-semibold text-gray-900">
            Payment Methods
          </h3>

          <p className="mb-5 text-sm text-gray-600">
            Secure and trusted payment options.
          </p>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-2">
            {/* BKASH */}
            <div className="flex flex-col items-center justify-center rounded-2xl border bg-pink-50 p-4 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
              <div className="mb-2 text-3xl">💳</div>

              <p className="text-sm font-semibold text-pink-600">
                bKash
              </p>
            </div>

            {/* NAGAD */}
            <div className="flex flex-col items-center justify-center rounded-2xl border bg-orange-50 p-4 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
              <div className="mb-2 text-3xl">💰</div>

              <p className="text-sm font-semibold text-orange-600">
                Nagad
              </p>
            </div>

            {/* VISA */}
            <div className="flex flex-col items-center justify-center rounded-2xl border bg-blue-50 p-4 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
              <div className="mb-2 text-3xl">💳</div>

              <p className="text-sm font-semibold text-blue-600">
                Visa Card
              </p>
            </div>

            {/* DUTCH BANGLA */}
            <div className="flex flex-col items-center justify-center rounded-2xl border bg-green-50 p-4 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
              <div className="mb-2 text-3xl">🏦</div>

              <p className="text-sm font-semibold text-green-600">
                Dutch Bangla
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="border-t bg-gray-50">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-6 text-sm text-gray-500 md:flex-row">
          <p>
            © 2026 SALE BD. All rights reserved.
          </p>

          <div className="flex flex-wrap items-center gap-5">
            <a href="#" className="hover:text-black">
              Privacy
            </a>

            <a href="#" className="hover:text-black">
              Terms
            </a>

            <a href="#" className="hover:text-black">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;