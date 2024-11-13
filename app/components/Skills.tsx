import React from "react";

function Skills() {
  return (
    <section className="flex flex-col items-center py-[10vmin] px-6 md:px-12 bg-white sm:w-[98%] w-[95%] m-auto rounded-[25px] mt-2">
      <div className="text-center font-poppins">
        <span className="tracking-widest text-[0.8em] text-purple font-[500] uppercase">My Skills</span>
        <h3 className="lg:text-[2.2em] md:text-[1.8em] sm:text-[1.5em] text-[1.2em] font-semibold">Skills & Expertise</h3>
        <p className="text-[0.7em] md:text-[1em] sm:text-[0.85em] max-w-[600px] mx-auto">
          I bring a wide range of skills in front-end development, UI/UX design, and responsive web technologies. Here are some key areas of expertise.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-8 w-full max-w-[1200px]">
        {/* Skill items with circular ratings and descriptions */}
        <div className="flex flex-col items-center bg-gray-100 p-4 rounded-[15px] shadow-md">
          <span className="text-purple font-semibold text-lg">HTML</span>
          <p className="text-sm text-gray-700 text-center mb-2">Markup Language</p>
          <div className="relative mt-4">
            <div className="w-28 h-28 rounded-full border-4 border-purple flex items-center justify-center text-purple text-lg font-bold bg-white">
              98%
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center bg-gray-100 p-4 rounded-[15px] shadow-md">
          <span className="text-purple font-semibold text-lg">CSS & Tailwind</span>
          <p className="text-sm text-gray-700 text-center mb-2">Styling & Layout</p>
          <div className="relative mt-4">
            <div className="w-28 h-28 rounded-full border-4 border-purple flex items-center justify-center text-purple text-lg font-bold bg-white">
              92%
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center bg-gray-100 p-4 rounded-[15px] shadow-md">
          <span className="text-purple font-semibold text-lg">JavaScript</span>
          <p className="text-sm text-gray-700 text-center mb-2">Logic & Interactivity</p>
          <div className="relative mt-4">
            <div className="w-28 h-28 rounded-full border-4 border-purple flex items-center justify-center text-purple text-lg font-bold bg-white">
              85%
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center bg-gray-100 p-4 rounded-[15px] shadow-md">
          <span className="text-purple font-semibold text-lg">React & Next.js</span>
          <p className="text-sm text-gray-700 text-center mb-2">Frameworks</p>
          <div className="relative mt-4">
            <div className="w-28 h-28 rounded-full border-4 border-purple flex items-center justify-center text-purple text-lg font-bold bg-white">
              60%
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center bg-gray-100 p-4 rounded-[15px] shadow-md">
          <span className="text-purple font-semibold text-lg">TypeScript</span>
          <p className="text-sm text-gray-700 text-center mb-2">Typed JavaScript</p>
          <div className="relative mt-4">
            <div className="w-28 h-28 rounded-full border-4 border-purple flex items-center justify-center text-purple text-lg font-bold bg-white">
              80%
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center bg-gray-100 p-4 rounded-[15px] shadow-md">
          <span className="text-purple font-semibold text-lg">Bootstrap</span>
          <p className="text-sm text-gray-700 text-center mb-2">Responsive UI</p>
          <div className="relative mt-4">
            <div className="w-28 h-28 rounded-full border-4 border-purple flex items-center justify-center text-purple text-lg font-bold bg-white">
              82%
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center bg-gray-100 p-4 rounded-[15px] shadow-md">
          <span className="text-purple font-semibold text-lg">jQuery</span>
          <p className="text-sm text-gray-700 text-center mb-2">DOM Manipulation</p>
          <div className="relative mt-4">
            <div className="w-28 h-28 rounded-full border-4 border-purple flex items-center justify-center text-purple text-lg font-bold bg-white">
              75%
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
