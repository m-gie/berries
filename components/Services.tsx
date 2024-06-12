import React from "react";
import { services } from "@/data";
import ServiceCard from "./ServiceCard";

const Services = () => {
  return (
    <section id="services" className="max-container mt-32  max-sm:p-8">
      <h2 className="text-5xl font-bold">
        <span className="text-green-500">Premium</span> Quality Services
      </h2>
      <div className="flex min-lg:justify-center justify-between flex-wrap gap-9 mt-12">
        {services.map((service, idx) => (
          <ServiceCard key={idx} {...service} />
        ))}
      </div>
    </section>
  );
};

export default Services;
