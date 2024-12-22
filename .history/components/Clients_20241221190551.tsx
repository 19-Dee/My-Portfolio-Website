// Updated Clients.tsx
import { testimonials } from "@/data";

const TestimonialCard = ({ heading, quote, name, title }) => (
  <div className="testimonial-card p-4 rounded-lg shadow-md bg-gray-800 text-white">
    {heading && (
      <h3 className="text-sm font-medium text-gray-400 mb-2">{heading}</h3>
    )}
    <blockquote className="italic text-lg mb-4">&quot;{quote}&quot;</blockquote>
    <p className="font-semibold text-base">{name}</p>
    <p className="text-sm text-gray-400">{title}</p>
  </div>
);

const Clients = () => (
  <section id="testimonials" className="py-10">
    <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
      {testimonials.map((testimonial, index) => (
        <TestimonialCard
          key={index}
          heading={testimonial.heading}
          quote={testimonial.quote}
          name={testimonial.name}
          title={testimonial.title}
        />
      ))}
    </div>
  </section>
);

export default Clients;
