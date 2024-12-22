"use client";

import React from "react";
import { testimonials } from "@/data";

const Clients = () => {
  return (
    <section id="testimonials" className="py-20">
      <h1 className="heading">
        My journey
        <span className="text-purple"> ahead</span>
      </h1>

      <div className="flex flex-wrap justify-center gap-8 mt-10">
        {testimonials.map((item, index) => (
          <div
            key={index}
            className="card bg-white dark:bg-gray-900 p-4 rounded-lg shadow-md text-center max-w-sm"
          >
            {item.heading && (
              <h3 className="text-sm font-medium text-gray-500 mb-2">
                {item.heading}
              </h3>
            )}
            <blockquote className="text-lg italic mb-4">
              {item.quote}
            </blockquote>
            <p className="font-semibold">{item.name}</p>
            <p className="text-sm text-gray-400">{item.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Clients;
