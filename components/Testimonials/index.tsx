

import SectionTitle from "@/components/Common/SectionTitle";
import SingleTestimonial from "./SingleTestimonial";
import { Testimonial } from "@/types/testimonial";

const testimonialData: Testimonial[] = [
  {
    id: 1,
    name: "Alex Turner",
    designation: "Founder @LaunchGrid",
    content:
      "SaaS Pilot is a game-changer! Easy to use, powerful features, and perfect for startups.",
    image: "/images/testimonials/auth-01.png",
    star: 5,
  },
  {
    id: 2,
    name: "Samantha Lee",
    designation: "Founder @QuickStream",
    content:
      "Great for entrepreneurs! The free version got me started, and the premium upgrade is worth it!",
    image: "/images/testimonials/auth-02.png",
    star: 5,
  },
  {
    id: 3,
    name: "John Mitchell",
    designation: "Founder @InnovaTech",
    content:
      "Fantastic value! User-friendly and feature-packed—SaaS Pilot made scaling our SaaS product a breeze.",
    image: "/images/testimonials/auth-03.png",
    star: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="relative z-10 py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle          
          title="Admired by <span class='text-primary'>SaaS Founders, Makers,</span> and <span class='text-primary'>Developers</span>"
          paragraph="Exceptional Features, Seamless Developer Experience, Tons of Integrations and Highly Optimized!"
          center
          width="665px"
        />

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
          {testimonialData.map((testimonial) => (
            <SingleTestimonial key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
