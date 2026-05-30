const LogoutPage = () => {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-100 px-4">
      <div className="w-full max-w-sm rounded-3xl bg-white p-6 shadow-xl">
        
        {/* ICON */}
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-red-100">
          <span className="text-3xl">🚪</span>
        </div>

        {/* TITLE */}
        <h1 className="mt-5 text-center text-2xl font-bold text-gray-800">
          Confirm Logout
        </h1>

        {/* DESCRIPTION */}
        <p className="mt-2 text-center text-sm text-gray-500">
          Are you sure you want to logout from your account?
        </p>

        {/* BUTTONS */}
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          
          {/* CONFIRM */}
          <button className="w-full rounded-xl bg-red-500 px-4 py-3 text-sm font-semibold text-white transition-all duration-200 hover:bg-red-600 active:scale-95">
            Confirm
          </button>

          {/* CANCEL */}
          <button className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm font-semibold text-gray-700 transition-all duration-200 hover:bg-gray-100 active:scale-95">
            Cancel
          </button>
        </div>
      </div>
    </main>
  );
};

export default LogoutPage;