"use client";

import React from "react";
import { testimonials } from "@/data";
import { InfiniteMovingCards } from "./ui/InfiniteCards";

const Clients = () => {
  return (
    <section id="testimonials" className="py-20">
      <h1 className="heading text-center">
        My journey<span className="text-purple"> ahead</span>
      </h1>

      <div className="flex flex-col items-center mt-10">
        <InfiniteMovingCards
          items={testimonials.map((testimonial) => ({
            heading: testimonial.heading,
            quote: testimonial.quote,
            name: testimonial.name,
            title: testimonial.title,
          }))}
          direction="right"
          speed="fast"
        />
      </div>
    </section>
  );
};

export default Clients;
