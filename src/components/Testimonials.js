import React from "react";
import { UserPlusIcon } from "@heroicons/react/24/solid";
import { testimonials } from "./data";

export default function Testimonials() {
    return (
        <section id="testimonials" >
            {/* <div className="container px-5 py-10 mx-auto text-center" key={testimonials.id}>
                <UserPlusIcon className="w-10 inline-block mb-4" />
                <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-12">
                    Work 
                </h1>
                <div className="flex flex-wrap m-4" >
                    {testimonials.map((testimonial) => (
                        <div className="p-4 md:w-1/2 w-full">
                            <div className="h-full bg-gray-800 bg-opacity-40 p-8 rounded" >
                                <CommandLineIcon className="block w-8 text-gray-500 mb-4" />
                                <p className="leading-relaxed mb-6" >
                                    {testimonial.quote}
                                </p>
                            </div>
                            <div className="inline-flex items-center">
                                <img src={testimonial.image} alt="testimonial" className="w-12 rounded-full flex-shrink-0 object-center" />
                                <span className="title-font font-medium text-white">
                                    {testimonial.name}
                                </span>
                                <span className="text-gray-500 text-sm uppercase">
                                    {testimonial.company}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div> */}
            <div className="container px-5 py-10 mx-auto text-center">
                <UserPlusIcon className="w-10 inline-block mb-4" />
                <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-12">
                    Work Experience
                </h1>
                <div className="flex flex-wrap m-6 justify-evenly" >
                {testimonials.map((testimonial) => (
                    <div className="inline-block max-w-sm m-6 p-6 bg-gray-800 border border-gray-800 ">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-white ">{testimonial.company}</h5>
                        <p className="mb-2 text-xl font-bold tracking-tight text-white ">{testimonial.position}</p>
                        <p className="font-normal text-white">{testimonial.role}</p>
                    </div>
                    ))}
                </div>
            </div>
        </section >
    );
}