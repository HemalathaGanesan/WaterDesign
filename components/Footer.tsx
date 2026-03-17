"use client";

import Link from "next/link";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";
import { MenuItem } from "./constants";

export default function Footer() {
  return (
    <footer className='bg-[#0A3D62] text-white mt-20'>
      {/* Top Section */}
      <div className='max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-4 gap-10'>
        {/* Company Info */}
        <div>
          <h2 className='text-2xl font-bold mb-4'>Water Design Engineering</h2>
          <p className='text-sm  leading-relaxed'>
            Engineering reliable water & wastewater infrastructure solutions
            with innovation, precision, and sustainability.
          </p>

          {/* Social Icons */}
          <div className='flex gap-4 mt-6'>
            <Link
              href='#'
              className='bg-white text-[#0A3D62] p-2 rounded-full hover:bg-[#1B9CFC] hover:text-white transition'
            >
              <FaFacebookF size={14} />
            </Link>
            <Link
              href='#'
              className='bg-white text-[#0A3D62] p-2 rounded-full hover:bg-[#1B9CFC] hover:text-white transition'
            >
              <FaLinkedinIn size={14} />
            </Link>
            <Link
              href='#'
              className='bg-white text-[#0A3D62] p-2 rounded-full hover:bg-[#1B9CFC] hover:text-white transition'
            >
              <FaTwitter size={14} />
            </Link>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className='text-lg font-semibold mb-4'>Quick Links</h3>
          <ul className='space-y-3 text-sm'>
            {MenuItem.map(
              (item, index) =>
                item.show && (
                  <li key={index}>
                    <Link
                      href={item.path}
                      className='hover:text-[#1B9CFC] transition'
                    >
                      {item.label}
                    </Link>
                  </li>
                ),
            )}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className='text-lg font-semibold mb-4'>Our Services</h3>
          <ul className='space-y-3 text-sm'>
            {MenuItem.find((item) => item.children)?.children?.map(
              (child, index) => (
                <li key={index}>
                  <Link
                    key={child.path}
                    href={child.path}
                    className='hover:text-[#1B9CFC] cursor-pointer transition'
                  >
                    {child.label} 
                  </Link>
                </li>
              ),
            )}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className='text-lg font-semibold mb-4'>Contact Info</h3>

          <div className='space-y-4 text-sm'>
            <div className='flex items-start gap-3'>
              <MdLocationOn size={18} className='mt-1' />
              <p>
                MI133, Ragavendra Colony, Avalappalli,Basthi
                <br />
                Hosur-635109, Tamil Nadu, India
              </p>
            </div>

            <div className='flex items-center gap-3'>
              <MdEmail size={18} />
              <a
                href='mailto:waterdesignengg@gmail.com'
                className='hover:text-[#1B9CFC]'
              >
                waterdesignengg@gmail.com
              </a>
            </div>

            <div className='flex items-center gap-3'>
              <MdPhone size={18} />
              <a href='tel:+91 8778859955' className='hover:text-[#1B9CFC]'>
                +91-8778859955
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className='bg-white text-center py-5 text-sm text-blue-700'>
        © {new Date().getFullYear()} Water Design Engineering. All Rights
        Reserved.
      </div>
    </footer>
  );
}
