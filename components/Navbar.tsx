"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  AiOutlineClose,
  AiOutlineFacebook,
  AiOutlineInstagram,
  AiOutlineMenu,
  AiOutlineTwitter,
} from "react-icons/ai";
import { MenuItem } from "./constants";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <header className='fixed top-0 w-full z-50 bg-white/95 backdrop-blur-md shadow-sm'>
      <div className='max-w-7xl mx-auto px-6 h-20 flex items-center justify-between'>
        {/* Logo */}
        <Link href='/' className='flex items-center'>
          <Image
            src='/images/logo.png'
            alt='Water Design Engg Logo'
            width={170}
            height={55}
            priority
          />
        </Link>

        {/* Navigation */}
        <nav className='hidden md:flex items-center gap-8 text-[15px] font-medium text-gray-700'>
          {MenuItem.map((item) => (
            <Link
              key={item.id}
              href={item.path}
              className='relative whitespace-nowrap hover:text-[#0A3D62] transition group'
            >
              {item.label}
              <span className='absolute left-0 -bottom-1 w-0 h-[2px] bg-[#0A3D62] transition-all group-hover:w-full'></span>
            </Link>
          ))}

          {/* CTA */}
          <Link
            href='/contact'
            className='ml-4 bg-[#0A3D62] text-white px-5 py-2 rounded-md hover:bg-[#072c47] transition'
          >
            Get a Quote
          </Link>
        </nav>
        <button onClick={handleMenu} className='md:hidden cursor-pointer'>
          <AiOutlineMenu size={20} />
        </button>

        <div
          className={`fixed inset-0 z-50 transition ${
            menuOpen ? "visible" : "invisible"
          }`}
        >
          {/* Overlay */}
          <div
            className={`absolute inset-0 bg-black/40 transition-opacity ${
              menuOpen ? "opacity-100" : "opacity-0"
            }`}
            onClick={handleMenu}
          ></div>
          {/* Drawer */}
          <div
            className={`absolute left-0 top-0 h-full w-[85%] max-w-sm bg-white shadow-xl transform transition-transform duration-300 ${
              menuOpen ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            {/* Header */}
            <div className='flex justify-between items-center p-6 border-b'>
              <span className='text-lg font-semibold text-[#0A3D62]'>Menu</span>
              <span className='cursor-pointer text-xl'>
                <AiOutlineClose onClick={handleMenu} />
              </span>
            </div>
            {/* Menu Items */}
            <div className='flex flex-col p-6 gap-4 text-[17px] font-medium text-gray-700 hover:text-[#0A3D62] transition bg-white'>
              {MenuItem.map((item) => (
                <Link href={item.path} key={item.id}>
                  {item.label}
                </Link>
              ))}
              <Link
                href='/contact'
                className=' mt-6 bg-[#0A3D62] text-center text-white py-3 rounded-lg font-medium shadow-md hover:bg-[#072c47] transition'
              >
                Get a Quote
              </Link>
            </div>
            {/* <div className='flex flex-row justify-around items-center pt-10 caret-blue-500'>
              <AiOutlineTwitter size={20} color='blue' />
              <AiOutlineFacebook size={20} color='blue' />
              <AiOutlineInstagram size={20} color='blue' />
            </div> */}
            <Link href='/'>
              {/* <Image
                  src={logo}
                  alt='Water Design Engg logo'
                  width={290}
                  height={100}
                  className='h-20 sm:h-32 w-auto'
                  priority
                /> */}
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Navbar;
