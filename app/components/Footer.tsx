import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <footer className="shadow-2xl bg-white text-black py-[10vmin] md:py-[8vmin] sm:py-[6vmin] sm:w-[98%] w-[95%] m-auto rounded-[25px] mt-2">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center md:items-start gap-10">

        {/* Logo Section */}
        <div className="flex flex-col items-center md:items-start">
          <h2 className="text-3xl font-semibold mb-4 text-purple font-poppins">LAYAN.</h2>
          <p className="text-center md:text-left text-sm sm:text-[0.9em] mb-4">
            We specialize in modern web development, providing solutions that your users will love.
          </p>
          <div className="flex space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-black hover:text-purpleHover transition-all duration-500">
              <FaFacebookF size={24} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-black hover:text-purpleHover transition-all duration-500">
              <FaInstagram size={24} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-black hover:text-purpleHover transition-all duration-500">
              <FaLinkedinIn size={24} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-black hover:text-purpleHover transition-all duration-500">
              <FaTwitter size={24} />
            </a>
          </div>
        </div>

        {/* Links Section */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 mt-8 md:mt-0">
          <div className="text-center md:text-left">
            <h4 className="font-semibold text-lg mb-4 text-purple">Quick Links</h4>
            <ul>
              <li><a href="#" className="hover:text-purpleHover transition-all duration-500">Home</a></li>
              <li><a href="#" className="hover:text-purpleHover transition-all duration-500">About</a></li>
              <li><a href="#" className="hover:text-purpleHover transition-all duration-500">Services</a></li>
              <li><a href="#" className="hover:text-purpleHover transition-all duration-500">Contact</a></li>
            </ul>
          </div>

          <div className="text-center md:text-left">
            <h4 className="font-semibold text-lg mb-4 text-purple">Legal</h4>
            <ul>
              <li><a href="#" className="hover:text-purpleHover transition-all duration-500">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-purpleHover transition-all duration-500">Terms & Conditions</a></li>
              <li><a href="#" className="hover:text-purpleHover transition-all duration-500">Return Policy</a></li>
            </ul>
          </div>

          <div className="text-center md:text-left">
            <h4 className="font-semibold text-lg mb-4 text-purple">Support</h4>
            <ul>
              <li><a href="#" className="hover:text-purpleHover transition-all duration-500">FAQs</a></li>
              <li><a href="#" className="hover:text-purpleHover transition-all duration-500">Customer Support</a></li>
              <li><a href="#" className="hover:text-purpleHover transition-all duration-500">Shipping & Delivery</a></li>
            </ul>
          </div>
        </div>
      </div>


      <div className="bg-purple text-center py-4 mt-12">
        <p className="text-sm text-white">
          &copy; {new Date().getFullYear()} LAYAN . All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
