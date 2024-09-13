"use client";

import Image from "next/image";

import { motion } from "framer-motion";

import apex from "@/assets/logo-apex.png";
import acme from "@/assets/logo-acme.png";
import echo from "@/assets/logo-echo.png";
import pulse from "@/assets/logo-pulse.png";
import quantum from "@/assets/logo-quantum.png";
import celestial from "@/assets/logo-celestial.png";

const images = [acme, quantum, echo, celestial, pulse, apex];

const LogoTicker = () => {
  return (
    <div className="py-8 md:py-12 bg-white">
      <div className="section-container">
        <div className="flex overflow-hidden mt-9 [mask-image:linear-gradient(to_right,transparent,black,transparent)]">
          <motion.div
            initial={{
              translateX: 0,
            }}
            animate={{
              translateX: "-50%",
            }}
            transition={{
              duration: 25,
              ease: "linear",
              repeat: Infinity,
            }}
            className="flex flex-none gap-16 pr-16"
          >
            {[...new Array(2)].fill(0).map(() => (
              <>
                {images.map((image) => (
                  <Image
                    priority
                    unoptimized
                    quality={100}
                    src={image.src}
                    alt={`${image}-logo`}
                    key={image.src}
                    height={50}
                    width={50}
                    className="flex-none h-8 w-auto"
                  />
                ))}
              </>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default LogoTicker;
