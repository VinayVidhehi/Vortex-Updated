"use client";
import React, { useRef } from "react";

// List of services with title and image source
const services = [
  { title: "AI Automations", image: "/images/services/service1.jpg" },
  {
    title: "Event Shoots and Post Production",
    image: "/images/services/service2.jpg",
  },
  { title: "Content Creation", image: "/images/services/service3.jpg" },
  {
    title: "Website Design and Development",
    image: "/images/services/service4.jpg",
  },
  { title: "Social Media Growth", image: "/images/services/service5.jpg" },
  { title: "Brand Identity Creation", image: "/images/services/service6.jpg" },
];

const ServicesPage = () => {

  return (
    <div className="flex items-center justify-center min-h-screen bg-background py-28">
      <div className="w-11/12 md:w-10/12 flex flex-col md:flex-row gap-12">
        <div className="w-full md:w-1/6">
          <p className="text-muted-foreground esw">About Us</p>
        </div>
        <div className="w-full md:w-11/12 flex flex-col gap-6">
          <div className="w-full md:w-3/5">
            <h3 className="text-3xl font-medium uppercase">
              Crafting Growth through data-driven insights
            </h3>
          </div>
         

          {/* Services Section */}
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-10">
            {services.map((service, index) => (
              <div
                key={index}
                className="service-card flex flex-col items-center justify-center text-center"
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-max rounded-lg mb-4"
                />
                <h3 className="text-sm md:text-base font-medium">
                  {service.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
