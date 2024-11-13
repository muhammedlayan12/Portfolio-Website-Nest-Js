"use client";


import { useState } from "react"
import Image from "next/image";
import phone from "../../public/images/phone.svg";
import chevron from "../../public/images/chevron.svg";
import Link from "next/link";

function Navbar() {

    const [isMenuOpen,setIsMenuOpen] = useState(false);
    const NavbarToggler = () => {
        setIsMenuOpen(!isMenuOpen);
    }

  return (
    <div >
        <nav className="flex justify-evenly items-center sm:py-4 py-2 px-4 bg-white text-black m-auto rounded-full mt-2 sm:w-[98%] w-[95%]">
            <div className="block md:hidden font-bold text-xl" onClick={NavbarToggler}>☰</div>
            <div className={`${isMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[-100%]"} transitiona-all duration-700  ease-in-out fixed z-[9999] top-0 w-[98%] h-[250px] bg-white text-black py-8 px-8`}>
                <div className="absolute bottom-4 right-4" onClick={NavbarToggler}><Image src={chevron} width={23} alt=""/></div>
            <ul className="flex flex-col gap-8 absolute top-6">
               <Link href="/"><li   onClick={NavbarToggler} className="text-[1em] font-[450]">Home</li></Link>
               <Link href="/about"><li  onClick={NavbarToggler}  className="text-[1em] font-[450]">About</li></Link>
               <Link href="/project"><li  onClick={NavbarToggler}  className="text-[1em] font-[450]">Projects</li></Link>
               <Link href="/contact"><li  onClick={NavbarToggler}  className="text-[1em] font-[450]">Contact</li></Link>
            </ul>
            </div>
            <div className="font-poppins font-bold sm:text-2xl text-xl">LAYAN <span className="text-purple text-xl">.</span></div>
            <ul className="hidden md:flex gap-8">
               <Link href="/"><li className="text-[1em] font-[450]">Home</li></Link>
               <Link href="/about"><li className="text-[1em] font-[450]">About</li></Link>
               <Link href="/project"><li className="text-[1em] font-[450]">Projects</li></Link>
               <Link href="/contact"><li className="text-[1em] font-[450]">Contact</li></Link>
            </ul>
            <button className="py-2 px-2 rounded-full bg-purple"><Image src={phone} className="sm:w-[22px] w-[19px]" alt=""/></button>
        </nav>
    </div>
  );
}
export default Navbar;



// website ko go live karo ma tumha website a full ss bhejdonga mera pass extension hn