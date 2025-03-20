'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import Image from 'next/image';

type Project = {
  id: number;
  title: string;
  category: string;
  image1: string;
  image2: string;
  description: string;
  fullDescription: string;
};

const projects: Project[] = [
  {
    id: 1,
    title: "Batak Design",
    category: "Branding",
    image1: "/batak1.jpg",
    image2: "/batak2.jpg",
    description: "Brand identity development for a design studio",
    fullDescription: "Complete visual identity system for Batak Design, including logo design, typography selection, color palette development, and brand guidelines to ensure consistent application across all touchpoints."
  },
  {
    id: 2,
    title: "Barberry",
    category: "Packaging Design",
    image1: "/bepi1.png",
    image2: "/bepi2.png",
    description: "Custom packaging design for a premium product line",
    fullDescription: "Sophisticated packaging solution for Barberry's premium product line, featuring custom illustrations, tactile finishes, and sustainable materials that elevate the unboxing experience and reflect the brand's commitment to quality."
  },
  {
    id: 3,
    title: "Dioda Tech Fix",
    category: "Branding",
    image1: "/dioda1.png",
    image2: "/dioda2.png",
    description: "Brand identity for a technology repair service",
    fullDescription: "Comprehensive brand identity for Dioda Tech Fix that communicates reliability and technical expertise. The visual system includes a dynamic logo, technical-inspired graphics, and a vibrant color scheme that stands out in the technology service marketplace."
  },
  {
    id: 4,
    title: "DreamLog",
    category: "Branding",
    image1: "/dream1.png",
    image2: "/dream2.png",
    description: "Visual identity design for a creative agency",
    fullDescription: "Bold and imaginative brand identity for DreamLog creative agency. The design concept captures the essence of creativity and innovation through abstract elements, fluid shapes, and a versatile color system that adapts to various applications."
  }
];

const categories = ["All", "Branding", "Packaging Design", "Web Design", "UI/UX"];

export default function PortfolioSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeCategory, setActiveCategory] = useState("All");
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const filteredProjects = activeCategory === "All"
    ? projects
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="portfolio" className="py-20 bg-black relative overflow-hidden">
      <div ref={ref} className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-100 via-white to-pink-100">
            Our Portfolio
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Explore our collection of successful projects and creative solutions
          </p>
        </motion.div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full transition-colors duration-200 ${
                activeCategory === category
                  ? "bg-gradient-to-r from-purple-600 to-purple-800 text-white"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="group relative overflow-hidden rounded-lg bg-gray-900"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                <div className="aspect-square bg-gray-800 relative overflow-hidden">
                  <Image 
                    src={project.image1}
                    alt={`${project.title} - Image 1`}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="aspect-square bg-gray-800 relative overflow-hidden">
                  <Image 
                    src={project.image2}
                    alt={`${project.title} - Image 2`}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                {/* Overlay for hover effect */}
                <div 
                  className={`absolute inset-0 flex flex-col justify-center items-center p-8 transition-opacity duration-300 ${
                    hoveredProject === project.id ? 'opacity-100' : 'opacity-0 pointer-events-none'
                  }`}
                  style={{
                    background: 'linear-gradient(135deg, rgba(109, 40, 217, 0.92) 0%, rgba(76, 29, 149, 0.95) 100%)'
                  }}
                >
                  <h3 className="text-2xl font-bold mb-3 text-white">{project.title}</h3>
                  <p className="text-purple-100 mb-4">{project.category}</p>
                  <p className="text-white text-center">{project.fullDescription}</p>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.category}</p>
                <p className="text-gray-300">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 left-1/4 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl" />
      </div>
    </section>
  );
} 