import about from "../../public/images/about-1.jpg";
import Image from "next/image";

function About() {
  return (
    <div>
       <section className="flex flex-col-reverse md:flex-row lg:gap-12 gap-10 justify-center items-center py-[10vmin] md:px-12 px-6 bg-white sm:w-[98%] w-[95%] m-auto rounded-[25px] mt-2">
       <div className="mt-6 md:mt-0 border-[2px] border-purple rounded-full flex justify-center items-center">
          <div className="relative w-[40vw] h-[40vw] sm:w-[25vw] sm:h-[25vw] md:w-[20vw] md:h-[20vw] overflow-hidden rounded-full">
            <Image
              src={about}
              alt="Profile Image"
              layout="intrinsic"
              objectFit="cover"
              className="w-full h-full"
            />
          </div>
        </div>
        <div className="font-popins md:text-start  items-start text-center">
          <span className="tracking-widest font-poppins text-[0.8em] text-purple font-[500] uppercase">My Intro</span>
          <h3 className="lg:text-[2.2em] md:text-[1.8em] sm:text-[1.5em] text-[1.2em] font-semibold">About Me</h3>
          <p className="text-[0.5em] md:text-[1em] sm:text-[0.85em] md:w-[500px] sm:w-[400px] w-[300px]">I am a Frontend Developer based in Pakistan. I will help you
          build a beautiful and Dynamic website With Next JS your users will love.</p>
          <button className="mt-2 py-2 px-4 text-white sm:text-[0.9em] text-[0.7em] bg-purple rounded-[10px] transition-all duration-500 hover:bg-purpleHover">
            Hire Me
          </button>
        </div>
      </section>
    </div>
  )
}

export default About;