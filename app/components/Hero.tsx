import Image from "next/image";
import profile from "../../public/images/about-1.jpg";

function Hero() {
  return (
    <div>
      <section className="flex flex-col-reverse lg:flex-row lg:gap-2 gap-10 justify-evenly items-center py-[20vmin] md:px-12 px-6 bg-white sm:w-[98%] w-[95%] m-auto rounded-[25px] mt-2">
        <div className="font-poppins leading-1 text-center lg:text-start">
          <p className="sm:text-[1.1em] text-[0.7em] tracking-wider text-black">
            I am <span className="text-purple">Muhammad Layan</span>
          </p>
          <h2 className="font-bold leading-1 md:text-[2.5em] sm:text-[1.9em] text-[1.3em]">
            Frontend<span className="text-purple"> Developer</span>
          </h2>
          <p className="text-[0.5em] sm:text-[1.1em]">
            I am a Frontend Developer based in Pakistan. I will help you
            <br />
            build a beautiful website your users will love.
          </p>
          <button className="mt-2 py-2 px-4 text-white sm:text-[0.9em] text-[0.7em] bg-purple rounded-[10px] transition-all duration-500 hover:bg-purpleHover">
            View More
          </button>
        </div>

        <div className="mt-6 md:mt-0 border-[2px] border-purple rounded-full flex justify-center items-center">
          <div className="relative w-[40vw] h-[40vw] sm:w-[25vw] sm:h-[25vw] md:w-[20vw] md:h-[20vw] overflow-hidden rounded-full">
            <Image
              src={profile}
              alt="Profile Image"
              layout="intrinsic"
              objectFit="cover"
              className="w-full h-full"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero;
