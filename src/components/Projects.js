import { CodeBracketIcon } from "@heroicons/react/24/solid";
import React from "react";
import { projects } from "./data";
// import weatherapp from '../weatherapp.jpg';

export default function Projects() {
  return (
    <section id="projects" className="text-gray-400 bg-gray-900 body-font">

      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <CodeBracketIcon className="mx-auto inline-block w-10 mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            Projects
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Some of the project that i have built using my skiils.
          </p>
        </div>
        <div className="flex flex-wrap m-4">
          {projects.map((project) => (
            <a
              href={project.link}
              key={project.image}
              className="sm:w-1/2 w-100 p-4">
              <div className='flex items-center justify-center from-teal-100 via-teal-300 to-teal-500 bg-gradient-to-br'>
                <div
                  className="overflow-hidden aspect-video bg-red-400 cursor-pointer  relative group"
                >
                  <div
                    className="rounded-xl z-50 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer absolute from-black/80 to-transparent bg-gradient-to-t inset-x-0 -bottom-2 pt-30 text-white flex items-end"
                  >
                    <div>
                      <div
                        className="transform-gpu p-4 space-y-3 text-xl group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 pb-10 transform transition duration-300 ease-in-out"
                      >
                        <div className="font-bold">{project.title}</div>

                        <div className="opacity-60 text-sm ">
                        {project.description}
                        </div>
                      </div>
                    </div>
                  </div>
                  <img
                    alt=""
                    className="object-cover w-full aspect-square group-hover:scale-110 transition duration-300 ease-in-out"
                    src={project.imagelink} />
                </div>
              </div>
              {/* <div className="flex relative">
              <img
                alt="gallery"
                className="absolute inset-0 w-full h-full object-cover object-center"
                src={project.image} 
              /> 
              <img src={project.image} alt="" className="absolute inset-0 w-full h-full object-cover object-center"/>
              <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                  {project.subtitle}
                </h2>
                <h1 className="title-font text-lg font-medium text-white mb-3">
                  {project.title}
                </h1>
                <p className="leading-relaxed">{project.description}</p>
              </div>
            </div> */}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}