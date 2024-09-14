import Button from "./Button";

import Image from "next/image";
import Star from "@/assets/star.png";
import Spring from "@/assets/spring.png";

const CTA = () => {
  return (
    <section className="bg-gradient-to-b from-white to-[#D2DCFF] py-24 overflow-x-clip">
      <div className="section-container">
        <div className="max-w-[540px] mx-auto relative">
          <h2 className="section-heading">Sign Up for free today</h2>
          <p className="section-subheading mt-5">
            Celebrate the joy of accomplishment with an app designed to track
            your progress.
          </p>

          {/* Images */}
          <Image
            priority
            unoptimized
            quality={100}
            height={360}
            width={360}
            src={Star}
            alt="Star image"
            className="hidden md:block absolute -left-[350px] -top-[137px]"
          />
          <Image
            priority
            unoptimized
            quality={100}
            height={360}
            width={360}
            src={Spring}
            alt="Star image"
            className="hidden md:block absolute -right-[331px] -top-[19px]"
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
