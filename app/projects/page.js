// app/projects/page.js

import Image from "next/image";

export default function ProjectsPage() {
  const images = [
    "img1.jpeg",
    "img2.jpeg",
    "img3.jpeg",
    "img4.jpeg",
    "img5.jpeg",
    "img6.jpeg",
    "img7.jpeg",
    "img8.jpeg",
    "img9.jpeg",
    "img10.jpeg",
    "img11.jpeg",
    "img12.jpeg",
    "img13.jpeg",
    "img14.jpeg",
    "img15.jpeg",
    "img16.jpeg",
    "img17.jpeg",
    "img18.jpeg",
  ];

  return (
    <div className="min-h-screen px-4 sm:px-6 py-12 bg-white">
      {/* Heading */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-10">
        Our <span className="text-green-700">Projects</span>, Something we are{" "}
        <span className="text-green-700">proud</span> of...
      </h1>

      {/* Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {images.map((img, index) => (
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
    </div>
  );
}
