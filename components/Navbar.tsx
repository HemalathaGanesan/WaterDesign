"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  AiOutlineClose,
  AiOutlineFacebook,
  AiOutlineInstagram,
  AiOutlineMenu,
  AiOutlineTwitter,
  AiOutlineRight,
  AiOutlineDown,
  AiOutlinePlusCircle,
  AiOutlineMinusCircle,
  AiOutlineArrowRight,
} from "react-icons/ai";

import { MenuItem } from "./constants";

const Navbar = () => {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [isServiceOpen, setIsServiceOpen] = useState(false);

  const handleServiceOpen = () => {
    setIsServiceOpen(!isServiceOpen);
  };

  useEffect(() => {
    setIsServiceOpen(false);
    setMenuOpen(false);
  }, [pathname]);

  const handleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [menuOpen]);

  return (
    <>
      <header className='sticky top-0 w-full z-50 bg-white/95 backdrop-blur-md shadow-sm'>
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
            {MenuItem.map((item) =>
              item.children ? (
                <button
                  key={item.id}
                  onClick={handleServiceOpen}
                  className='relative whitespace-nowrap hover:text-[#0A3D62] transition group '
                >
                  <span className='flex items-center cursor-pointer'>
                    {item.label}
                    <AiOutlineDown className='ml-1' size={13} color='#0A3D62' />
                  </span>
                  <span className='absolute left-0 -bottom-1 w-0 h-[2px] bg-[#0A3D62] transition-all group-hover:w-full'></span>
                </button>
              ) : (
                <Link
                  key={item.id}
                  href={item.path}
                  className='relative whitespace-nowrap hover:text-[#0A3D62] transition group'
                >
                  {item.label}
                  <span className='absolute left-0 -bottom-1 w-0 h-[2px] bg-[#0A3D62] transition-all group-hover:w-full'></span>
                </Link>
              ),
            )}

            {/* CTA */}
            {/* <Link
            href='/contact'
            className='ml-4 bg-[#0A3D62] text-white px-5 py-2 rounded-md hover:bg-[#072c47] transition'
          >
            Get a Quote
          </Link> */}
          </nav>
          {isServiceOpen && !menuOpen && (
            <div className='absolute left-0 top-full w-full bg-white shadow-xl border-t border-gray-500'>
              <div className='bg-gradient-to-b from-blue-50 via-white to-blue-50 border-t-4 border-[#0A3D62] shadow-xl'>
                <div className='grid grid-cols-4 gap-8 max-w-7xl mx-auto px-10 py-10'>
                  {MenuItem.find((item) => item.children)?.children?.map(
                    (child, index) => (
                      // <span
                      //   key={index}
                      //   className='hover:text-[#0A3D62] cursor-pointer'
                      // >
                      //   {child.label}
                      // </span>
                      <Link
                        key={child.path}
                        href={child.path}
                        className='hover:text-[#0A3D62] cursor-pointer'
                      >
                        {child.label}
                      </Link>
                    ),
                  )}
                </div>
              </div>
            </div>
          )}
          {/*Mobile View */}
          <button onClick={handleMenu} className='md:hidden cursor-pointer'>
            <AiOutlineMenu size={20} />
          </button>
        </div>
      </header>
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
            {MenuItem.map((item) =>
              item.children ? (
                <div key={item.id}>
                  <button onClick={handleServiceOpen}>
                    <span className='flex items-center'>
                      {item.label}
                      {!isServiceOpen ? (
                        <AiOutlinePlusCircle className='ml-2' size={15} />
                      ) : (
                        <AiOutlineMinusCircle className='ml-2' size={15} />
                      )}
                    </span>
                  </button>
                  {isServiceOpen && (
                    <div className='ml-4 mt-2 flex flex-col gap-2 text-gray-600'>
                      {item.children.map((child, index) => (
                        <span key={index} className='flex items-center'>
                          <AiOutlineArrowRight className='mr-2' size={13} />
                          <Link key={child.path} href={child.path}>
                            {child.label}
                          </Link>
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link href={item.path} key={item.id}>
                  {item.label}
                </Link>
              ),
            )}

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
    </>
  );
};
export default Navbar;
