import Link from "next/link";

export const metadata = {
  title: "Proposal Stage Support Services | Water Design Engineering",
  description:
    "Expert proposal stage support for water and wastewater infrastructure projects including bid documentation, hydraulic calculations, BOQ preparation, and compliance review.",
  keywords: [
    "Proposal Stage Support",
    "Water Infrastructure Bidding Support",
    "Technical Bid Documentation",
    "BOQ Preparation Services",
  ],
};

export default function ProposalSupport() {
  return (
    <main className='py-20 max-w-7xl mx-auto px-6'>
      <h1 className='text-4xl font-bold text-primary mb-8'>
        Proposal Stage Support Services
      </h1>

      <p className='text-gray-600 leading-relaxed mb-8'>
        Water Design Engineering provides complete technical and engineering
        support during the proposal and bidding stage of water and wastewater
        infrastructure projects.
      </p>

      <h2 className='text-2xl font-semibold text-primary mb-4'>
        Our Scope Includes
      </h2>

      <ul className='list-disc pl-6 space-y-3 text-gray-600 mb-10'>
        <li>Technical Bid Preparation</li>
        <li>Hydraulic & Process Calculations</li>
        <li>BOQ & Cost Estimation</li>
        <li>Specification Compliance Review</li>
        <li>Technical Drawings & Layouts</li>
      </ul>

      <div className='bg-lightBlue p-10 rounded-xl'>
        <h3 className='text-xl font-semibold text-primary mb-4'>
          Why Choose Our Proposal Support?
        </h3>
        <p className='text-gray-600'>
          Our expert engineering team ensures accurate documentation, optimized
          design solutions, and competitive bidding strategies.
        </p>
      </div>

      <div className='mt-12 text-center'>
        <Link
          href='/contact'
          className='bg-primary text-white px-8 py-3 rounded-md hover:bg-secondary transition'
        >
          Request Proposal Support
        </Link>
      </div>
    </main>
  );
}
