import { testimonials } from "../constants";
import TestimonialCard from "./TestimonialCard";

const Testimonials = () => {
  return (
    <section className="container mx-auto pt-12 pb-16 xl:py-40 px-5">
      <h2 className="font-serif font-black text-center text-2xl uppercase tracking-[0.2em] text-neutral-grayish-blue-500 mb-20">
        Client Testimonials
      </h2>
      <div className="flex sm:justify-between flex-col md:flex-row flex-wrap gap-12 xl:gap-0">
        {testimonials.map((testimonial) => (
          <TestimonialCard key={testimonial.id} {...testimonial} />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
