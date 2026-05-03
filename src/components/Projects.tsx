"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight, Github, ExternalLink } from "lucide-react";
import { projects } from "@/lib/data";

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" ref={ref} className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.span
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="block text-sm text-[var(--accent)] uppercase tracking-widest mb-4"
        >
          Selected Work
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold mb-16"
        >
          Featured Projects
        </motion.h2>

        <div className="space-y-32">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 + i * 0.1, duration: 0.8 }}
              className={`group relative ${
                i % 2 === 0 ? "md:ml-auto" : ""
              }`}
            >
              <div
                className={`grid md:grid-cols-2 gap-8 md:gap-16 items-center ${
                  i % 2 === 1 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Image/Preview */}
                <div className="relative aspect-video bg-[var(--muted)] rounded-2xl overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent)]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-6xl font-bold text-[var(--text)]/10 group-hover:text-[var(--text)]/20 transition-colors">
                      {project.title.charAt(0)}
                    </span>
                  </div>
                  {project.featured && (
                    <span className="absolute top-4 left-4 px-3 py-1 text-xs font-medium bg-[var(--accent)] text-white rounded-full">
                      Featured
                    </span>
                  )}
                </div>

                {/* Content */}
                <div className={`space-y-4 ${i % 2 === 1 ? "md:order-first" : ""}`}>
                  <h3 className="text-2xl md:text-3xl font-bold group-hover:text-[var(--accent)] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-[var(--accent)] font-medium">{project.subtitle}</p>
                  <p className="text-[var(--text)]/70 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs bg-[var(--muted)] rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4 pt-2">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm hover:text-[var(--accent)] transition-colors"
                      >
                        <Github className="w-4 h-4" />
                        Code
                        <ArrowUpRight className="w-3 h-3" />
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm hover:text-[var(--accent)] transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Demo
                        <ArrowUpRight className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}