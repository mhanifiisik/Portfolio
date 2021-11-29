import React, { useEffect, useRef } from "react";
import lottie from "lottie-web";
import "aos/dist/aos.css";
import Aos from "aos";

function Home() {
  const container = useRef(null);
  useEffect(() => {
    Aos.init({
      duration: 3000,
    });
    lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../Assets/homesvg.json"),
    });
  });

  return (
    <section id="Home" className="h-[90vh]  relative">
      <div className="flex flex-col justify-center items-center h-full">
        <h1
          data-aos="fade-right"
          className="homeetext text-[50px] md:text-[90px] text-center dark:text-primary-dark-text "
        >
          MEHMET HANIFI ISIK
        </h1>
        <div
          data-aos="fade-left"
          ref={container}
          className="h-1/2 bg-no-repeat"
        ></div>
      </div>
    </section>
  );
}

export default Home;
