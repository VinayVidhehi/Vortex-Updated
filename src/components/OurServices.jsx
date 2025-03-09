import React from "react";
import Accordion from "./Accordian";
import WhyChooseUs from "./WhyChooseUs";

const accordionItems = [
  {
    title: "AI Automations",
    content:
      "Streamline business operations with tailored AI solutions that improve efficiency, automate tasks, and enhance productivity.",
  },
  {
    title: "Brand Identity Creation",
    content:
      "Craft a distinct brand identity, including logos and messaging, that resonates with your target audience.",
  },
  {
    title: "Event Shoots and Post Production",
    content:
      "Capture your event professionally with high-quality photography and videography, followed by expert post-production editing.",
  },
  {
    title: "Social Media Growth",
    content:
      "Grow your brand’s online presence by creating engaging content and employing strategies to increase audience reach.",
  },
  {
    title: "Content Creation",
    content:
      "Produce tailored content—written, visual, or video—that connects with your audience and drives brand engagement.",
  },
  {
    title: "Website Design and Development",
    content:
      "Design and develop responsive, user-friendly websites that align with your brand and offer seamless user experiences.",
  },
];

const OurServices = () => {
  return (
    <div className="flex items-center justify-center min-h-screen py-10">
      <div className="flex flex-col gap-12 items-center w-11/12 md:w-10/12">
        <WhyChooseUs />

        <div className="w-full">
          {accordionItems.map((item, index) => (
            <Accordion key={index} title={item.title} index={index}>
              <p className="text-sm md:text-base leading-6 md:leading-7 text-muted-foreground esw">
                {item.content}
              </p>
            </Accordion>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurServices;
