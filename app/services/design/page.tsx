import Link from "next/link";

export const metadata = {
  title: "Design & Detail Engineering | Water Infrastructure Solutions",
  description:
    "Comprehensive design and detail engineering services including hydraulic design, P&ID development, plant layouts, and structural coordination for water projects.",
};

export default function DesignEngineering() {
  return (
    <main className='py-20 max-w-7xl mx-auto px-6'>
      <h1 className='text-4xl font-bold text-primary mb-8'>
        Design & Detail Engineering
      </h1>

      <p className='text-gray-600 leading-relaxed mb-8'>
        We provide complete process design and detailed engineering solutions
        for water and wastewater infrastructure systems.
      </p>

      <h2 className='text-2xl font-semibold text-primary mb-4'>
        Engineering Expertise
      </h2>

      <ul className='list-disc pl-6 space-y-3 text-gray-600 mb-10'>
        <li>Hydraulic Design & Calculations</li>
        <li>Piping & Instrumentation Diagrams (P&ID)</li>
        <li>General Arrangement Drawings</li>
        <li>Mechanical & Structural Coordination</li>
        <li>Process Optimization</li>
      </ul>

      <div className='bg-lightBlue p-10 rounded-xl'>
        <h3 className='text-xl font-semibold text-primary mb-4'>
          Sustainable & Cost-Effective Engineering
        </h3>
        <p className='text-gray-600'>
          Our design approach ensures operational efficiency, sustainability,
          and compliance with regulatory standards.
        </p>
      </div>

      <div className='mt-12 text-center'>
        <Link
          href='/contact'
          className='bg-primary text-white px-8 py-3 rounded-md hover:bg-secondary transition'
        >
          Consult Our Engineers
        </Link>
      </div>
    </main>
  );
}
