import Link from "next/link";
import { links } from "@/lib/data";

import Image from "next/image";
import Logo from "@/assets/logosaas.png";

import Button from "./Button";
import { ArrowRight, Menu } from "lucide-react";

const Header = () => {
  return (
    <header className="z-40 sticky top-0 backdrop-blur-md border-b border-black/10">
      <div className="bg-black">
        <div className="section-container">
          {/* Banner */}
          <div className="cursor-pointer group flex justify-center items-center py-3 text-white text-sm">
            <div className="inline-flex gap-1 items-center">
              <p>Get Started for free</p>
              <ArrowRight className="size-4 inline-flex items-center justify-center sm:group-hover:translate-x-1 transition duration-500" />
            </div>
          </div>
        </div>
      </div>

      {/* Navbar */}
      <div className="section-container">
        <div className="py-5">
          <div className="flex items-center justify-between">
            <Image
              priority
              unoptimized
              quality={100}
              src={Logo}
              alt="Saas logo"
              height={40}
              width={40}
            />
            <Menu className="size-6 cursor-pointer block sm:hidden" />

            {/* Nav Links */}
            <nav className="hidden sm:flex items-center gap-4 md:gap-6 text-black/60">
              {links.map((link) => (
                <Link
                  key={link.label}
                  href={link.link}
                  className="sm:hover:text-black transition duration-300 font-medium"
                >
                  {link.label}
                </Link>
              ))}

              <Button>Get for free</Button>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
