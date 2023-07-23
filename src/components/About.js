import React from "react";
import coding from './coding.svg'
export default function About() {
    return (
        <>
            <section id="about">
                <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
                    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
                            Hey, I'm Saad.
                            <br className="hidden lg:inline-block" /> I am a Front-ent developer.
                        </h1>
                        <p className="mb-8 leading-relaxed">
                            Results-driven and adaptable team player with exceptional communication skills and
                            strong problem-solving ability. Thrives in high-pressure environments, quickly learning and adapting to new challenges
                        </p>
                        <div className="flex justifyicenter">
                            <a href="#contact" className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
                                Work With Me
                            </a>
                            <a href="#projects" className="ml-4 inline-flex text-gray-400 bg-gray-80 border-0 py-2 px-6 focus:outline-none hover:ng-gray-700 hover:text-white rounded text-lg">
                                My Work
                            </a>
                        </div>
                    </div>
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                        <img className="object-cover object-center rounded" src={coding} alt="hero" />
                    </div>
                </div>
            </section>
        </>
    );
}