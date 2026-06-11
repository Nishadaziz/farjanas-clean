import logo from "../assets/logo.png";

function Navbar() {
  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between bg-white/90 px-6 py-4 shadow-sm backdrop-blur">
      <img src={logo} alt="Farjanas Attire" className="h-14 w-auto" />

      <a
        href="https://wa.me/8801912783281"
        target="_blank"
        rel="noreferrer"
        className="rounded-full bg-[#8A8F4A] px-5 py-2 font-semibold text-white transition hover:bg-[#72783c]"
      >
        WhatsApp
      </a>
    </nav>
  );
}

export default Navbar;