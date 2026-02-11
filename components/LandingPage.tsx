"use client";

import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { clients, HeroText } from "./constants";
import Image from "next/image";

const LandingPage = () => {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % HeroText.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <Navbar />
      {/* <section className='relative h-[calc(100vh-80px)] w-full overflow-hidden'>
        <video
          src='/videos/bg-video3.mp4'
          autoPlay
          muted
          loop
          className='absolute left-0 top-0 w-full h-full object-cover'
        >
          <source src='/videos/water-plant.mp4' type='video/mp4' />
        </video>
        <div className='absolute inset-0 bg-black/60'></div>
        <div className='relative flex flex-col items-center justify-center h-full text-center px-4'>
          <h1 className='text-4xl md:text-6xl font-bold text-white'>
            {HeroText[index].title}
          </h1>
          <p className='mt-4 text-xl text-gray-200 max-w-2xl'>
            {HeroText[index].description}
          </p>
        </div>
       
        <div className='absolute inset-0 bg-black/60'></div>

       
        <div className='relative z-10 text-center px-6 max-w-4xl'>
          <h1 className='text-4xl md:text-6xl font-bold leading-tight mb-6'>
            Engineering Reliable Water & Wastewater Treatment Solutions
          </h1>

          <p className='text-lg md:text-xl mb-8'>
            Design & Detail Engineering for ETP | STP | WTP | HPS with 40+ years
            of combined expertise and 45+ successful projects.
          </p>

          <div className='flex flex-col md:flex-row gap-4 justify-center'>
            <button className='bg-blue-700 hover:bg-blue-800 px-6 py-3 rounded-lg font-medium transition'>
              Get a Consultation
            </button>
            <button className='border border-white px-6 py-3 rounded-lg hover:bg-white hover:text-black transition'>
              Explore Services
            </button>
          </div>
        </div>
      </section> */}

      <div className='font-sans text-gray-800'>
        {/* ================= HERO SECTION ================= */}
        <section className='relative h-[calc(100vh-80px)] w-full overflow-hidden flex items-center justify-center text-white'>
          {/* Background Video */}
          <video
            autoPlay
            muted
            loop
            className='absolute left-0 top-0 w-full h-full object-cover'
          >
            <source src='/videos/hero-1.mp4' type='video/mp4' />
          </video>
          {/* Overlay */}
          <div className='absolute inset-0 bg-black/60'></div>

          {/* Content */}
          <div className='relative z-10 text-center px-6 max-w-4xl'>
            <h1 className='text-4xl md:text-6xl font-bold leading-tight mb-6'>
              Engineering Reliable Water & Wastewater Treatment Solutions
            </h1>

            <p className='text-lg md:text-xl mb-8'>
              Design & Detail Engineering for ETP | STP | WTP | HPS with 40+
              years of combined expertise and 45+ successful projects.
            </p>

            <div className='flex flex-col md:flex-row gap-4 justify-center'>
              <button className='bg-blue-700 hover:bg-blue-800 px-6 py-3 rounded-lg font-medium transition'>
                Get a Consultation
              </button>
              <button className='border border-white px-6 py-3 rounded-lg hover:bg-white hover:text-black transition'>
                Explore Services
              </button>
            </div>
          </div>
        </section>

        {/* ================= ABOUT SECTION ================= */}
        <section className='py-20 bg-gray-50'>
          <div className='max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center'>
            <Image
              src='/images/enge-team.jpg'
              alt='Water treatment engineering team reviewing plant design drawings'
              width={800}
              height={600}
              className='rounded-xl shadow-lg object-cover w-full h-auto'
            />
            <div>
              <h2 className='text-3xl font-bold mb-6'>
                About Water Design Engg
              </h2>
              <p className='mb-4 text-gray-600'>
                Founded in 2022, Water Design Engg provides comprehensive
                engineering solutions to the water and wastewater treatment
                industry. With over 45 successfully delivered projects and a
                team of highly qualified engineers holding 40+ years of combined
                experience, we ensure technically sound, efficient, and
                optimized plant designs. <br /> <br />
                We specialize in detailed engineering, technical documentation,
                fabrication drawings, and end-to-end project support for
                industrial and environmental applications.
              </p>
              <button className='mt-4 bg-blue-700 text-white px-5 py-3 rounded-lg hover:bg-blue-800 transition'>
                Learn More
              </button>
            </div>
          </div>
        </section>

        {/* ================= SERVICES SECTION ================= */}
        <section className='py-20'>
          <div className='max-w-7xl mx-auto px-6 text-center'>
            <h2 className='text-3xl font-bold mb-4'>
              Our Engineering Services
            </h2>
            <p className='text-gray-600 mb-12'>
              We provide complete engineering support across all stages of water
              and wastewater treatment plant development.
            </p>

            <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
              {[
                {
                  title: "Proposal Stage Support",
                  desc: "We assist clients during the tender and proposal stage by providing technical diagrams, preliminary calculations, and design documentation to ensure competitive and accurate submissions.",
                },
                {
                  title: "Technical Documentation",
                  desc: "Preparation of data sheets, detailed fabrication drawings, P&ID diagrams, design analysis reports, and complete engineering documentation.",
                },
                {
                  title: "Design & Detail Engineering",
                  desc: "Comprehensive design services for ETP, STP, WTP and High Pressure Systems.Our designs ensure regulatory compliance, performance optimization, and cost efficiency.",
                },
                {
                  title: "Site Survey & O&M Support",
                  desc: "We provide site surveys, engineering & construction guidance, and complete Operation & Maintenance (O&M) manuals to ensure smooth plant operation.",
                },
              ].map((service, index) => (
                <div
                  key={index}
                  className='p-6 rounded-xl shadow-md hover:shadow-xl transition bg-white'
                >
                  <h3 className='text-xl font-semibold mb-4'>
                    {service.title}
                  </h3>
                  <p className='text-gray-600'>{service.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= WHY CHOOSE US ================= */}
        <section className='py-20 bg-blue-900 text-white'>
          <div className='max-w-6xl mx-auto px-6 text-center'>
            <h2 className='text-3xl font-bold mb-10'>
              Why Choose Water Design Engg?
            </h2>

            <div className='grid md:grid-cols-3 gap-8'>
              {[
                "45+ Successfully Delivered Projects",
                "40+ Years Combined Expertise",
                "Industry-Leading Clientele",
                "End-to-End Engineering Solutions",
                "Optimized & Cost-Effective Designs",
                "Dedicated Technical Support",
              ].map((item, index) => (
                <div
                  key={index}
                  className='bg-blue-800 p-6 rounded-lg shadow-md'
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= CLIENTS ================= */}
        <section className='py-20 bg-gray-50'>
          <div className='max-w-6xl mx-auto px-6 text-center'>
            <h2 className='text-3xl font-bold mb-10'>
              Trusted by Industry Leaders
            </h2>

            <div className='grid grid-cols-2 md:grid-cols-5 gap-10 items-center'>
              {clients.map((client, index) => (
                <div
                  key={index}
                  className='flex justify-center items-center h-25 bg-white p-4 rounded-lg shadow-sm '
                >
                  <Image
                    src={client.src}
                    alt={client.name}
                    width={150}
                    height={50}
                    className='object-contain max-h-[70px] hover:grayscale transition duration-300 bg-transparent'
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= CTA ================= */}
        <section className='relative py-20 bg-gradient-to-r from-blue-700 to-teal-600 text-white text-center'>
          <video
            autoPlay
            muted
            loop
            className='absolute left-0 top-0 w-full h-full object-cover'
          >
            <source src='/videos/cta.mp4' type='video/mp4' />
          </video>
          {/* Overlay */}
          <div className='absolute inset-0 bg-black/60'></div>

          <div className='relative z-10'>
            <h2 className='text-3xl font-bold mb-6'>
              Let’s Build Efficient Water Solutions Together
            </h2>
            <p className='mb-8'>
              Looking for reliable engineering support for your water treatment
              project?
            </p>
            <button className='bg-white text-blue-700 px-6 py-3 rounded-lg font-medium hover:bg-gray-200 transition'>
              Contact Us Today
            </button>
          </div>
        </section>
      </div>
    </>
  );
};

export default LandingPage;
