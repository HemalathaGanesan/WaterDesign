import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "About Us | Water Design Engineering - Water & Wastewater Experts",
  description:
    "Water Design Engineering is a leading water and wastewater engineering company providing innovative infrastructure solutions, treatment plant design, and technical consultancy services.",
  keywords: [
    "Water Engineering Company",
    "Wastewater Engineering",
    "Water Infrastructure Solutions",
    "Water Treatment Design",
    "Engineering Consultancy India",
  ],
};

export default function AboutPage() {
  return (
    <main className='bg-white text-darkText'>
      {/* ================= HERO SECTION ================= */}
      <section className='relative h-[60vh] flex items-center justify-center text-center text-white'>
        <Image
          src='/images/about.jpg'
          alt='Water Engineering Infrastructure'
          fill
          className='object-cover'
        />
        <div className='absolute inset-0 bg-primary/80'></div>

        <div className='relative z-10 max-w-3xl px-6'>
          <h1 className='text-4xl md:text-5xl font-bold mb-6'>
            About Water Design Engineering
          </h1>
          <p className='text-lg text-gray-200'>
            Delivering sustainable water and wastewater infrastructure solutions
            through engineering excellence and innovation.
          </p>
        </div>
      </section>

      {/* ================= COMPANY OVERVIEW ================= */}
      <section className='py-20 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center'>
        <div>
          <h2 className='text-3xl font-bold mb-6 text-primary'>Who We Are</h2>
          <p className='text-gray-600 leading-relaxed mb-6'>
            Water Design Engineering is a specialized water and wastewater
            engineering consultancy committed to delivering technically
            advanced, sustainable, and cost-effective solutions for water
            infrastructure projects.
          </p>
          <p className='text-gray-600 leading-relaxed'>
            Our expertise spans proposal stage support, detailed engineering,
            treatment plant design, technical documentation, and operational
            support for public and private sector projects.
          </p>
        </div>

        <div className='relative h-96'>
          <Image
            src='/images/company-overview.jpg'
            alt='Water Engineering Team'
            fill
            className='object-cover rounded-xl shadow-lg'
          />
        </div>
      </section>

      {/* ================= VISION & MISSION ================= */}
      <section className='bg-lightBlue py-20'>
        <div className='max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12'>
          <div className='bg-white p-10 rounded-2xl shadow-md'>
            <h3 className='text-2xl font-semibold mb-4 text-primary'>
              Our Vision
            </h3>
            <p className='text-gray-600 leading-relaxed'>
              To be a trusted leader in water and wastewater engineering,
              contributing to sustainable water management and infrastructure
              development globally.
            </p>
          </div>

          <div className='bg-white p-10 rounded-2xl shadow-md'>
            <h3 className='text-2xl font-semibold mb-4 text-primary'>
              Our Mission
            </h3>
            <p className='text-gray-600 leading-relaxed'>
              To provide innovative, efficient, and environmentally responsible
              engineering solutions that enhance water accessibility, quality,
              and infrastructure resilience.
            </p>
          </div>
        </div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <section className='py-20 max-w-7xl mx-auto px-6 text-center'>
        <h2 className='text-3xl font-bold mb-12 text-primary'>Why Choose Us</h2>

        <div className='grid md:grid-cols-4 gap-8'>
          {[
            "Experienced Engineering Team",
            "End-to-End Project Support",
            "Technical Excellence",
            "Sustainable & Cost-Effective Solutions",
          ].map((item, index) => (
            <div
              key={index}
              className='bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition'
            >
              <h4 className='font-semibold text-lg text-primary mb-3'>
                {item}
              </h4>
              <p className='text-gray-600 text-sm'>
                Delivering high-quality water engineering services with
                precision and reliability.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= INDUSTRIES ================= */}
      <section className='bg-lightGray py-20'>
        <div className='max-w-7xl mx-auto px-6 text-center'>
          <h2 className='text-3xl font-bold mb-10 text-primary'>
            Industries We Serve
          </h2>

          <div className='grid md:grid-cols-3 gap-8'>
            {[
              "Municipal Water Authorities",
              "Industrial Manufacturing Units",
              "Infrastructure & EPC Contractors",
              "Real Estate & Smart Cities",
              "Public Sector Undertakings",
              "Private Water Utilities",
            ].map((industry, i) => (
              <div
                key={i}
                className='bg-white p-6 rounded-xl shadow hover:shadow-lg transition'
              >
                {industry}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className='py-20 bg-gradient-to-r from-primary to-secondary text-white text-center'>
        <h2 className='text-3xl font-bold mb-6'>
          Partner With Us For Reliable Water Infrastructure Solutions
        </h2>
        <Link
          href='/contact'
          className='bg-white text-primary px-8 py-3 rounded-md font-medium hover:bg-gray-100 transition'
        >
          Contact Our Team
        </Link>
      </section>
    </main>
  );
}
