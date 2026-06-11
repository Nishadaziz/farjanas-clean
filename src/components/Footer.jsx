import { Mail, Phone, MapPin, ExternalLink, Camera } from "lucide-react";

function Footer() {
  return (
    <footer className="mt-16 bg-[#2B1430] text-white">
      <div className="mx-auto max-w-7xl px-6 py-14 md:px-16">
        <div className="grid gap-10 md:grid-cols-4">
          <div>
            <h3 className="text-2xl font-bold tracking-wide">
              Farjanas Attire
            </h3>

            <p className="mt-4 text-sm leading-7 text-gray-300">
              Premium handcrafted sarees and women&apos;s fashion collections
              designed with elegance, comfort, and timeless beauty.
            </p>
          </div>

          <div>
            <h4 className="mb-5 text-lg font-semibold">Contact</h4>

            <ul className="space-y-3 text-gray-300">
              <li className="flex items-center gap-2">
                <Phone size={16} />
                <a href="tel:+8801793650138" className="hover:text-white">
                  +880 1793-650138
                </a>
              </li>

              <li className="flex items-center gap-2">
                <Mail size={16} />
                <a
                  href="mailto:farjanasattire@gmail.com"
                  className="hover:text-white"
                >
                  farjanasattire@gmail.com
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-5 text-lg font-semibold">Showroom Address</h4>

            <div className="space-y-1 text-gray-300">
              <p className="flex items-center gap-2">
                <MapPin size={16} />
                Shop No: 1027
              </p>
              <p>1st Floor</p>
              <p>Shimanto Shambhar Shopping Complex</p>
              <p>Peelkhana, Dhanmondi-2</p>
              <p>Dhaka, Bangladesh</p>
            </div>
          </div>

          <div>
            <h4 className="mb-5 text-lg font-semibold">Follow Us</h4>

            <div className="flex flex-col gap-3">
              <a
                href="https://www.facebook.com/Shokuntola.FARJANAs"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-gray-300 transition hover:text-white"
              >
                <ExternalLink size={18} />
                Facebook
              </a>

              <a
                href="https://www.instagram.com/farjanasattire?igsh=MThpM3U2Mjh1enRvYw%3D%3D&utm_source=qr"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-gray-300 transition hover:text-white"
              >
                <Camera size={18} />
                Instagram
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6">
          <div className="flex flex-col items-center justify-between gap-3 md:flex-row">
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} Farjanas Attire. All Rights Reserved.
            </p>

            <p className="text-sm text-gray-400">Crafted in Bangladesh</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;