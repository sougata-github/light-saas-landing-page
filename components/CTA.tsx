"use client";

import { motion, useScroll, useTransform } from "framer-motion";

import Button from "./Button";

import Star from "@/assets/star.png";
import Spring from "@/assets/spring.png";
import { useRef } from "react";

const CTA = () => {
  const ref = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const translateY = useTransform(scrollYProgress, [0, 1], [-80, 80]);

  return (
    <section
      className="bg-gradient-to-b from-white to-[#D2DCFF] py-24 overflow-x-clip"
      ref={ref}
    >
      <div className="section-container">
        <div className="max-w-[540px] mx-auto relative">
          <h2 className="section-heading">Sign Up for free today</h2>
          <p className="section-subheading mt-5">
            Celebrate the joy of accomplishment with an app designed to track
            your progress.
          </p>

          {/* Images */}
          <motion.img
            height={360}
            width={360}
            src={Star.src}
            alt="Star image"
            className="hidden md:block absolute -left-[350px] -top-[137px]"
            style={{
              translateY,
            }}
          />
          <motion.img
            height={360}
            width={360}
            src={Spring.src}
            alt="Star image"
            className="hidden md:block absolute -right-[331px] -top-[19px]"
            style={{
              translateY,
            }}
          />
        </div>

        <div className="flex gap-2 mt-10 justify-center">
          <Button>Get for free</Button>
          <Button className="bg-transparent border border-black/10 text-black">
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
