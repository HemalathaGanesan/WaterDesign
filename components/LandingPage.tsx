"use client";

import Link from "next/link";
import { clients, servicesTypes, whyUs } from "./constants";
import Image from "next/image";

export const metadata = {
  title:
    "Water Design Engineering | WTP, STP, ETP Design & Engineering Experts",
  description:
    "Water Design Engineering provides expert design and detail engineering services for Water Treatment Plants (WTP), Sewage Treatment Plants (STP), Effluent Treatment Plants (ETP), and Hydraulic Pumping Systems (HPS). 45+ projects delivered with 40+ years of experience.",

  keywords: [
    "Water Treatment Plant Design",
    "STP Design Services",
    "ETP Engineering",
    "Hydraulic Design Engineering",
    "Wastewater Treatment Consultants",
    "Water Design Engineering India",
  ],

  openGraph: {
    title: "Water Design Engineering | Engineering Reliable Water Solutions",
    description:
      "Experts in WTP, STP, ETP and Hydraulic Engineering with 45+ projects delivered.",
    url: "https://waterdesignengg.in/",
    siteName: "Water Design Engineering",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Water Treatment Engineering",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  alternates: {
    canonical: "https://waterdesignengg.in/",
  },
};

const LandingPage = () => {
  return (
    <>
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
              Water & Wastewater Treatment Plant Design Experts
            </h1>

            <p className='text-lg md:text-xl mb-8'>
              Specialized in WTP, STP, ETP & Hydraulic Systems with 40+ years of
              engineering expertise and 45+ successfully delivered projects
              across industrial and municipal sectors.
            </p>

            <div className='flex flex-col md:flex-row gap-4 justify-center'>
              <Link href='/contact'>
                <button className='bg-blue-700 hover:bg-blue-800 px-6 py-3 rounded-lg'>
                  Get a Consultation
                </button>
              </Link>

              <Link href='/services/proposal'>
                <button className='border border-white px-6 py-3 rounded-lg hover:bg-white hover:text-black transition'>
                  Explore Services
                </button>
              </Link>
            </div>
          </div>
        </section>

        {/* ================= ABOUT SECTION ================= */}
        <section className='py-20 bg-gray-50'>
          <div className='max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center'>
            <Image
              src='/images/enge-team.jpg'
              alt='Engineers designing water treatment plant systems and reviewing technical drawings'
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
              <Link href='/about'>
                <button className='mt-4 bg-blue-700 text-white px-5 py-3 rounded-lg hover:bg-blue-800 transition'>
                  Learn More
                </button>
              </Link>
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
              {servicesTypes.map((service, index) => (
                <div
                  key={index}
                  className='bg-gradient-to-b from-blue-50 via-white to-blue-50 border-t-4 border-[#0A3D62] hover:shadow-xl rounded-xl p-6  shadow-md  transition'
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
              {whyUs.map((item, index) => (
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
            <Link href='/contact'>
              <button className='bg-white text-blue-700 px-6 py-3 rounded-lg font-medium hover:bg-gray-200 transition'>
                Contact Us Today
              </button>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
};

export default LandingPage;
