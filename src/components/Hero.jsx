import saree1 from "../assets/saree1.jpeg";

// Make sure you import Google Fonts in your main index.html or via Tailwind config
// Example for index.html: 
// <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@700;900&family=Roboto:wght@400;500&display=swap" rel="stylesheet">

function Hero() {
  return (
    <section className="grid gap-10 px-6 py-12 md:grid-cols-2 md:items-center md:px-16">
      {/* Left Content */}
      <div>
        {/* Premium Gradient Headline with Google Font */}
        <h1 className="mt-5 text-5xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#C218D9] to-[#F15A24] md:text-7xl" style={{ fontFamily: "'Montserrat', sans-serif" }}>
          Handcrafted Silk Batik Sarees
        </h1>

        {/* Subtitle */}
        <p className="mt-5 text-lg text-gray-700 max-w-lg" style={{ fontFamily: "'Roboto', sans-serif" }}>
          Premium soft rayon silk sarees with exquisite batik designs. Add a 
          new dimension of elegance to your everyday style.
        </p>

        {/* Pricing with Animated Discount Badge */}
        <div className="mt-6 flex items-baseline gap-4">
          <span className="text-2xl text-gray-400 line-through">৳1650</span>

          <div className="flex items-center gap-2">
            <span className="text-4xl font-extrabold text-[#F15A24]" style={{ fontFamily: "'Montserrat', sans-serif" }}>৳1350</span>
            <span className="text-sm font-bold text-[#C218D9] bg-[#fce7ff] px-3 py-1 rounded-full animate-pulse">
              ONLINE DISCOUNT
            </span>
          </div>
        </div>

        {/* Order Button */}
       <a
  href="#order"
  className="mt-8 inline-block rounded-full border-2 border-[#C218D9] px-10 py-4 text-lg font-extrabold text-[#C218D9] 
             transition-transform duration-300 hover:scale-105 hover:border-[#F15A24] hover:text-[#F15A24] hover:shadow-lg"
  style={{ fontFamily: "'Montserrat', sans-serif" }}
>
  Order Now
</a>
      </div>

      {/* Right Image */}
      <div className="overflow-hidden rounded-3xl shadow-2xl">
        <img
          src={saree1}
          alt="Silk Batik Saree"
          className="h-full w-full object-cover"
        />
      </div>
    </section>
  );
}

export default Hero;