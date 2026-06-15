import React, { useState } from "react";

function OrderForm() {
  // 1. Initialize state for the form inputs
  const [formData, setFormData] = useState({
    name: "",
    tel: "",
    address: "",
  });

  // Handle tracking changes for all inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // 2. Handle Form Submission & WhatsApp redirection
  const handleSubmit = (e) => {
    e.preventDefault();

    // Your actual business WhatsApp phone number (with country code, no "+" sign)
    const whatsappNumber = "8801912783281"; 

    // Constructing a clean, bold text message formatting for WhatsApp
    const message = `*নতুন অর্ডার (Farjanas Attire)*\n\n` +
                    `📝 *নাম:* ${formData.name}\n` +
                    `📞 *ফোন নম্বর:* ${formData.tel}\n` +
                    `📍 *সম্পূর্ণ ঠিকানা:* ${formData.address}\n\n` +
                    `🛍️ *প্রোডাক্ট:* Handcrafted Silk Batik Saree`;

    // Encode the message to safely append to a URL string
    const encodedMessage = encodeURIComponent(message);
    
    // Construct the final click-to-chat API Link
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    // Open WhatsApp in a new tab/window automatically
    window.open(whatsappUrl, "_blank");
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
        {/* Name Input */}
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

        {/* Phone Number Input */}
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

        {/* Address Input */}
        <textarea
          name="address"
          value={formData.address}
          onChange={handleChange}
          autoComplete="street-address"
          placeholder="সম্পূর্ণ ঠিকানা"
          className="w-full h-32 rounded-2xl border border-gray-300 p-4 text-gray-800 placeholder-gray-400 outline-none focus:ring-2 focus:ring-[#C218D9] focus:border-transparent transition resize-none"
          required
        />

        {/* Submit Button */}
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