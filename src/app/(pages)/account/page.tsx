"use client";

import { useState } from "react";
import {
  User,
  Settings,
  Shield,
  Mail,
  Phone,
  Globe,
  Lock,
  Trash2,
  LogOut,
  Camera,
} from "lucide-react";

export default function AccountCenter() {
  const [tab, setTab] = useState("profile");
  const [image, setImage] = useState<string | null>(null);

  const handleImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) setImage(URL.createObjectURL(file));
  };

  return (
    <main className="min-h-screen bg-[#eef1f6] flex justify-center p-6">
      <div className="w-full max-w-7xl grid lg:grid-cols-12 gap-6">

        {/* LEFT SIDEBAR */}
        <aside className="lg:col-span-3 bg-white rounded-2xl shadow-sm p-5">

          {/* USER CARD */}
          <div className="border rounded-xl p-4 bg-gray-50">
            <div className="flex items-center gap-3">

              <div className="relative h-12 w-12 rounded-full bg-gray-200 overflow-hidden flex items-center justify-center">

                {image ? (
                  <img src={image} className="h-full w-full object-cover" />
                ) : (
                  <User size={20} className="text-gray-500" />
                )}

                <label className="absolute bottom-0 right-0 bg-black text-white p-1 rounded-full cursor-pointer">
                  <Camera size={12} />
                  <input
                    type="file"
                    hidden
                    accept="image/*"
                    onChange={handleImage}
                  />
                </label>
              </div>

              <div>
                <p className="text-sm font-semibold">md azim</p>
                <p className="text-xs text-gray-500">
                  mda***@gmail.com
                </p>
                <p className="text-[11px] text-gray-400 mt-1">
                  ID: BD19091284495
                </p>
              </div>
            </div>
          </div>

          {/* MENU GROUPS */}
          <div className="mt-6 space-y-1">

            <GroupLabel>Account</GroupLabel>

            <MenuItem tab="profile" active={tab} setTab={setTab}>
              <User size={16} /> My Profile
            </MenuItem>

            <MenuItem tab="security" active={tab} setTab={setTab}>
              <Shield size={16} /> Security
            </MenuItem>

            <MenuItem tab="email" active={tab} setTab={setTab}>
              <Mail size={16} /> Email Settings
            </MenuItem>

            <GroupLabel className="mt-4">Preferences</GroupLabel>

            <MenuItem tab="privacy" active={tab} setTab={setTab}>
              <Globe size={16} /> Privacy
            </MenuItem>

            <MenuItem tab="notifications" active={tab} setTab={setTab}>
              <Settings size={16} /> Notifications
            </MenuItem>

            <GroupLabel className="mt-4 text-red-500">Danger</GroupLabel>

            <MenuItem tab="delete" active={tab} setTab={setTab} danger>
              <Trash2 size={16} /> Delete Account
            </MenuItem>

            <button className="mt-6 w-full flex items-center justify-center gap-2 text-sm text-gray-600 hover:text-black">
              <LogOut size={16} />
              Sign Out
            </button>
          </div>
        </aside>

        {/* RIGHT CONTENT */}
        <section className="lg:col-span-9 bg-white rounded-2xl shadow-sm p-8">

          {/* PROFILE */}
          {tab === "profile" && (
            <div>
              <h1 className="text-xl font-semibold text-gray-900">
                Profile Information
              </h1>

              <p className="text-sm text-gray-500 mt-1">
                Manage your personal information and avatar
              </p>

              {/* PROFILE CARD */}
              <div className="mt-6 border rounded-xl p-6 flex gap-6 items-center">

                <div className="relative h-20 w-20 rounded-full bg-gray-100 overflow-hidden">
                  {image ? (
                    <img src={image} className="w-full h-full object-cover" />
                  ) : (
                    <User className="w-full h-full text-gray-400 p-4" />
                  )}

                  <label className="absolute bottom-0 right-0 bg-black text-white p-1 rounded-full cursor-pointer">
                    <Camera size={12} />
                    <input
                      type="file"
                      hidden
                      onChange={handleImage}
                    />
                  </label>
                </div>

                <div>
                  <p className="text-sm font-medium">Profile Photo</p>
                  <p className="text-xs text-gray-500">
                    JPG, PNG up to 2MB
                  </p>
                </div>
              </div>

              {/* FORM CARD */}
              <div className="mt-6 border rounded-xl p-6 grid md:grid-cols-2 gap-5">

                <Input placeholder="Full Name" />
                <Input placeholder="Username" />
                <Input placeholder="Email Address" />
                <Input placeholder="Phone Number" />

              </div>

              <button className="mt-6 bg-black text-white px-6 py-3 rounded-xl text-sm font-medium">
                Save Changes
              </button>
            </div>
          )}

          {/* SECURITY */}
          {tab === "security" && (
            <div>
              <h1 className="text-xl font-semibold">Security Settings</h1>

              <div className="mt-6 grid md:grid-cols-2 gap-5 border p-6 rounded-xl">

                <Input placeholder="Current Password" type="password" />
                <Input placeholder="New Password" type="password" />

              </div>

              <button className="mt-6 bg-black text-white px-6 py-3 rounded-xl">
                Update Password
              </button>
            </div>
          )}

          {/* EMAIL */}
          {tab === "email" && (
            <div>
              <h1 className="text-xl font-semibold">Email Settings</h1>

              <div className="mt-6 border p-6 rounded-xl">
                <Input placeholder="New Email Address" />
              </div>

              <button className="mt-6 bg-black text-white px-6 py-3 rounded-xl">
                Update Email
              </button>
            </div>
          )}

        </section>
      </div>
    </main>
  );
}

/* ===== COMPONENTS ===== */

function MenuItem({
  children,
  tab,
  active,
  setTab,
  danger,
}: any) {
  const isActive = tab === active;

  return (
    <button
      onClick={() => setTab(tab)}
      className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition
      ${
        danger
          ? "text-red-500 hover:bg-red-50"
          : isActive
          ? "bg-black text-white"
          : "hover:bg-gray-100"
      }`}
    >
      {children}
    </button>
  );
}

function GroupLabel({ children, className }: any) {
  return (
    <p className={`text-xs text-gray-400 uppercase px-2 ${className}`}>
      {children}
    </p>
  );
}

function Input({ ...props }: any) {
  return (
    <input
      {...props}
      className="w-full border rounded-lg px-4 py-3 text-sm bg-gray-50 focus:bg-white focus:border-black outline-none"
    />
  );
}