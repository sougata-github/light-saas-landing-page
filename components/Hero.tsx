import Button from "./Button";

import Image from "next/image";
import Cog from "@/assets/cog.png";
import Noodle from "@/assets/noodle.png";
import Cylinder from "@/assets/cylinder.png";

const Hero = () => {
  return (
    <section className="pt-8 md:pt-5 lg:pt-8 pb-20 md:pb-10 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183EC2,#EAEEFE_100%)] overflow-x-clip">
      <div className="section-container">
        <div className="md:flex items-center">
          <div className="md:w-[478px]">
            <div className="text-sm inline-flex border border-[#222]/10 px-3 py-1 rounded-lg tracking-tight">
              Version 2.0 is here
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text mt-6">
              Pathway to Productivity
            </h1>
            <p className="text-xl tracking-tight mt-6 max-w-lg">
              Celebrate the joy of accomplishment with an app designed to track
              your progress, motivate your efforts, and celebrate your
              successes.
            </p>

            <div className="flex gap-2 items-center mt-[30px]">
              <Button className="bg-black text-white">Get for free</Button>
              <Button className="text-black bg-transparent border border-black/10">
                Learn More
              </Button>
            </div>
          </div>

          {/* Hero Images */}
          <div className="mt-20 md:mt-0 md:h-[448px] lg:h-[548px] relative">
            <Image
              priority
              unoptimized
              quality={100}
              src={Cog}
              alt="Hero cog image"
              height={40}
              width={40}
              className="mx-auto max-w-lg w-full md:h-full md:w-auto md:max-w-none"
            />
            <Image
              priority
              unoptimized
              quality={100}
              src={Cylinder}
              alt="Hero cylinder image"
              height={220}
              width={220}
              className="hidden lg:block lg:absolute -top-8 -left-28"
            />
            <Image
              priority
              unoptimized
              quality={100}
              src={Noodle}
              alt="Hero Noodle image"
              height={220}
              width={220}
              className="hidden lg:block lg:absolute top-[420px] left-[448px] rotate-[30deg]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
