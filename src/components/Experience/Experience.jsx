import React from "react";
import { experiences } from "../../constants"; // Import your data


const Experience = () => {
  return (
    <section
      id="experience"
      className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans bg-skills-gradient clip-path-custom-2"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">EXPERIENCE</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          A collection of my work experience and the roles I have taken in
          various organizations
        </p>
      </div>

      {/* Experience Timeline */}
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute sm:left-1/2 left-0 transform -translate-x-1/2 sm:-translate-x-0 w-1 bg-white h-full"></div>

        {/* Experience Entries */}
        {experiences.map((experience, index) => (
          <div key={experience.id} className="relative mb-16">

            {/* CENTER LINE */}
            <div className="hidden sm:block absolute left-1/2 transform -translate-x-1/2 w-1 bg-white h-full"></div>

            <div className="flex flex-col sm:flex-row items-center">

              {/* LEFT SIDE */}
              <div className="hidden sm:flex w-1/2 justify-end pr-8">
                {index % 2 === 0 && (
                  <div className="w-full max-w-md p-6 rounded-2xl bg-gray-900 border border-white shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] hover:scale-105 transition text-left">
                    <h3 className="text-xl font-semibold text-white">{experience.role}</h3>
                    <h4 className="text-sm text-gray-300">{experience.company}</h4>
                    <p className="text-sm text-gray-500 mt-1">{experience.date}</p>
                    <p className="mt-3 text-gray-400">{experience.desc}</p>
                  </div>
                )}
              </div>

              {/* TIMELINE DOT */}
              <div className="flex sm:absolute sm:left-1/2 sm:-translate-x-1/2 z-10 mb-4 sm:mb-0">
                <div className="w-10 h-10 sm:w-14 sm:h-14 bg-gray-400 border-4 border-[#8245ec] rounded-full flex items-center justify-center">
                  <img
                    src={experience.img}
                    alt={experience.company}
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              </div>

              {/* RIGHT SIDE */}
              <div className="hidden sm:flex w-1/2 justify-start pl-8">
                {index % 2 !== 0 && (
                  <div className="w-full max-w-md p-6 rounded-2xl bg-gray-900 border border-white shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] hover:scale-105 transition text-left">
                    <h3 className="text-xl font-semibold text-white">{experience.role}</h3>
                    <h4 className="text-sm text-gray-300">{experience.company}</h4>
                    <p className="text-sm text-gray-500 mt-1">{experience.date}</p>
                    <p className="mt-3 text-gray-400">{experience.desc}</p>
                  </div>
                )}
              </div>

              {/* MOBILE VIEW (CLEAN STACK) */}
              <div className="sm:hidden w-full mt-4">
                <div className="p-5 rounded-2xl bg-gray-900 border border-white shadow-[0_0_20px_1px_rgba(130,69,236,0.3)]">
                  <h3 className="text-lg font-semibold text-white">{experience.role}</h3>
                  <h4 className="text-sm text-gray-300">{experience.company}</h4>
                  <p className="text-xs text-gray-500 mt-1">{experience.date}</p>
                  <p className="mt-2 text-gray-400 text-sm">{experience.desc}</p>
                </div>
              </div>

            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;