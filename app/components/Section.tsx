import author from "../../public/images/author.png";
import Image from "next/image";

function Section() {
  return (
    <section className="relative flex flex-col justify-evenly md:flex-row items-center py-4 px-4 bg-white sm:w-[98%] w-[95%] m-auto rounded-[25px] mt-2">
      <div className="font-poppins text-center md:text-left">
        <h3 className="font-semibold lg:text-[2em] md:text-[1.5em] sm:text-[1.2em] text-[1em]">
          Have a project on your mind.
        </h3>
        <p className="lg:w-[550px] md:w-[450px] sm:w-[400px] w-[350px] lg:text-[1.1em] md:text-[1em] text-[0.8em] mx-auto md:mx-0">
          I bring a wide range of skills in front-end development, UI/UX design, and responsive web technologies. Here are some key areas of expertise.
        </p>
        <button className="py-2 px-2 bg-purple text-white transition-all duration-500 hover:bg-purpleHover mt-2 rounded-[10px]">
          Contact Me
        </button>
      </div>

      <div className="relative md:block flex justify-center mt-4 md:mt-0 w-full max-w-[350px] md:max-w-[300px]">
        <Image
          src={author}
          alt="Author"
          width={300}
          height={400}
          className="rounded-[15px] object-contain max-w-full h-auto"
        />
      </div>
    </section>
  );
}

export default Section;
