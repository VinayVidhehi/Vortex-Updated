"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all"; // Import ScrollTrigger

gsap.registerPlugin(ScrollTrigger); // Register ScrollTrigger plugin

const AboutUs = () => {
  const titleRef = useRef(null);
  const paragraphRef = useRef(null);

  return (
    <div className="flex items-center justify-center py-16">
      <div className="flex flex-col gap-12 items-center w-full">
        <div className="w-full text-center">
          <h3 className="text-4xl md:text-5xl font-medium uppercase">
            We are VORTEX
          </h3>
        </div>
        <div className="w-full flex flex-col gap-6 md:gap-0 md:flex-row justify-between">
          <div className="w-full md:w-1/6">
            <p className="esw">Our Mission</p>
          </div>

          <div className="w-full md:w-4/5">
            <p className="leading-8 text-muted-foreground esw">
              {/* Split the text into words by wrapping each word in a span */}
              To help businesses grow by integrating AI-driven marketing
              solutions, making digital marketing more efficient, data-backed,
              and results-oriented. We simplify complex processes, so businesses
              can focus on what truly matters—acquiring clients and expanding
              their reach.
            </p>
          </div>
        </div>
        <div className="w-full flex flex-col gap-6 md:gap-0 md:flex-row justify-between">
          <div className="w-full md:w-1/6">
            <p className="esw">Our Vision</p>
          </div>
          <div className="w-full md:w-4/5">
            <p className="leading-8 text-muted-foreground esw">
              {/* Split the text into words by wrapping each word in a span */}
              To be the leading AI marketing agency, empowering brands with
              cutting-edge automation and educating businesses on AI’s role in
              marketing transformation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
