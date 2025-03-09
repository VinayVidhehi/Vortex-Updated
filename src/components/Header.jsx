"use client";
import React, { useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { HiArrowLongRight } from "react-icons/hi2";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
gsap.registerPlugin(ScrollTrigger);

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const menubtn = document.querySelector("#menubtn");
    const path1 = document.querySelector("#path1");
    const path2 = document.querySelector("#path2");

    // Open menu animation
    const openMenu = () => {
      // Hamburger icon transformation with smoother curve
      gsap.to(path1, {
        attr: { d: "M 0 0 L 17 16" },
        duration: 0.4,
      });
      gsap.to(path2, {
        attr: { d: "M 0 16 L 17 1" },
        duration: 0.4,
      });

      // Icon stroke color change
      gsap.to("#menubtn", { attr: { stroke: "#fff" }, duration: 0.4 });

      // Animate the menu opening with smoother back.in and opacity fade
      gsap.to("#menu", {
        height: "320px",
        opacity: 1,
        duration: 0.6,
        ease: "back.out(1.7)",
      });

      gsap.to("#nav", {
        background: "#111",
        duration: 0.6,
      });

      // Animate content to appear with slight delay for smoother visual
      gsap.to(".content", {
        display: "flex",
        duration: 0.5,
        delay: 0.5,
      });
    };

    // Close menu animation
    const closeMenu = () => {
      // Revert hamburger icon transformation back to initial position
      gsap.to(path1, {
        attr: { d: "M 0 5 L 25 5" },
        duration: 0.4,
      });
      gsap.to(path2, {
        attr: { d: "M 0 13 L 25 13" },
        duration: 0.4,
      });

      // Icon stroke revert to original color
      gsap.to("#menubtn", { attr: { stroke: "#000" }, duration: 0.4 });

      // Animate the menu closing with a smooth transition
      gsap.to("#menu", {
        height: 0,
        opacity: 0,
        duration: 0.6,
        delay: 0.1,
        ease: "back.in(1.7)",
      });

      gsap.to("#nav", {
        background: "rgb(0 0 0 / 0.0)",
        duration: 0.6,
      });

      // Hide content after delay for smoother transition
      gsap.to(".content", {
        display: "none",
        duration: 0.5,
      });
    };

    // Trigger open/close based on menu state
    if (menuOpen) {
      openMenu();
    } else {
      closeMenu();
    }
  }, [menuOpen]);

  return (
    <div className="w-full flex items-center justify-center h-fit fixed top-0 z-40 py-2">
      <nav
        id="nav"
        className={`w-[95%] md:w-10/12 flex flex-col items-center justify-between h-fit overflow-hidden bg-transparent backdrop-blur px-3 rounded-lg gap-4 shadow-2xl shadow-[#324F53]/40`}
      >
        <div className="flex items-center justify-between w-full h-16">
          <div className="flex items-center justify-center gap-2 z-20">
            <img
              id="logo"
              src="/icons/vortex-white.svg"
              alt=""
              className="w-6"
            />
            <h3 className="font-bold text-xl">VORTEX</h3>
          </div>

          <div className="flex items-center justify-center h-full gap-12">
            <div className="hidden md:flex items-center justify-center gap-10 tracking-wide">
              <Link href={"/"} className="text-sm esw">
                Home
              </Link>
              <Link href={"/work"} className="text-sm esw">
                Explore
              </Link>
              <Link href={"/services"} className="text-sm esw">
                Services
              </Link>
              <Link href={"/about"} className="text-sm esw">
                About Us
              </Link>
              <Link
                href={"/contact"}
                className="text-xs px-5 py-3 bg-foreground text-background rounded flex items-center gap-1 esw"
              >
                Let's Connect
                <HiArrowLongRight />
              </Link>
            </div>

            <div
              onClick={toggleMenu}
              className="md:hidden flex items-start justify-center gap-14 z-40 rounded-full"
            >
              <svg
                id="menubtn"
                width="24"
                height="18"
                className="stroke-white cursor-pointer"
              >
                <path id="path1" d="M 0 5 L 25 5" />
                <path id="path2" d="M 0 13 L 25 13" />
              </svg>
            </div>
          </div>
        </div>

        <div
          id="menu"
          className={`md:hidden w-full flex flex-col gap-2 text-sm tracking-wide font-light ${
            menuOpen ? "flex" : "hidden"
          }`}
        >
          <Link
            href={"/"}
            className="border-b border-zinc-800 h-1/6 flex items-center"
          >
            Home
          </Link>
          <Link
            href={"/work"}
            className="border-b border-zinc-800 h-1/6 flex items-center"
          >
            Explore
          </Link>
          <Link
            href={"/services"}
            className="border-b border-zinc-800 h-1/6 flex items-center"
          >
            Services
          </Link>
          <Link
            href={"/about"}
            className="border-b border-zinc-800 h-1/6 flex items-center"
          >
            About Us
          </Link>
          <Link
            href={"/contact"}
            className="border-b border-zinc-800 h-1/6 flex items-center gap-1"
          >
            Let's Connect
            <HiArrowLongRight />
          </Link>
          <div className="flex items-center justify-center gap-6 h-1/6 my-2">
            <Link
              href={"/company"}
              className="border-b border-zinc-800 py-px flex gap-1 items-center"
            >
              <FaInstagram />
            </Link>
            <Link
              href={"/company"}
              className="border-b border-zinc-800 py-px flex gap-1 items-center"
            >
              <FaLinkedinIn />
            </Link>
            <Link
              href={"/company"}
              className="border-b border-zinc-800 py-px flex gap-1 items-center"
            >
              <FaFacebookF />
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
