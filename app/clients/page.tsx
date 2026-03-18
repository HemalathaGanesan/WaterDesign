import Image from "next/image";
import Link from "next/link";
import { clients } from "@/components/constants";

export const metadata = {
  title: "Our Clients | Water Design Engineering",
  description:
    "Explore our trusted clients and successful collaborations in water and wastewater treatment engineering projects across industries.",
};

export default function ClientsPage() {
  return (
    <main className='font-sans'>
      {/* ================= HERO ================= */}
      <section className='bg-gradient-to-r bg-primary-gradient text-white py-20 text-center'>
        <h1 className='text-4xl font-bold mb-4'>Our Trusted Clients</h1>
        <p className='max-w-2xl mx-auto'>
          We are proud to collaborate with leading industries and organizations,
          delivering reliable and efficient water engineering solutions.
        </p>
      </section>

      {/* ================= CLIENT LOGOS ================= */}
      <section className='py-20 bg-gray-50'>
        <div className='max-w-7xl mx-auto px-6 text-center'>
          <h2 className='text-3xl font-bold mb-10'>
            Companies We Have Worked With
          </h2>

          <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 items-center'>
            {clients.map((client, index) => (
              <div
                key={index}
                className='flex justify-center items-center h-25 bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition'
              >
                <Image
                  src={client.src}
                  alt={client.name}
                  width={150}
                  height={50}
                  className='object-contain max-h-[70px] w-auto grayscale hover:grayscale-0 transition duration-300'
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= PROJECT HIGHLIGHTS ================= */}
      <section className='py-20'>
        <div className='max-w-6xl mx-auto px-6 text-center'>
          <h2 className='text-3xl font-bold mb-10'>Project Highlights</h2>

          <div className='grid md:grid-cols-3 gap-8'>
            <div className='p-6 border rounded-lg shadow-sm'>
              <h3 className='font-semibold text-lg mb-2'>25+ MLD STP Design</h3>
              <p className='text-gray-600'>
                Designed large-scale sewage treatment systems for municipal
                applications ensuring efficiency and compliance.
              </p>
            </div>

            <div className='p-6 border rounded-lg shadow-sm'>
              <h3 className='font-semibold text-lg mb-2'>
                Industrial ETP Solutions
              </h3>
              <p className='text-gray-600'>
                Delivered customized effluent treatment solutions for industrial
                clients with optimized cost and performance.
              </p>
            </div>

            <div className='p-6 border rounded-lg shadow-sm'>
              <h3 className='font-semibold text-lg mb-2'>
                Pumping System Design
              </h3>
              <p className='text-gray-600'>
                Engineered hydraulic pumping systems ensuring reliable and
                efficient water transport.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= TRUST SECTION ================= */}
      <section className='py-20 bg-lightblue'>
        <div className='max-w-5xl mx-auto px-6 text-center'>
          <h2 className='text-3xl font-bold mb-6'>Why Clients Trust Us</h2>

          <p className='text-gray-600 mb-8'>
            With 40+ years of combined experience and 45+ successfully delivered
            projects, Water Design Engineering is a trusted partner for water
            and wastewater treatment solutions.
          </p>

          <div className='grid md:grid-cols-3 gap-6 text-gray-700'>
            <div>✔ Proven Engineering Expertise</div>
            <div>✔ Timely Project Delivery</div>
            <div>✔ Cost-Effective Solutions</div>
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className='py-20 text-center bg-gradient-to-r bg-primary-gradient text-white'>
        <h2 className='text-3xl font-bold mb-6'>Let’s Work Together</h2>

        <p className='mb-8'>
          Looking for a reliable engineering partner for your next project?
        </p>

        <Link
          href='/contact'
          className='bg-white text-primary px-6 py-3 rounded-md font-medium hover:bg-gray-200 transition'
        >
          Contact Us
        </Link>
      </section>
    </main>
  );
}
