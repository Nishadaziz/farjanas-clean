import React, { useState } from "react";

function OrderForm() {
  const [formData, setFormData] = useState({
    name: "",
    tel: "",
    address: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Google Apps Script URL
    const GOOGLE_SCRIPT_URL =
      "https://script.google.com/macros/s/AKfycbw7geTDPOKhMjD7Gb3u5dkSvRWYkTrHg6I79tUZ-7ln-GM6wCmki8bdAWNu9rsgiUZQ1w/exec";

    try {
      // Save order to Google Sheet
      await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          tel: formData.tel,
          address: formData.address,
          product: "Handcrafted Silk Batik Saree",
        }),
      });

      // WhatsApp Order
      const whatsappNumber = "8801912783281";

      const message =
        `*নতুন অর্ডার (Farjanas Attire)*\n\n` +
        `📝 *নাম:* ${formData.name}\n` +
        `📞 *ফোন নম্বর:* ${formData.tel}\n` +
        `📍 *সম্পূর্ণ ঠিকানা:* ${formData.address}\n\n` +
        `🛍️ *প্রোডাক্ট:* Handcrafted Silk Batik Saree`;

      const encodedMessage = encodeURIComponent(message);

      const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

      window.open(whatsappUrl, "_blank");

      // Clear form
      setFormData({
        name: "",
        tel: "",
        address: "",
      });
    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div
      id="order"
      className="mx-auto max-w-lg rounded-3xl bg-white/90 p-8 shadow-xl backdrop-blur-lg border border-gray-200"
    >
      <h2 className="mb-6 text-3xl font-extrabold text-[#C218D9] text-center">
        অর্ডার করুন
      </h2>

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Name */}
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          autoComplete="name"
          placeholder="আপনার নাম"
          className="w-full rounded-2xl border border-gray-300 p-4 text-gray-800 placeholder-gray-400 outline-none focus:ring-2 focus:ring-[#C218D9] focus:border-transparent transition"
          required
        />

        {/* Phone */}
        <input
          type="tel"
          name="tel"
          value={formData.tel}
          onChange={handleChange}
          autoComplete="tel"
          placeholder="ফোন নম্বর"
          className="w-full rounded-2xl border border-gray-300 p-4 text-gray-800 placeholder-gray-400 outline-none focus:ring-2 focus:ring-[#C218D9] focus:border-transparent transition"
          required
        />

        {/* Address */}
        <textarea
          name="address"
          value={formData.address}
          onChange={handleChange}
          autoComplete="street-address"
          placeholder="সম্পূর্ণ ঠিকানা"
          className="w-full h-32 rounded-2xl border border-gray-300 p-4 text-gray-800 placeholder-gray-400 outline-none focus:ring-2 focus:ring-[#C218D9] focus:border-transparent transition resize-none"
          required
        />

        {/* Submit */}
        <button
          type="submit"
          className="w-full rounded-2xl bg-gradient-to-r from-[#C218D9] to-[#F15A24] py-4 font-bold text-white shadow-lg hover:scale-105 transition-transform cursor-pointer"
        >
          অর্ডার কনফার্ম করুন
        </button>
      </form>
    </div>
  );
}

export default OrderForm;