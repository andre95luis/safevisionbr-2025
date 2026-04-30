"use client";

import { motion } from "motion/react";
import { testimonials, type Testimonial } from "@/lib/data";

interface TestimonialsColumnProps {
  testimonials: Testimonial[];
  className?: string;
  duration?: number;
}

function TestimonialsColumn({
  testimonials,
  className = "",
  duration = 10,
}: TestimonialsColumnProps) {
  return (
    <div className={className}>
      <motion.div
        animate={{ translateY: "-50%" }}
        transition={{
          duration,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-6"
      >
        {[...Array(2)].map((_, dupIndex) => (
          <div key={dupIndex} className="flex flex-col gap-6">
            {testimonials.map((testimonial, idx) => (
              <article
                key={idx}
                className="bg-slate-800/40 border border-slate-700/50 rounded-2xl p-6"
              >
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-semibold text-white text-sm">{testimonial.name}</h4>
                  <div className="text-xs text-slate-500 bg-slate-700/50 px-2 py-1 rounded-full">
                    {testimonial.source}
                  </div>
                </div>
                <div className="flex mb-4" aria-label="5 estrelas">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-sm" aria-hidden="true">
                      ★
                    </span>
                  ))}
                </div>
                <blockquote className="text-slate-300 text-xs leading-relaxed">
                  &quot;{testimonial.text}&quot;
                </blockquote>
              </article>
            ))}
          </div>
        ))}
      </motion.div>
    </div>
  );
}

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-slate-950" aria-label="Avaliações de clientes">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
              O que nossos clientes dizem
            </span>
            <br />
            <span className="bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
              sobre a Safe Vision BR
            </span>
          </h2>
        </motion.div>

        <div className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[740px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn
            testimonials={secondColumn}
            className="hidden md:block"
            duration={19}
          />
          <TestimonialsColumn
            testimonials={thirdColumn}
            className="hidden lg:block"
            duration={17}
          />
        </div>
      </div>
    </section>
  );
}
