export const metadata = {
  title: "Water Engineering Blog | Insights & Industry Updates",
  description:
    "Latest insights, trends, and technical knowledge on water and wastewater engineering.",
};

export default function BlogPage() {
  const posts = [
    "Future of Wastewater Treatment Technology",
    "Sustainable Water Infrastructure Planning",
    "Industrial Effluent Treatment Best Practices",
    "Importance of Hydraulic Design in WTP",
  ];

  return (
    <main className='py-20 max-w-7xl mx-auto px-6'>
      <h1 className='text-4xl font-bold text-primary mb-12 text-center'>
        Engineering Insights & Articles
      </h1>

      <div className='grid md:grid-cols-3 gap-8'>
        {posts.map((post, i) => (
          <div key={i} className='p-6 bg-white shadow-md rounded-xl'>
            <h2 className='font-semibold text-primary mb-4'>{post}</h2>
            <p className='text-gray-600 text-sm'>
              Read our latest insights on water engineering innovations and best
              practices.
            </p>
          </div>
        ))}
      </div>
    </main>
  );
}
