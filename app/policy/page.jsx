"use client";
import React from 'react'
import { cascadia } from "@/utils/cascadia";
import Link from 'next/link';
const page = () => {
  return (
    <div className="bg-black min-h-screen w-screen text-white">
      {/* Logo Section */}
      <div className="flex justify-center py-8">
       <span>
            <Link href={"/"} className={`text-[40px] sm:text-[50px] lg:text-[60px] text-neutral-100 ${cascadia.className}`}>Scripters</Link>   
       </span>
      </div>

      {/* Main Content */}
      <div className="flex justify-center">
        <div className="max-w-4xl w-full p-6">
          {/* About Us Section */}
          <section className="about-us-section p-8 bg-gray-800 rounded-lg shadow-lg">
            <h1 className="text-4xl font-bold mb-6 text-center">About Us</h1>
            <p className="text-lg leading-relaxed">
              Welcome to Scripters! We are a passionate team of developers and designers dedicated to creating innovative and user-friendly web solutions. Our mission is to empower businesses and individuals by providing high-quality, cutting-edge technology services.
            </p>
            <p className="text-lg leading-relaxed mt-4">
              At Scripters, we believe in the power of collaboration and creativity. Whether you&apos;re looking for a custom website, a mobile app, or a unique digital experience, we are here to bring your ideas to life.
            </p>
          </section>

          {/* Policy Section */}
          <section className="policy-section p-8 bg-gray-900 text-gray-300 rounded-lg shadow-lg mt-8">
            <h2 className="text-3xl font-bold mb-6 text-center">Fulfilment, Refund & Cancellation Policy</h2>
            <p className="text-sm mb-4 text-center">Effective Date: April 11, 2025</p>

            <div className="mb-8">
              <h3 className="text-2xl font-semibold mb-4">1. Service Fulfilment</h3>
              <p className="text-lg leading-relaxed">
                At Scripters Hub Pvt. Ltd., we provide a range of digital services, including but not limited to:
              </p>
              <ul className="list-disc list-inside mt-4 space-y-2">
                <li>Logo and branding design</li>
                <li>Website and web application development</li>
                <li>Search Engine Optimization (SEO)</li>
                <li>Content creation</li>
                <li>Digital marketing</li>
              </ul>
              <p className="text-lg leading-relaxed mt-4">
                Upon confirmation of payment, we initiate the project as per the agreed timeline discussed during the consultation phase. Delivery timelines vary based on the project&apos;s scope and complexity and will be communicated clearly before project commencement.
              </p>
            </div>

            <div className="mb-8">
              <h3 className="text-2xl font-semibold mb-4">2. Refund Policy</h3>
              <p className="text-lg leading-relaxed">
                We strive to ensure client satisfaction with our services. However, due to the nature of digital services, refunds are considered under the following conditions:
              </p>
              <ul className="list-disc list-inside mt-4 space-y-2">
                <li>If the project has not commenced within the agreed timeframe due to our delay.</li>
                <li>If the delivered service deviates significantly from the agreed-upon specifications.</li>
              </ul>
              <p className="text-lg leading-relaxed mt-4">
                Refund requests must be submitted within 7 days of service delivery. Each request will be evaluated on a case-by-case basis.
              </p>
            </div>

            <div className="mb-8">
              <h3 className="text-2xl font-semibold mb-4">3. Cancellation Policy</h3>
              <p className="text-lg leading-relaxed">
                Clients may request a cancellation of services before the project has commenced. If a cancellation is requested after the project has started, charges will apply based on the work completed up to that point.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-4">4. Contact Us</h3>
              <p className="text-lg leading-relaxed">
                For any queries or to request a refund or cancellation, please contact us at:
              </p>
              <ul className="list-none mt-4 space-y-2">
                <li>Email: <a href="mailto:info@scriptersltd.com" className="text-blue-400 underline">info@scriptersltd.com</a></li>
                <li>Phone: (021)-34800896</li>
                <li>Address: Block 5, FL-4, Rashid Minhas Rd, Gulshan-e-Iqbal, Karachi, 75300</li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default page