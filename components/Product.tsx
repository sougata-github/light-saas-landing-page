"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

import Image from "next/image";
import Tube from "@/assets/tube.png";
import Pyramid from "@/assets/pyramid.png";
import ProductImage from "@/assets/product-image.png";

const Product = () => {
  const ref = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const translateY = useTransform(scrollYProgress, [0, 1], [-150, 150]);

  return (
    <section
      className="bg-gradient-to-b from-[#FFFFFF] to-[#D2DCFF] py-24 overflow-x-clip"
      ref={ref}
    >
      <div className="section-container">
        <div className="max-w-[540px] mx-auto">
          <div className="flex justify-center">
            <div className="text-sm inline-flex border border-[#222]/10 px-3 py-1 rounded-lg tracking-tight">
              Boost your productivity
            </div>
          </div>
          <h2 className="section-heading mt-5">
            A more effective way to track progress
          </h2>
          <p className="section-subheading mt-5">
            Effortlessly turn your ideas into a fully functional, responsive,
            SaaS website in just minutes with this template.
          </p>
        </div>

        {/* Images */}
        <div className="relative">
          <Image
            priority
            unoptimized
            quality={100}
            src={ProductImage}
            alt="Product image"
            height={220}
            width={220}
            className="mt-10 max-w-full w-full"
          />

          <motion.img
            src={Pyramid.src}
            alt="Pyramid image"
            height={262}
            width={262}
            className="hidden md:block absolute -right-36 -top-32"
            style={{
              translateY,
            }}
          />

          <motion.img
            src={Tube.src}
            alt="Tube image"
            height={248}
            width={248}
            className="hidden md:block absolute bottom-24 -left-36"
            style={{
              translateY,
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default Product;
