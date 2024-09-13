import { pricingData } from "@/lib/data";
import { CheckCircle2 } from "lucide-react";

import Button from "./Button";
import { twMerge } from "tailwind-merge";

const Pricing = () => {
  return (
    <section className="py-24">
      <div className="section-container">
        <div className="max-w-[540px] mx-auto">
          <h2 className="section-heading">Pricing</h2>
          <p className="section-subheading mt-5">
            Free forever. Upgrade for unlimited tasks, better security, and
            exclusive features.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-6 items-center lg:items-end lg:justify-center mt-10">
          {pricingData.map((tier) => (
            <div
              key={tier.title}
              className={twMerge(
                "max-w-[380px] w-full p-10 border border-black/15 rounded-3xl",
                tier.inverse && "border border-white/40 bg-black text-white"
              )}
            >
              <div className="flex justify-between">
                <h3
                  className={twMerge(
                    "text-lg font-bold text-black/50",
                    tier.inverse && "text-white/60"
                  )}
                >
                  {tier.title}
                </h3>
                {tier.popular && (
                  <div className="inline-flex text-sm px-4 py-1.5 rounded-md border border-white/20">
                    <span className="font-medium bg-[linear-gradient(to_right,#DD7DDF,#E1CD86,#BBCB92,#71C2EF,#3BFFFF,#DD7DDF)] text-transparent bg-clip-text">
                      Popular
                    </span>
                  </div>
                )}
              </div>

              <div className="flex items-baseline gap-1 mt-[30px]">
                <span className="leading-none text-4xl font-bold tracking-tighter">
                  {tier.monthlyPrice}$
                </span>
                <span className="tracking-tight font-bold text-black/50">
                  /month
                </span>
              </div>
              <Button
                className={twMerge(
                  "w-full mt-4",
                  tier.inverse && "bg-white text-black"
                )}
              >
                {tier.buttonText}
              </Button>

              <ul className="flex flex-col gap-5 mt-8">
                {tier.features.map((feature) => (
                  <li key={feature} className="text-sm flex gap-2">
                    <CheckCircle2 className="size-6" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
