"use client";

import React from "react";
import { testimonials } from "@/data";
import { InfiniteMovingCards } from "./ui/InfiniteCards";

const Clients = () => {
  return (
    <section id="testimonials" className="py-20">
      <h1 className="heading">
        My journey
        <span className="text-purple"> ahead</span>
      </h1>

      <div className="flex flex-col items-center mt-10">
        <div className="h-[50vh] md:h-[30rem] rounded-md relative overflow-hidden">
          {/* InfiniteMovingCards renders the testimonials */}
          <InfiniteMovingCards
            items={testimonials.map((testimonial) => ({
              heading: testimonial.heading,
              quote: testimonial.quote,
              name: testimonial.name,
              title: testimonial.title,
              content: (
                <div className="card bg-white dark:bg-gray-900 p-4 rounded-lg shadow-md text-center max-w-sm">
                  {testimonial.heading && (
                    <h3 className="text-sm font-medium text-gray-500 mb-2">
                      {testimonial.heading}
                    </h3>
                  )}
                  <blockquote className="text-lg italic mb-4">
                    {testimonial.quote}
                  </blockquote>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-gray-400">{testimonial.title}</p>
                </div>
              ),
            }))}
            direction="right"
            speed="slow"
          />
        </div>
      </div>
    </section>
  );
};

export default Clients;
