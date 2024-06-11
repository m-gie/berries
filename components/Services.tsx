import React from "react";
import { services } from "@/data";
import ServiceCard from "./ServiceCard";

const Services = () => {
  return (
    <section
      id="products"
      className="max-container mt-32 flex min-lg:justify-center justify-between flex-wrap gap-9"
    >
      {services.map((service, idx) => (
        <ServiceCard key={idx} {...service} />
      ))}
    </section>
  );
};

export default Services;
