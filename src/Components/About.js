import React, { useRef, useEffect } from "react";
import { AiFillCaretRight } from "react-icons/ai";
import hoverEffect from "hover-effect";
import image2 from "../Assets/me.jpg";
import image3 from "../Assets/mnalisa.jpg";
import "aos/dist/aos.css";
import Aos from "aos";

function About() {
  const container = useRef();

  useEffect(() => {
    Aos.init({
      duration: 3000,
    });
    new hoverEffect(
      {
        parent: container.current,
        intensity: 0.3,
        image1: image3,
        image2: image2,
        displacementImage:
          "https://raw.githubusercontent.com/robin-dela/hover-effect/master/images/fluid.jpg",
      },
      []
    );
  }, [container]);
  return (
    <section
      id="About"
      className="border-t border-b border-black dark:border-primary-dark-text"
    >
      <div className="flex flex-col md:flex-row p-5 gap-5">
        <div data-aos="fade-right" className="w-full md:w-1/3 md:flex-none h-full">
          <div ref={container} className="h-[350px] w-full object-fill"></div>
        </div>
        <div
          data-aos="fade-left"
          className="col-span flex-1 flex flex-col gap-y-5 dark:text-primary-dark-text "
        >
          <h1 className="font-bold">ABOUT ME</h1>
          <p>
            Hello! , My name is Mehmet Hanifi and I am Software Developer from
            Turkey.I have recently graduated from University in majoring
            Computer Engineering. I like interactive web designing and coding.
            Briefly, I have a deep passion for Front-end Development and
            Back-end Development.
          </p>
          <h2>Technologies that i have experienced</h2>
          <ul className="grid grid-cols-2 gap-y-2">
            <li className="flex items-center gap-x-1">
              <AiFillCaretRight />
              <span>HTML/CSS</span>
            </li>
            <li className="flex items-center gap-x-1">
              <AiFillCaretRight />
              <span>ReactJS</span>
            </li>
            <li className="flex items-center gap-x-1">
              <AiFillCaretRight />
              <span>Javascript</span>
            </li>
            <li className="flex items-center gap-x-1">
              <AiFillCaretRight />
              <span>Tailwind</span>
            </li>
            <li className="flex items-center gap-x-1">
              <AiFillCaretRight />
              <span>PYTHON</span>
            </li>
            <li className="flex items-center gap-x-1">
              <AiFillCaretRight />
              <span>SQL</span>
            </li>
            <li className="flex items-center gap-x-1">
              <AiFillCaretRight />
              <span>FIGMA</span>
            </li>
            <li className="flex items-center gap-x-1">
              <AiFillCaretRight />
              <span>GIT/GITHUB</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default About;
