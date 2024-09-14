import { testimonials } from "@/lib/data";
import TestimonialCards from "./TestimonialCards";

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

const Testimonial = () => {
  return (
    <section className="bg-white">
      <div className="section-container">
        <div className="max-w-[540px] mx-auto">
          <div className="flex justify-center">
            <div className="text-sm inline-flex border border-[#222]/10 px-3 py-1 rounded-lg tracking-tight">
              Testimonials
            </div>
          </div>
          <h2 className="section-heading mt-5">What our users say</h2>
          <p className="section-subheading mt-5">
            From intuitive design to powerful features, our app has become an
            essential tool for users around the world.
          </p>
        </div>

        {/* Testimonials */}
        <div className="flex justify-center gap-6 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] mt-10 max-h-[738px] overflow-hidden">
          <TestimonialCards testimonials={firstColumn} duration={12} />
          <TestimonialCards
            testimonials={secondColumn}
            className="hidden md:block"
            duration={18}
          />
          <TestimonialCards
            testimonials={thirdColumn}
            className="hidden lg:block"
            duration={16}
          />
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
