import AboutUs from "@/components/AboutUs";
import OurServices from "@/components/OurServices";
import Link from "next/link";
import { HiArrowLongRight } from "react-icons/hi2";
export default function Home() {
  return (
    <>
      <main className="flex items-end justify-center min-h-screen pt-28 md:py-0 md:h-screen overflow-hidden  bg-[url(/images/bg.jpg)] bg-cover bg-center">
        <div className="w-11/12 md:w-10/12 flex flex-col md:flex-row-reverse gap-16 justify-evenly items-start h-full relative">
          <div className="w-full md:w-1/2 flex flex-col gap-5 h-fit md:h-full justify-center">
            <h1 className="font-bold text-4xl md:text-5xl uppercase">
              Where Creativity Meets Data-Driven Results
            </h1>
            <p className="esw tracking-wider">
              An AI marketing agency crafted for impact
            </p>
            <div className="flex items-center gap-4">
              <button className="px-5 py-3 bg-foreground text-background esw text-sm rounded-md">
                Explore work
              </button>
              <Link href={"/contact"} className="esw flex items-center gap-1">
                Get in touch
                <HiArrowLongRight />
              </Link>
            </div>
          </div>
          <div className="w-full md:w-1/2 h-fit md:h-full flex items-end relative overflow-hidden">
            <img
              src="/images/main.png"
              alt=""
              className="w-full h-auto object-cover z-30"
            />
          </div>
        </div>
      </main>
      <OurServices />
    </>
  );
}
