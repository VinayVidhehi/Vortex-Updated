"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all"; // Import ScrollTrigger

gsap.registerPlugin(ScrollTrigger); // Register ScrollTrigger plugin

const WhyChooseUs = () => {
  const titleRef = useRef(null);
  const paragraphRef = useRef(null);

  useEffect(() => {
    // Animate the title when it enters the viewport
    gsap.from(titleRef.current, {
      opacity: 0,
      y: 30,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: titleRef.current,
        start: "top 80%", // Trigger when 80% of the element is in view
        end: "top 30%", // Optional, control when the animation should end
        scrub: true, // This makes the animation smooth and controlled as you scroll
        once: true, // Animation will trigger only once when entering the viewport
      },
    });

    // Split the paragraph into words and animate each word one by one
    const words = paragraphRef.current.querySelectorAll("span");
    gsap.from(words, {
      opacity: 0.2,
      y: 10,
      color: "gray",
      duration: 1,
      ease: "power2.out",
      stagger: 0.1, // Stagger the animation for each word with a 0.1 second delay
      scrollTrigger: {
        trigger: paragraphRef.current,
        start: "top 80%", // Trigger the animation when 80% of the paragraph is in view
        end: "top 30%",
        scrub: true,
      },
    });
  }, []);

  return (
    <div className="w-full flex flex-col gap-6 md:gap-0 md:flex-row justify-between">
      <div className="w-full md:w-1/6">
        <p className="text-muted-foreground esw">Our Services</p>
      </div>
      <div className="w-full md:w-5/6 flex flex-col gap-4 md:gap-0 md:flex-row justify-between">
        <div className="w-full md:w-1/3" ref={titleRef}>
          <h3 className="text-2xl font-medium uppercase">
            Crafting Growth through data-driven insights
          </h3>
        </div>
        <div className="w-full md:w-3/5" ref={paragraphRef}>
          <p className="leading-8 text-muted-foreground esw">
            {/* Split the text into words by wrapping each word in a span */}
            <span>Many</span> <span>agencies</span> <span>offer</span>{" "}
            <span>similar</span> <span>services,</span> <span>but</span>{" "}
            <span>no</span> <span>one</span> <span>does</span> <span>it</span>{" "}
            <span>like</span> <span>us.</span> <span>With</span>{" "}
            <span>innovative</span> <span>strategies,</span>{" "}
            <span>AI-driven</span> <span>precision,</span> <span>and</span>{" "}
            <span>creative</span> <span>solutions,</span> <span>we</span>{" "}
            <span>make</span> <span>your</span> <span>brand</span>{" "}
            <span>stand</span> <span>out</span> <span>in</span> <span>a</span>{" "}
            <span>crowded</span> <span>market.</span> <span>At</span>{" "}
            <span>Vortex</span> <span>Media,</span> <span>we</span>{" "}
            <span>offer</span> <span>more</span> <span>than</span>{" "}
            <span>just</span> <span>marketing</span> <span>–</span>{" "}
            <span>we</span> <span>deliver</span> <span>results.</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
