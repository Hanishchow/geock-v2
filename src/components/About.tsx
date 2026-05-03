"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Github, Linkedin, Mail, Coffee } from "lucide-react";
import { socials } from "@/lib/data";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" ref={ref} className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.span
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="block text-sm text-[var(--accent)] uppercase tracking-widest mb-4"
        >
          About
        </motion.span>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Building the future with <span className="gradient-text">code</span>
            </h2>
            <div className="space-y-6 text-lg text-[var(--text)]/70 leading-relaxed">
              <p>
                I&apos;m a developer and researcher based in Hyderabad, India,
                working at the intersection of{" "}
                <span className="text-[var(--accent)] font-medium">biology</span>,{" "}
                <span className="text-[var(--accent)] font-medium">AI</span>, and{" "}
                <span className="text-[var(--accent)] font-medium">
                  computational simulation
                </span>
                .
              </p>
              <p>
                My work focuses on using machine learning to understand complex
                biological systems — from protein engineering to gene editing.
                I believe the most impactful problems lie at the boundaries
                between disciplines.
              </p>
              <p>
                When I&apos;m not building models, you&apos;ll find me simulating
                stellar evolution, exploring quantum mechanics, or contributing
                to open-source AI projects.
              </p>
            </div>

            {/* Social Links */}
            <div className="flex gap-6 mt-10">
              {socials.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-[var(--muted)] rounded-full hover:bg-[var(--accent)] hover:text-white transition-all group"
                >
                  {social.icon === "Github" && (
                    <Github className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  )}
                  {social.icon === "Linkedin" && (
                    <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  )}
                  {social.icon === "Mail" && (
                    <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  )}
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="relative"
          >
            {/* Decorative image placeholder */}
            <div className="aspect-[3/4] bg-[var(--muted)] rounded-2xl overflow-hidden relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-8xl font-bold text-[var(--text)]/10 mb-4">HC</div>
                  <div className="text-sm text-[var(--text)]/40">Photo coming soon</div>
                </div>
              </div>
              
              {/* Floating elements */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute top-8 right-8 px-4 py-2 bg-[var(--bg)] rounded-full shadow-lg"
              >
                <Coffee className="w-4 h-4 text-[var(--accent)]" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}