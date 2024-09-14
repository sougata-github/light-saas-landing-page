import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

import Image from "next/image";
import Logo from "@/assets/logosaas.png";

import Link from "next/link";
import { footerLinks } from "@/lib/data";

const Footer = () => {
  return (
    <footer className="bg-black text-[#BCBCBC] text-sm py-10 text-center">
      <div className="section-container">
        <div className="inline-flex relative before:content-[''] before:top-2 before:bottom-0 before:w-full before:blur before:absolute before:bg-[linear-gradient(to_right,#F87BFF,#FB92CF,#FFDD9B,#C2F0B1,#2FD8FE)]">
          <Image
            priority
            unoptimized
            quality={100}
            height={40}
            width={40}
            src={Logo}
            alt="Saas logo"
            className="relative"
          />
        </div>

        {/* Links */}
        <nav className="flex flex-col sm:flex-row sm:justify-center gap-6 mt-6">
          {footerLinks.map((link) => (
            <Link
              href={link.link}
              key={link.label}
              className="sm:hover:text-white transition duration-300"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Icons */}
        <div className="flex justify-center gap-6 mt-6">
          <FaXTwitter className="size-5" />
          <FaInstagram className="size-5" />
          <FaLinkedin className="size-5" />
          <FaPinterest className="size-5" />
          <FaYoutube className="size-5" />
        </div>

        <p className="mt-6">
          &copy; 2024 Your company Inc | All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
