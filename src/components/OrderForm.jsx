import React from "react";

function OrderForm() {
  return (
    <div
      id="order"
      className="mx-auto max-w-lg rounded-3xl bg-white/90 p-8 shadow-xl backdrop-blur-lg border border-gray-200"
    >
      <h2 className="mb-6 text-3xl font-extrabold text-[#C218D9] text-center">
        অর্ডার করুন
      </h2>

      <form className="space-y-5">
        {/* Name Input */}
        <input
          type="text"
          name="name"
          autoComplete="name"
          placeholder="আপনার নাম"
          className="w-full rounded-2xl border border-gray-300 p-4 text-gray-800 placeholder-gray-400 outline-none focus:ring-2 focus:ring-[#C218D9] focus:border-transparent transition"
          required
        />

        {/* Phone Number Input */}
        <input
          type="tel"
          name="tel"
          autoComplete="tel"
          placeholder="ফোন নম্বর"
          className="w-full rounded-2xl border border-gray-300 p-4 text-gray-800 placeholder-gray-400 outline-none focus:ring-2 focus:ring-[#C218D9] focus:border-transparent transition"
          required
        />

        {/* Address Input */}
        <textarea
          name="address"
          autoComplete="street-address"
          placeholder="সম্পূর্ণ ঠিকানা"
          className="w-full h-32 rounded-2xl border border-gray-300 p-4 text-gray-800 placeholder-gray-400 outline-none focus:ring-2 focus:ring-[#C218D9] focus:border-transparent transition resize-none"
          required
        />

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full rounded-2xl bg-gradient-to-r from-[#C218D9] to-[#F15A24] py-4 font-bold text-white shadow-lg hover:scale-105 transition-transform"
        >
          অর্ডার কনফার্ম করুন
        </button>
      </form>
    </div>
  );
}

export default OrderForm;