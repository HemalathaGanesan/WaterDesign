"use client";

import React, { useState } from "react";

// const metadata = {
//   title: "Contact & Consultation | Water Design Engineering",
//   description:
//     "Get in touch with Water Design Engineering for expert consultation on WTP, STP, ETP, and wastewater treatment solutions.",
// };

const ContactPage = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("Form submitted! (Connect backend later)");
  };

  return (
    <main className='font-sans'>
      {/* ================= HERO ================= */}
      <section className='bg-gradient-to-r from-blue-800 to-teal-600 text-white py-20 text-center'>
        <h1 className='text-4xl font-bold mb-4'>Get a Free Consultation</h1>
        <p className='max-w-2xl mx-auto'>
          Discuss your water & wastewater treatment project with our experts. We
          provide reliable engineering solutions tailored to your needs.
        </p>
      </section>

      {/* ================= CONTENT ================= */}
      <section className='max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12'>
        {/* ===== LEFT: FORM ===== */}
        <div>
          <h2 className='text-2xl font-bold mb-6'>Request Consultation</h2>

          <form onSubmit={handleSubmit} className='space-y-4'>
            <input
              type='text'
              name='name'
              placeholder='Full Name'
              required
              onChange={handleChange}
              className='w-full border p-3 rounded-md'
            />

            <input
              type='email'
              name='email'
              placeholder='Email Address'
              required
              onChange={handleChange}
              className='w-full border p-3 rounded-md'
            />

            <input
              type='tel'
              name='phone'
              placeholder='Phone Number'
              required
              onChange={handleChange}
              className='w-full border p-3 rounded-md'
            />

            <select
              name='service'
              onChange={handleChange}
              className='w-full border p-2 rounded-md'
            >
              <option>Select Service</option>
              <option>Proposal Support</option>
              <option>Design Engineering</option>
              <option>WTP / STP / ETP Design</option>
              <option>Technical Documentation</option>
            </select>

            <textarea
              name='message'
              placeholder='Tell us about your project'
              rows={4}
              onChange={handleChange}
              className='w-full border p-3 rounded-md'
            ></textarea>

            <button
              type='submit'
              className='bg-blue-700 text-white px-6 py-3 rounded-md hover:bg-blue-800 transition w-full'
            >
              Submit Request
            </button>

            <p className='text-sm text-gray-500'>
              🔒 Your information is safe and confidential.
            </p>
          </form>
        </div>

        {/* ===== RIGHT: CONTACT INFO ===== */}
        <div>
          <h2 className='text-2xl font-bold mb-6'>Contact Information</h2>

          <div className='space-y-4 text-gray-700'>
            <p>
              📍 <strong>Address:</strong>
              <br />
              MI133, Ragavendra Colony, Avalappalli,Basthi, Hosur, Tamil Nadu,
              India
            </p>

            <p>
              📞 <strong>Phone:</strong>
              <br />
              <a href='tel:+918778859955' className='text-blue-700'>
                +91 8778859955
              </a>
            </p>

            <p>
              📧 <strong>Email:</strong>
              <br />
              <a
                href='mailto:waterdesignengg@gmail.com'
                className='text-blue-700'
              >
                waterdesignengg@gmail.com
              </a>
            </p>

            <p>
              🕒 <strong>Working Hours:</strong>
              <br />
              Mon - Sat: 9 AM – 6 PM
            </p>
          </div>

          {/* ===== MAP ===== */}
          <div className='mt-8'>
            <iframe
              src='https://www.google.com/maps?q=Basthi,Hosur&output=embed'
              width='100%'
              height='250'
              className='border rounded-lg'
              loading='lazy'
            ></iframe>
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className='bg-gray-100 py-12 text-center'>
        <h3 className='text-xl font-semibold mb-4'>
          Need Immediate Assistance?
        </h3>

        <div className='flex justify-center gap-4 flex-wrap'>
          <a
            href='tel:+918778859955'
            className='bg-blue-700 text-white px-6 py-3 rounded-md'
          >
            Call Now
          </a>

          <a
            href='https://wa.me/918778859955'
            className='bg-green-600 text-white px-6 py-3 rounded-md'
          >
            WhatsApp
          </a>
        </div>
      </section>
    </main>
  );
};

export default ContactPage;
