import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Water & Wastewater Engineering Services | Water Design Engineering",
  description:
    "Comprehensive water and wastewater engineering services including treatment plant design, proposal support, technical documentation, and infrastructure consultancy.",
  keywords: [
    "Water Engineering Services",
    "Wastewater Engineering",
    "Water Treatment Plant Design",
    "Infrastructure Engineering Consultancy",
    "Industrial Water Solutions",
  ],
};

export default function ServicesPage() {
  const services = [
    {
      title: "Proposal Stage Support",
      desc: "Comprehensive technical and commercial support during tendering and bidding stages.",
      img: "/images/service1.jpg",
    },
    {
      title: "Design & Detail Engineering",
      desc: "Complete process design, hydraulic calculations, P&ID development, and plant layouts.",
      img: "/images/service2.jpg",
    },
    {
      title: "Water & Wastewater Treatment Design",
      desc: "Design of WTP, STP, ETP systems for municipal and industrial sectors.",
      img: "/images/service3.jpg",
    },
    {
      title: "Technical Documentation",
      desc: "Preparation of reports, drawings, BOQ, specifications, and compliance documentation.",
      img: "/images/service4.jpg",
    },
    {
      title: "Site Survey & O&M Support",
      desc: "On-site engineering support, inspections, commissioning assistance, and operational guidance.",
      img: "/images/service5.jpg",
    },
  ];

  return (
    <main className='bg-white text-darkText'>
      {/* HERO */}
      <section className='bg-primary text-white py-24 text-center'>
        <h1 className='text-4xl md:text-5xl font-bold mb-6'>
          Our Water Engineering Services
        </h1>
        <p className='max-w-3xl mx-auto text-lg text-gray-200'>
          Delivering reliable, sustainable, and technically advanced water
          infrastructure solutions.
        </p>
      </section>

      {/* SERVICES GRID */}
      <section className='py-20 max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10'>
        {services.map((service, i) => (
          <div
            key={i}
            className='bg-white rounded-xl shadow-md hover:shadow-xl transition overflow-hidden'
          >
            <div className='relative h-60'>
              <Image
                src={service.img}
                alt={service.title}
                fill
                className='object-cover'
              />
            </div>

            <div className='p-6'>
              <h2 className='text-xl font-semibold text-primary mb-4'>
                {service.title}
              </h2>
              <p className='text-gray-600 text-sm leading-relaxed'>
                {service.desc}
              </p>
            </div>
          </div>
        ))}
      </section>

      {/* CTA */}
      <section className='bg-lightBlue py-20 text-center'>
        <h2 className='text-3xl font-bold mb-6 text-primary'>
          Need Technical Engineering Support?
        </h2>
        <Link
          href='/contact'
          className='bg-primary text-white px-8 py-3 rounded-md hover:bg-secondary transition'
        >
          Get Consultation
        </Link>
      </section>
    </main>
  );
}
