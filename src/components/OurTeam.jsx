"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

const TeamMember = ({ name, role, desc }) => {
  return (
    <div className="w-full md:w-[32%] flex flex-col gap-2 team-member shadow-xl border border-zinc-900 p-3 rounded-lg">
      <div className="flex flex-col gap-1">
        <h3 className="font-semibold text-base">{name}</h3>
        <p className="text-xs esw font-light text-zinc-300">{role}</p>
      </div>
      <p className="text-muted-foreground esw text-xs leading-6">{desc}</p>
    </div>
  );
};

const OurTeam = () => {
  const teamMembers = [
    {
      name: "Adharsh Rangappa",
      role: "CEO, Founder",
      desc: "With a strong vision for growth and innovation, leading the agency to deliver effective marketing solutions and building strong brands",
    },
    {
      name: "Vinay V",
      role: "Lead UI/UX Designer",
      desc: "Focused on creating websites that are both easy to use and visually appealing, ensuring a great experience for every user",
    },
    {
      name: "Swathi Pandey",
      role: "Content Creation Strategist",
      desc: "Creates powerful content that connects with audiences and helps build a strong online presence for our clients",
    },
    {
      name: "Priyesh Pandey",
      role: "AI Automation Strategist",
      desc: "Uses the latest technology to streamline marketing processes and improve efficiency, helping our clients achieve better results",
    },
    {
      name: "Bhisaj R",
      role: "Event CO Ordinator",
      desc: "Ensures that every event we manage runs smoothly, delivering memorable experiences and meetinf client expectations",
    },
  ];

  return (
    <div className="flex items-center justify-center bg-background">
      <div className="flex flex-col gap-12 items-center w-full">
        <div className="w-full flex flex-col gap-6 md:gap-0 md:flex-row justify-between">
          <div className="w-full md:w-1/6">
            <p className="text-muted-foreground">Team</p>
          </div>
          <div className="w-full md:w-5/6 flex flex-col gap-6 justify-between">
            <div className="w-full md:w-2/5">
              <h3 className="text-3xl font-medium uppercase">
                Meet our passionate team
              </h3>
            </div>
            <div className="w-full flex flex-wrap gap-4">
              {teamMembers.map((member, index) => (
                <TeamMember
                  key={index}
                  name={member.name}
                  role={member.role}
                  desc={member.desc}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
