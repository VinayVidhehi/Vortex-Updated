"use client";
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all"; // Import ScrollTrigger

gsap.registerPlugin(ScrollTrigger); // Register ScrollTrigger plugin

const Accordion = ({ title, children, index }) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);
  const accordionRef = useRef(null);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  const animateAccordion = () => {
    const content = contentRef.current;
    if (isOpen) {
      gsap.to(content, {
        height: content.scrollHeight, // Dynamic height based on content
        opacity: 1,
        duration: 0.5,
        ease: "power2.out",
      });
    } else {
      gsap.to(content, {
        height: 0,
        opacity: 0,
        duration: 0.5,
        ease: "power2.out",
      });
    }
  };

  // Set up GSAP ScrollTrigger for animating accordion sections when they enter the viewport
  useEffect(() => {
    ScrollTrigger.create({
      trigger: accordionRef.current,
      start: "top 90%", // Trigger the animation when 90% of the accordion item is in view
      onEnter: () => {
        gsap.to(accordionRef.current, {
          opacity: 1,
          y: 0, // Final state: fully visible and in position
          duration: 1,
          ease: "power2.out",
        });
      },

      onLeaveBack: () => {
        gsap.to(accordionRef.current, { opacity: 0, y: 56, duration: 0.5 }); // Reset when scrolling up
      },
    });
  }, []);

  // Trigger the animation on each render when the accordion opens/closes
  useEffect(() => {
    animateAccordion();
  }, [isOpen]);

  return (
    <div
      ref={accordionRef}
      className="border-b border-zinc-800 w-full flex flex-col items-center justify-center translate-y-14 cursor-pointer"
    >
      <div
        onClick={toggleAccordion}
        className="text-left h-20 w-full focus:outline-none transition-colors flex flex-row-reverse md:flex-row items-center justify-between"
      >
        <div
          aria-disabled
          className="flex flex-row-reverse md:flex-row items-center gap-10 w-1/6 md:w-1/5 justify-between"
        >
          <p>0{index + 1}</p>
          <p className="text-zinc-400 text-lg">{isOpen ? "-" : "+"}</p>
        </div>
        <h2
          className="text-sm md:text-lg font-medium md:w-1/2 w-full overflow-hidden"
          aria-disabled
        >
          {title}
        </h2>
      </div>
      <div
        aria-disabled
        ref={contentRef}
        className="overflow-hidden opacity-0 md:self-end md:w-1/2 w-full"
        style={{ height: 0 }}
      >
        <div className="py-4">{children}</div>
      </div>
    </div>
  );
};

export default Accordion;
