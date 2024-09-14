import { testimonials } from "@/lib/data";
import TestimonialCard from "./TestimonialCard";

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
          <h2 className="section-heading">What our users say</h2>
          <p className="section-subheading">
            From intuitive design to powerful features, our app has become an
            essential tool for users around the world.
          </p>
        </div>

        {/* Testimonials */}
        <div className="flex justify-center gap-6">
          <div className="flex flex-col gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)]">
            {firstColumn.map((testimonial) => (
              <TestimonialCard key={testimonial.name} {...testimonial} />
            ))}
          </div>
          <div className="hidden md:flex flex-col gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)]">
            {secondColumn.map((testimonial) => (
              <TestimonialCard key={testimonial.name} {...testimonial} />
            ))}
          </div>
          <div className="hidden lg:flex flex-col gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)]">
            {thirdColumn.map((testimonial) => (
              <TestimonialCard key={testimonial.name} {...testimonial} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
