import projectImage1 from "../../public/images/project-1.png";
import projectImage2 from "../../public/images/project-2.png";
import projectImage3 from "../../public/images/project-3.png";
import projectImage4 from "../../public/images/project-4.png";
import projectImage5 from "../../public/images/project-5.png";
import projectImage6 from "../../public/images/project-6.png";
import projectImage7 from "../../public/images/project-7.png";
import projectImage8 from "../../public/images/project-8.png";
import projectImage9 from "../../public/images/project9.png";
import Image from "next/image";

function Projects() {
  return (
    <div>
      <section className="bg-white py-[10vmin] px-6 sm:w-[98%] w-[95%] m-auto rounded-[25px] mt-2">
        <div className="text-center">
          <span className="tracking-widest font-poppins text-[0.8em] text-purple font-[500] uppercase">
            My Work
          </span>
          <h2 className="lg:text-[2.2em] md:text-[1.8em] sm:text-[1.5em] text-[1.2em] font-semibold mt-2">
            Featured Projects
          </h2>
          <p className="text-[#838383] text-[0.8em] sm:text-[0.9em] lg:text-[1em] mt-4">
            Explore some of my recent work and the projects I have contributed to. These projects showcase my expertise in frontend development.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-10 mt-10">
          {/* Project 1 */}
          <div className="w-full bg-lightGrey rounded-[15px] overflow-hidden shadow-md">
            <div className="relative w-full h-[250px]">
              <Image
                src={projectImage1}
                alt="Project 1"
                layout="fill"
                objectFit="cover"
                className="rounded-t-[15px]"
              />
            </div>
            <div className="p-4">
              <h4 className="text-lg font-semibold">Project 1</h4>
              <p className="text-sm text-[#838383] mt-2">A brief description of the project.</p>
              <button className="mt-4 px-6 py-2 text-white bg-purple hover:bg-purpleHover rounded-[5px]">
                View Project
              </button>
            </div>
          </div>

          {/* Project 2 */}
          <div className="w-full bg-lightGrey rounded-[15px] overflow-hidden shadow-md">
            <div className="relative w-full h-[250px]">
              <Image
                src={projectImage2}
                alt="Project 2"
                layout="fill"
                objectFit="cover"
                className="rounded-t-[15px]"
              />
            </div>
            <div className="p-4">
              <h4 className="text-lg font-semibold">Project 2</h4>
              <p className="text-sm text-[#838383] mt-2">A brief description of the project.</p>
              <button className="mt-4 px-6 py-2 text-white bg-purple hover:bg-purpleHover rounded-[5px]">
                View Project
              </button>
            </div>
          </div>

          {/* Project 3 */}
          <div className="w-full bg-lightGrey rounded-[15px] overflow-hidden shadow-md">
            <div className="relative w-full h-[250px]">
              <Image
                src={projectImage3}
                alt="Project 3"
                layout="fill"
                objectFit="cover"
                className="rounded-t-[15px]"
              />
            </div>
            <div className="p-4">
              <h4 className="text-lg font-semibold">Project 3</h4>
              <p className="text-sm text-[#838383] mt-2">A brief description of the project.</p>
              <button className="mt-4 px-6 py-2 text-white bg-purple hover:bg-purpleHover rounded-[5px]">
                View Project
              </button>
            </div>
          </div>

          {/* Project 4 */}
          <div className="w-full bg-lightGrey rounded-[15px] overflow-hidden shadow-md">
            <div className="relative w-full h-[250px]">
              <Image
                src={projectImage4}
                alt="Project 4"
                layout="fill"
                objectFit="cover"
                className="rounded-t-[15px]"
              />
            </div>
            <div className="p-4">
              <h4 className="text-lg font-semibold">Project 4</h4>
              <p className="text-sm text-[#838383] mt-2">A brief description of the project.</p>
              <button className="mt-4 px-6 py-2 text-white bg-purple hover:bg-purpleHover rounded-[5px]">
                View Project
              </button>
            </div>
          </div>

          {/* Project 5 */}
          <div className="w-full bg-lightGrey rounded-[15px] overflow-hidden shadow-md">
            <div className="relative w-full h-[250px]">
              <Image
                src={projectImage5}
                alt="Project 5"
                layout="fill"
                objectFit="cover"
                className="rounded-t-[15px]"
              />
            </div>
            <div className="p-4">
              <h4 className="text-lg font-semibold">Project 5</h4>
              <p className="text-sm text-[#838383] mt-2">A brief description of the project.</p>
              <button className="mt-4 px-6 py-2 text-white bg-purple hover:bg-purpleHover rounded-[5px]">
                View Project
              </button>
            </div>
          </div>

          {/* Project 6 */}
          <div className="w-full bg-lightGrey rounded-[15px] overflow-hidden shadow-md">
            <div className="relative w-full h-[250px]">
              <Image
                src={projectImage6}
                alt="Project 6"
                layout="fill"
                objectFit="cover"
                className="rounded-t-[15px]"
              />
            </div>
            <div className="p-4">
              <h4 className="text-lg font-semibold">Project 6</h4>
              <p className="text-sm text-[#838383] mt-2">A brief description of the project.</p>
              <button className="mt-4 px-6 py-2 text-white bg-purple hover:bg-purpleHover rounded-[5px]">
                View Project
              </button>
            </div>
          </div>

          {/* Project 7 */}
          <div className="w-full bg-lightGrey rounded-[15px] overflow-hidden shadow-md">
            <div className="relative w-full h-[250px]">
              <Image
                src={projectImage7}
                alt="Project 7"
                layout="fill"
                objectFit="cover"
                className="rounded-t-[15px]"
              />
            </div>
            <div className="p-4">
              <h4 className="text-lg font-semibold">Project 7</h4>
              <p className="text-sm text-[#838383] mt-2">A brief description of the project.</p>
              <button className="mt-4 px-6 py-2 text-white bg-purple hover:bg-purpleHover rounded-[5px]">
                View Project
              </button>
            </div>
          </div>

          {/* Project 8 */}
          <div className="w-full bg-lightGrey rounded-[15px] overflow-hidden shadow-md">
            <div className="relative w-full h-[250px]">
              <Image
                src={projectImage8}
                alt="Project 8"
                layout="fill"
                objectFit="cover"
                className="rounded-t-[15px]"
              />
            </div>
            <div className="p-4">
              <h4 className="text-lg font-semibold">Project 8</h4>
              <p className="text-sm text-[#838383] mt-2">A brief description of the project.</p>
              <button className="mt-4 px-6 py-2 text-white bg-purple hover:bg-purpleHover rounded-[5px]">
                View Project
              </button>
            </div>
          </div>

          {/* Project 9 */}
          <div className="w-full bg-lightGrey rounded-[15px] overflow-hidden shadow-md">
            <div className="relative w-full h-[250px]">
              <Image
                src={projectImage9}
                alt="Project 9"
                layout="fill"
                objectFit="cover"
                className="rounded-t-[15px]"
              />
            </div>
            <div className="p-4">
              <h4 className="text-lg font-semibold">Project 9</h4>
              <p className="text-sm text-[#838383] mt-2">A brief description of the project.</p>
              <button className="mt-4 px-6 py-2 text-white bg-purple hover:bg-purpleHover rounded-[5px]">
                View Project
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Projects;
