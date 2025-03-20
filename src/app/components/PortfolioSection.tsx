'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';

type Project = {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
};

const projects: Project[] = [
  {
    id: 1,
    title: "E-commerce Platform",
    category: "Web Design",
    image: "/projects/ecommerce.jpg",
    description: "A modern e-commerce platform with seamless user experience"
  },
  {
    id: 2,
    title: "Brand Identity",
    category: "Branding",
    image: "/projects/branding.jpg",
    description: "Complete brand identity design for a tech startup"
  },
  {
    id: 3,
    title: "Mobile App UI",
    category: "UI/UX",
    image: "/projects/mobile-app.jpg",
    description: "User interface design for a fitness tracking app"
  },
  {
    id: 4,
    title: "Website Redesign",
    category: "Web Design",
    image: "/projects/website.jpg",
    description: "Modern redesign of a corporate website"
  },
  {
    id: 5,
    title: "Social Media Campaign",
    category: "Marketing",
    image: "/projects/social.jpg",
    description: "Social media campaign design and strategy"
  },
  {
    id: 6,
    title: "Product Packaging",
    category: "Branding",
    image: "/projects/packaging.jpg",
    description: "Product packaging design for a sustainable brand"
  }
];

const categories = ["All", "Web Design", "Branding", "UI/UX", "Marketing"];

export default function PortfolioSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeCategory, setActiveCategory] = useState("All");

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
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Portfolio</h2>
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
                  ? "bg-purple-600 text-white"
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
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="group relative overflow-hidden rounded-lg bg-gray-900"
            >
              <div className="aspect-video bg-gray-800 relative">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-4xl font-bold text-white/10">D+</div>
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