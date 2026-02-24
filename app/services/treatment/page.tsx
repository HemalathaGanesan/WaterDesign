import Link from "next/link";

export const metadata = {
  title: "Water & Wastewater Treatment Plant Design | WTP & STP Experts",
  description:
    "Specialized design of Water Treatment Plants (WTP), Sewage Treatment Plants (STP), and Effluent Treatment Plants (ETP) for municipal and industrial sectors.",
};

export default function TreatmentPlantDesign() {
  return (
    <main className='py-20 max-w-7xl mx-auto px-6'>
      <h1 className='text-4xl font-bold text-primary mb-8'>
        Water & Wastewater Treatment Plant Design
      </h1>

      <p className='text-gray-600 leading-relaxed mb-8'>
        We design efficient and sustainable WTP, STP, and ETP systems tailored
        to municipal and industrial requirements.
      </p>

      <h2 className='text-2xl font-semibold text-primary mb-4'>
        Our Treatment Solutions
      </h2>

      <ul className='list-disc pl-6 space-y-3 text-gray-600 mb-10'>
        <li>Conventional & Advanced Treatment Processes</li>
        <li>Membrane & Biological Treatment Systems</li>
        <li>Sludge Management Solutions</li>
        <li>Energy Efficient System Design</li>
      </ul>

      <div className='bg-lightBlue p-10 rounded-xl'>
        <h3 className='text-xl font-semibold text-primary mb-4'>
          Environmentally Responsible Design
        </h3>
        <p className='text-gray-600'>
          Our engineering solutions prioritize sustainability, regulatory
          compliance, and long-term operational efficiency.
        </p>
      </div>

      <div className='mt-12 text-center'>
        <Link
          href='/contact'
          className='bg-primary text-white px-8 py-3 rounded-md hover:bg-secondary transition'
        >
          Discuss Your Treatment Project
        </Link>
      </div>
    </main>
  );
}
