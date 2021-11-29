import React, { useState, useEffect } from "react";
import projects from "../Data/projectdata";
import "aos/dist/aos.css";
import Aos from "aos";

function Projects() {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(projects);
    Aos.init({
      duration: 3000,
    });
  }, []);

  return (
    <section id="Projects">
      <div className="flex flex-col p-5 gap-y-5">
        <h1 className="font-bold  dark:text-primary-dark-text">MY PROJECTS</h1>
        <div className="grid grid-cols-1 gap-y-5">
          {projects.map((project) => (
            <article
              data-aos="fade-up"
              key={project.id}
              className="grid grid-cols-2 md:grid-cols-3 h-96 border border-black dark:border-primary-dark-text"
            >
              <div className="col-span-2 md:col-span-1 dark:text-primary-dark-text justify-center text-center items-center flex flex-col gap-y-5">
                <h1>{project.projectname}</h1>
                <div className="flex flex-col gap-y-5">
                  <a
                    className="border border-black p-2 hover:bg-red-500 hover:text-white dark:border-primary-dark-text"
                    href={project.sourcelink}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Source Code
                  </a>
                  <a
                    className="border border-black p-2 hover:bg-red-500 hover:text-white dark:border-primary-dark-text"
                    href={project.livelink}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live Preview
                  </a>
                </div>
              </div>
              <div className="col-span-2 hidden md:block">
                <img
                  src={project.image}
                  className="w-full h-96 object-cover"
                  alt={project.description}
                />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
