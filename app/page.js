// app/page.js

import { Span } from "next/dist/trace";
import Navbar from "../components/Navbar";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Navbar />

      {/* HERO */}
      <section
        id="intro"
        className="relative min-h-screen flex items-center justify-center text-center px-4 sm:px-6"
      >
        <div className="absolute inset-0">
          <Image
            src="/img20.jpeg"
            alt="background"
            fill
            priority
            className="object-cover"
          />
        </div>

        <div className="relative z-10 max-w-3xl font-serif px-4 mx-auto">
          {/* backdrop */}
          <div className="absolute inset-0 -mx-4 sm:-mx-10 lg:-mx-20 bg-black/50 -z-10 rounded-2xl"></div>

          {/* heading */}
          <div className="text-3xl sm:text-6xl md:text-6xl text-white font-bold mb-4 py-2">
            Crafting Spaces with <span className="text-white">Elegance</span>
          </div>

          {/* text */}
          <p className="text-sm sm:text-xl md:text-2xl text-white mb-4 py-3">
            Premium civil and interior solutions for modern businesses.
          </p>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-12 md:py-20 font-serif px-4 sm:px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-10">
          <div className="max-w-xl text-center md:text-left">
            <div className="text-2xl  sm:text-3xl md:text-5xl font-bold mb-4">
              About <span className="text-green-700">Us</span>
            </div>
            <p className="text-black text-sm sm:text-base leading-relaxed">
              The Elegance Infra is a civil interior and turnkey execution
              company specializing in retail, QSR, and commercial spaces. We
              focus on delivering high-quality, cost-efficient, and scalable
              interior solutions that align with brand identity while ensuring
              seamless execution. With experience across multiple outlets, our
              strength lies in fast project delivery, consistent finishes, and
              end-to-end management — from civil work to final handover. We
              partner with growing brands to help them launch and scale their
              spaces efficiently, while maintaining uniformity across locations.
            </p>
          </div>

          <div className="w-full max-w-xl sm:max-w-xl h-90 sm:h-90 relative rounded-lg overflow-hidden">
            <Image
              src="/img4.jpeg"
              alt="about"
              fill
              sizes="(max-width: 640px) 100vw, 400px"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section
        id="why"
        className="relative font-serif py-12 md:py-20 px-4 sm:px-6"
      >
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/img19.jpeg"
            alt="background"
            fill
            sizes="100vw"
            className="object-cover opacity-200"
          />
        </div>

        {/* Overlay (optional for clarity) */}
        <div className="absolute inset-0 bg-white/20"></div>

        {/* Content */}
        <div className="relative max-w-6xl mx-auto text-center">
          <div className="text-2xl sm:text-3xl md:text-4xl text-white font-bold mb-8">
            Why Choose <span className="text-white">US</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-6">
            <div className="p-5 sm:p-6 bg-white shadow rounded-lg transition duration-300 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(21,128,61,0.3)]">
              <h3 className="text-lg sm:text-xl font-semibold mb-2">
                Punctual Delivery
              </h3>
              <p className="text-gray-600 text-sm sm:text-base">
                We complete projects on time without compromising quality.
              </p>
            </div>

            <div className="p-5 sm:p-6 bg-white shadow rounded-lg transition duration-300 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(21,128,61,0.3)]">
              <h3 className="text-lg sm:text-xl font-semibold mb-2">
                Premium Quality
              </h3>
              <p className="text-gray-600 text-sm sm:text-base">
                Top-grade materials and skilled workmanship ensure durability.
              </p>
            </div>

            <div className="p-5 sm:p-6 bg-white shadow rounded-lg transition duration-300 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(21,128,61,0.3)]">
              <h3 className="text-lg sm:text-xl font-semibold mb-2">
                Experienced Team
              </h3>
              <p className="text-gray-600 text-sm sm:text-base">
                Years of expertise in handling retail and commercial projects.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="py-12 font-serif md:py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4">
            Our <span className="text-green-700">Projects</span>
          </h2>
          <p className="text-gray-600 text-sm sm:text-base mb-8">
            A glimpse of our recent work and successful executions.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-6">
            {[
              "img1.jpeg",
              "img2.jpeg",
              "img3.jpeg",
              "img4.jpeg",
              "img5.jpeg",
              "img6.jpeg",
            ].map((img, index) => (
              <a
                key={index}
                href={`/${img}`}
                target="_blank"
                className="block w-full h-52 sm:h-56 md:h-64 relative rounded-xl overflow-hidden shadow-md"
              >
                <Image
                  src={`/${img}`}
                  alt="project"
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover hover:scale-105 transition duration-300"
                />
              </a>
            ))}
          </div>

          <Link
            href="/projects"
            className="inline-block mt-8 px-5 py-2.5 sm:px-6 sm:py-3 bg-green-700 text-white rounded-lg hover:bg-green-800 text-sm sm:text-base"
          >
            View More
          </Link>
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="relative font-serif py-12 md:py-20 px-4 sm:px-6"
      >
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/img17.jpeg"
            alt="background"
            fill
            sizes="100vw"
            className="object-cover opacity-100"
          />
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Content */}
        <div className="relative max-w-3xl mx-auto text-center text-white">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            Contact <span className="text-green-700">Us</span>
          </h2>

          <p className="text-sm sm:text-base text-gray-200 mb-6">
            Let’s discuss your next project. Reach out to us directly on
            WhatsApp.
          </p>

          <a
            href="https://wa.me/917042880507?text=Hello%20I%20am%20looking%20for%20civil%20and%20interior%20execution%20services.%20Please%20connect%20with%20me."
            target="_blank"
            className="inline-flex items-center gap-3 px-6 py-3 bg-green-700 text-white rounded-lg hover:bg-green-700 transition text-sm sm:text-base"
          >
            Chat on WhatsApp
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-black text-white font-serif py-8 px-4 sm:px-6 text-center">
        <h2 className="text-lg sm:text-xl font-serif mb-2">
          The Elegance <span className="text-green-600">Infra</span>
        </h2>
        <p className="text-gray-400 text-sm mb-3">
          Crafting spaces with elegance and precision.
        </p>
        <p className="text-xs text-gray-500">
          © 2026 Elegance Infra. All rights reserved.
        </p>
      </footer>
    </>
  );
}
