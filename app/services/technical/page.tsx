import Link from "next/link";

export const metadata = {
  title: "Technical Documentation Services | Water Engineering Consultancy",
  description:
    "Professional technical documentation services including reports, specifications, compliance documents, and engineering drawings for water infrastructure projects.",
};

export default function TechnicalDocumentation() {
  return (
    <main className='py-20 max-w-7xl mx-auto px-6'>
      <h1 className='text-4xl font-bold text-primary mb-8'>
        Technical Documentation Services
      </h1>

      <p className='text-gray-600 leading-relaxed mb-8'>
        We provide accurate and comprehensive engineering documentation required
        for water and wastewater infrastructure projects.
      </p>

      <h2 className='text-2xl font-semibold text-primary mb-4'>
        Documentation Includes
      </h2>

      <ul className='list-disc pl-6 space-y-3 text-gray-600 mb-10'>
        <li>Detailed Project Reports (DPR)</li>
        <li>Technical Specifications</li>
        <li>Compliance & Regulatory Documentation</li>
        <li>Engineering Drawings & Layouts</li>
      </ul>

      <div className='bg-lightBlue p-10 rounded-xl'>
        <h3 className='text-xl font-semibold text-primary mb-4'>
          Accuracy & Compliance Guaranteed
        </h3>
        <p className='text-gray-600'>
          Our documentation ensures regulatory approval, technical clarity, and
          seamless project execution.
        </p>
      </div>

      <div className='mt-12 text-center'>
        <Link
          href='/contact'
          className='bg-primary text-white px-8 py-3 rounded-md hover:bg-secondary transition'
        >
          Get Documentation Support
        </Link>
      </div>
    </main>
  );
}
