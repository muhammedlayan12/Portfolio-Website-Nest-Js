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
      <section className="bg-white py-[10vmin] px-14 sm:w-[98%] w-[95%] m-auto rounded-[25px] mt-2">
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
          <div className="w-full bg-lightGrey rounded-[15px] overflow-hidden shadow-md">
            <div className="relative w-full h-[250px]">
              <Image
                src={projectImage1}
                alt="Press Mart"
                layout="fill"
                objectFit="cover"
                className="rounded-t-[15px]"
              />
            </div>
            <div className="p-4">
              <h4 className="text-lg font-semibold">Press Mart</h4>
              <p className="text-sm text-[#838383] mt-2">An E-commerce website showcasing only the styling and layout. It’s a project designed to practice frontend design for an online store.</p>
              <button className="mt-4 px-6 py-2 text-white bg-purple hover:bg-purpleHover rounded-[5px]">
                View Project
              </button>
            </div>
          </div>

          <div className="w-full bg-lightGrey rounded-[15px] overflow-hidden shadow-md">
            <div className="relative w-full h-[250px]">
              <Image
                src={projectImage2}
                alt="V-Card Portfolio"
                layout="fill"
                objectFit="cover"
                className="rounded-t-[15px]"
              />
            </div>
            <div className="p-4">
              <h4 className="text-lg font-semibold">V-Card Portfolio</h4>
              <p className="text-sm text-[#838383] mt-2">A digital portfolio project designed as a virtual business card, highlighting design skills and personal branding.</p>
              <button className="mt-4 px-6 py-2 text-white bg-purple hover:bg-purpleHover rounded-[5px]">
                View Project
              </button>
            </div>
          </div>

          <div className="w-full bg-lightGrey rounded-[15px] overflow-hidden shadow-md">
            <div className="relative w-full h-[250px]">
              <Image
                src={projectImage3}
                alt="Mah Solution"
                layout="fill"
                objectFit="cover"
                className="rounded-t-[15px]"
              />
            </div>
            <div className="p-4">
              <h4 className="text-lg font-semibold">Mah Solution</h4>
              <p className="text-sm text-[#838383] mt-2">A website for a digital marketing agency, showcasing business solutions, services, and company portfolio.</p>
              <button className="mt-4 px-6 py-2 text-white bg-purple hover:bg-purpleHover rounded-[5px]">
                View Project
              </button>
            </div>
          </div>

          <div className="w-full bg-lightGrey rounded-[15px] overflow-hidden shadow-md">
            <div className="relative w-full h-[250px]">
              <Image
                src={projectImage4}
                alt="Male Fashion"
                layout="fill"
                objectFit="cover"
                className="rounded-t-[15px]"
              />
            </div>
            <div className="p-4">
              <h4 className="text-lg font-semibold">Male Fashion</h4>
              <p className="text-sm text-[#838383] mt-2">An E-commerce site built on Next.js showcasing male fashion items, focusing on layout and product management.</p>
              <button className="mt-4 px-6 py-2 text-white bg-purple hover:bg-purpleHover rounded-[5px]">
                View Project
              </button>
            </div>
          </div>

          <div className="w-full bg-lightGrey rounded-[15px] overflow-hidden shadow-md">
            <div className="relative w-full h-[250px]">
              <Image
                src={projectImage5}
                alt="Grocery Online Store"
                layout="fill"
                objectFit="cover"
                className="rounded-t-[15px]"
              />
            </div>
            <div className="p-4">
              <h4 className="text-lg font-semibold">Grocery Online Store</h4>
              <p className="text-sm text-[#838383] mt-2">A layout and styling project for an online grocery store, focused on product listings and cart functionality.</p>
              <button className="mt-4 px-6 py-2 text-white bg-purple hover:bg-purpleHover rounded-[5px]">
                View Project
              </button>
            </div>
          </div>

          <div className="w-full bg-lightGrey rounded-[15px] overflow-hidden shadow-md">
            <div className="relative w-full h-[250px]">
              <Image
                src={projectImage6}
                alt="Grilli Restaurant"
                layout="fill"
                objectFit="cover"
                className="rounded-t-[15px]"
              />
            </div>
            <div className="p-4">
              <h4 className="text-lg font-semibold">Grilli</h4>
              <p className="text-sm text-[#838383] mt-2">A website for a restaurant business, focusing on menu design, online orders, and a clean, elegant layout.</p>
              <button className="mt-4 px-6 py-2 text-white bg-purple hover:bg-purpleHover rounded-[5px]">
                View Project
              </button>
            </div>
          </div>

          <div className="w-full bg-lightGrey rounded-[15px] overflow-hidden shadow-md">
            <div className="relative w-full h-[250px]">
              <Image
                src={projectImage7}
                alt="Amazon Clone"
                layout="fill"
                objectFit="cover"
                className="rounded-t-[15px]"
              />
            </div>
            <div className="p-4">
              <h4 className="text-lg font-semibold">Amazon Clone</h4>
              <p className="text-sm text-[#838383] mt-2">A clone of the Amazon website, built using React and showcasing product listings, user authentication, and cart management.</p>
              <button className="mt-4 px-6 py-2 text-white bg-purple hover:bg-purpleHover rounded-[5px]">
                View Project
              </button>
            </div>
          </div>

          <div className="w-full bg-lightGrey rounded-[15px] overflow-hidden shadow-md">
            <div className="relative w-full h-[250px]">
              <Image
                src={projectImage8}
                alt="Anon E-commerce"
                layout="fill"
                objectFit="cover"
                className="rounded-t-[15px]"
              />
            </div>
            <div className="p-4">
              <h4 className="text-lg font-semibold">Anon</h4>
              <p className="text-sm text-[#838383] mt-2">An E-commerce website focused solely on layout and styling, ideal for an online store that offers products in various categories.</p>
              <button className="mt-4 px-6 py-2 text-white bg-purple hover:bg-purpleHover rounded-[5px]">
                View Project
              </button>
            </div>
          </div>

          <div className="w-full bg-lightGrey rounded-[15px] overflow-hidden shadow-md">
            <div className="relative w-full h-[250px]">
              <Image
                src={projectImage9}
                alt="Tourly"
                layout="fill"
                objectFit="cover"
                className="rounded-t-[15px]"
              />
            </div>
            <div className="p-4">
              <h4 className="text-lg font-semibold">Tourly</h4>
              <p className="text-sm text-[#838383] mt-2">A travel agency website designed with a focus on UX/UI, booking features, and a seamless customer experience.</p>
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
