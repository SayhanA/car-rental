import {
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhone,
  FaTwitter,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import LogoSvg from "../../assets/svgs/LogoSvg";
import Text from "../atoms/Text";
import TextLg from "../atoms/TextLg";
import TextSM from "../atoms/TextSM";

const Footer = () => {
  return (
    <footer className="bg-blue-900 py-12 text-blue-100 dark:bg-slate-900 dark:text-slate-200">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4">
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
            <TextLg className="mb-4 text-lg font-semibold text-white">
              Quick Links
            </TextLg>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="#cars" className="hover:underline">
                  Browse Cars
                </Link>
              </li>
              <li>
                <Link to="#locations" className="hover:underline">
                  Locations
                </Link>
              </li>
              <li>
                <Link to="#pricing" className="hover:underline">
                  Pricing
                </Link>
              </li>
              <li>
                <Link to="#about" className="hover:underline">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="#contact" className="hover:underline">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <TextLg className="mb-4 text-lg font-semibold text-white">
              Support
            </TextLg>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="#help" className="hover:underline">
                  Help Center
                </Link>
              </li>
              <li>
                <Link to="#terms" className="hover:underline">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="#privacy" className="hover:underline">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="#insurance" className="hover:underline">
                  Insurance
                </Link>
              </li>
              <li>
                <Link to="#faq" className="hover:underline">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact info + newsletter */}
          <div className="w-fit overflow-hidden">
            <TextLg className="mb-4 text-lg font-semibold text-white">
              Contact Info
            </TextLg>
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
              <Text className="mb-2 text-base font-semibold text-white">
                Newsletter
              </Text>
              <form className="flex flex-col gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 rounded-md border border-white px-3 py-2 text-white placeholder:text-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
                <button
                  type="submit"
                  className="w-fit rounded-md bg-blue-600 px-4 py-2 text-white transition-colors hover:bg-blue-700"
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
