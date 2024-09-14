"use client";

import Image from "next/image";

import { motion } from "framer-motion";
import React from "react";

type Testimonial = {
  text: string;
  imageSrc: string;
  name: string;
  username: string;
};

interface Props {
  testimonials: Testimonial[];
  className?: string;
  duration?: number;
}

const TestimonialCards = ({ duration, testimonials, className }: Props) => {
  return (
    <div className={className}>
      <motion.div
        className="flex flex-col gap-6 pb-6"
        animate={{
          translateY: "-50%",
        }}
        transition={{
          ease: "linear",
          duration: duration || 10,
          repeat: Infinity,
          repeatType: "loop",
        }}
      >
        {[...new Array(2)].fill(0).map((_, idx) => (
          <React.Fragment key={idx}>
            {...testimonials.map((testimonial) => (
              <div
                key={testimonial.name}
                className="max-w-[348px] w-full p-10 border border-black/15 rounded-3xl"
              >
                <div>{testimonial.text}</div>

                <div className="flex items-center gap-2 mt-5">
                  <Image
                    priority
                    unoptimized
                    quality={100}
                    src={testimonial.imageSrc}
                    alt={`${testimonial.name}`}
                    height={40}
                    width={40}
                    className="rounded-full"
                  />
                  <div className="flex flex-col">
                    <div className="font-medium tracking-tight leading-5">
                      {testimonial.name}
                    </div>
                    <div className="leading-5 tracking-tight">
                      {testimonial.username}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </React.Fragment>
        ))}
      </motion.div>
    </div>
  );
};

export default TestimonialCards;
