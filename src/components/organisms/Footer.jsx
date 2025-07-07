import {
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhone,
  FaTwitter,
} from "react-icons/fa";
import LogoSvg from "../../assets/svgs/LogoSvg";
import Text from "../atoms/Text";
import TextSM from "../atoms/TextSM";

const Footer = () => {
  return (
    <footer className="bg-blue-900 py-12 text-blue-100 dark:bg-slate-900 dark:text-slate-200">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Logo + description + social */}
          <div>
            <div className="mb-4 flex items-center space-x-2">
              <LogoSvg className="w-8" />
              <Text className="text-xl font-bold text-white">RentCar</Text>
            </div>
            <TextSM className="mb-4 text-white">
              Your trusted partner for premium car rentals. Experience the
              freedom of the road with our reliable and well-maintained
              vehicles.
            </TextSM>
            <div className="mt-4 flex space-x-4">
              <a
                href="#"
                className="transition-colors hover:text-blue-400"
                aria-label="Facebook"
              >
                <FaFacebook />
              </a>
              <a
                href="#"
                className="transition-colors hover:text-blue-400"
                aria-label="Twitter"
              >
                <FaTwitter />
              </a>
              <a
                href="#"
                className="transition-colors hover:text-blue-400"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#cars" className="hover:underline">
                  Browse Cars
                </a>
              </li>
              <li>
                <a href="#locations" className="hover:underline">
                  Locations
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:underline">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#about" className="hover:underline">
                  About Us
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:underline">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Support</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#help" className="hover:underline">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#terms" className="hover:underline">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#privacy" className="hover:underline">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#insurance" className="hover:underline">
                  Insurance
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:underline">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Contact info + newsletter */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Contact Info</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-2">
                <FaPhone className="text-blue-400" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <FaEnvelope className="text-blue-400" />
                <span>info@rentcar.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <FaMapMarkerAlt className="text-blue-400" />
                <span>123 Main St, City, State 12345</span>
              </div>
            </div>

            <div className="mt-6">
              <h4 className="mb-2 text-base font-semibold">Newsletter</h4>
              <form className="flex flex-col gap-2 sm:flex-row">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 rounded-md border border-white px-3 py-2 text-white placeholder:text-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
                <button
                  type="submit"
                  className="rounded-md bg-blue-600 px-4 py-2 text-white transition-colors hover:bg-blue-700"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-blue-800 pt-4 text-center text-xs text-blue-200 dark:text-slate-400">
          © 2024 RentCar. All rights reserved. | Designed with ❤️ for car
          enthusiasts
        </div>
      </div>
    </footer>
  );
};

export default Footer;
