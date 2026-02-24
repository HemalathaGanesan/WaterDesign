import Image from "next/image";

export const metadata = {
  title: "Our Projects | Water Infrastructure & Treatment Solutions",
  description:
    "Explore our completed and ongoing water and wastewater engineering projects across municipal and industrial sectors.",
};

export default function ProjectsPage() {
  const projects = [
    "Municipal Water Treatment Plant",
    "Industrial Effluent Treatment System",
    "Sewage Treatment Infrastructure",
    "Pipeline & Pumping Station Design",
    "Smart Water Distribution System",
  ];

  return (
    <main>
      <section className='bg-primary text-white py-24 text-center'>
        <h1 className='text-4xl font-bold mb-6'>Our Projects</h1>
        <p className='max-w-3xl mx-auto text-gray-200'>
          Delivering impactful water infrastructure solutions.
        </p>
      </section>

      <section className='py-20 max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8'>
        {projects.map((project, i) => (
          <div key={i} className='rounded-xl overflow-hidden shadow-md'>
            <div className='relative h-60'>
              <Image
                src={`/images/project/${i + 1}.jpg`}
                alt={project}
                fill
                className='object-cover'
              />
            </div>
            <div className='p-6 bg-white'>
              <h2 className='text-lg font-semibold text-primary'>{project}</h2>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}
