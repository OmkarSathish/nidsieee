import React from 'react';
import Image from "next/image";

const Header = () => {
  return (
    <div className="py-5 px-5 md:px-12 lg:px-28">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <Image
        src="/logo.png"
        width={200}  // Increased from 180 to 250
        height={80}  // Increased from 50 to 80
        alt="Logo"
        className="w-[130px] sm:w-[150px]" // Adjusting with Tailwind as well
        />

        {/* Get Started Button */}
        <button className="flex items-center gap-2 font-medium py-2 px-4 sm:py-3 sm:px-6 border border-black shadow-[-7px_7px_0px_#000000]">
          Get Started
          <Image
            src="/arrow.png"
            width={20} 
            height={20} 
            alt="Arrow"
          />
        </button>
      </div>

      {/* Blog Section */}
      <div className='text-center my-8'>
        <h1 className='text-3xl sm:text-5xl font-medium'>Latest Blogs</h1>
        <p className='mt-10 max-w-[740px] mx-auto text-xs sm:text-base'>
          This is a blog website that helps you find the content you love to read!
        </p>

        {/* Email Subscription Form */}
        <form className='flex justify-between max-w-[500px] scale-75 sm:scale-100 mx-auto mt-10 border border-black shadow-[-7px_7px_0px_#000000]'>
          <input 
            type="email" 
            placeholder="Enter your email" 
            className="pl-4 py-3 w-full outline-none"
          />
          <button type ='submit' className='border-l border-black py-4 px-4 sm:px-8 bg-black text-white hover:bg-gray-800'>
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};

export default Header;