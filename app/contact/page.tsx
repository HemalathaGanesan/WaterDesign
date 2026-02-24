export const metadata = {
  title: "Contact Us | Water Design Engineering",
  description:
    "Get in touch with Water Design Engineering for water and wastewater infrastructure consultancy services.",
};

export default function ContactPage() {
  return (
    <main className='py-20 max-w-6xl mx-auto px-6'>
      <h1 className='text-4xl font-bold text-primary mb-10 text-center'>
        Contact Us
      </h1>

      <div className='grid md:grid-cols-2 gap-12'>
        {/* Contact Info */}
        <div>
          <h2 className='text-2xl font-semibold mb-6 text-primary'>
            Our Office
          </h2>
          <p className='mb-4'>
            Water Design Engineering <br />
            Chennai, Tamil Nadu, India
          </p>
          <p>Email: info@waterdesignengg.com</p>
          <p>Phone: +91 99999 99999</p>
        </div>

        {/* Contact Form */}
        <form className='space-y-6'>
          <input
            type='text'
            placeholder='Full Name'
            className='w-full border p-3 rounded-md'
          />
          <input
            type='email'
            placeholder='Email'
            className='w-full border p-3 rounded-md'
          />
          <textarea
            placeholder='Your Message'
            rows={5}
            className='w-full border p-3 rounded-md'
          ></textarea>
          <button className='bg-primary text-white px-6 py-3 rounded-md hover:bg-secondary transition'>
            Send Message
          </button>
        </form>
      </div>

      {/* Schema */}
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Water Design Engineering",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Chennai",
              addressCountry: "India",
            },
            telephone: "+91 99999 99999",
            email: "info@waterdesignengg.com",
          }),
        }}
      />
    </main>
  );
}
