"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowDown, Sparkles } from "lucide-react";

export default function Hero() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden"
    >
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-[var(--accent)] blur-[120px] opacity-20"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.3, 0.5],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-[var(--accent)] blur-[150px] opacity-15"
        />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center"
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--muted)] text-sm mb-8"
          >
            <Sparkles className="w-4 h-4 text-[var(--accent)]" />
            <span>Based in Hyderabad, India</span>
          </motion.span>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 leading-[0.95]">
            Developer
            <br />
            <span className="gradient-text">& Researcher</span>
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-xl md:text-2xl text-[var(--text)]/70 max-w-2xl mx-auto mb-12"
          >
            Building at the intersection of{" "}
            <span className="text-[var(--accent)]">biology</span>,{" "}
            <span className="text-[var(--accent)]">AI</span>, and{" "}
            <span className="text-[var(--accent)]">simulation</span>.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="flex flex-wrap justify-center gap-6 mb-16"
          >
            <a
              href="#projects"
              className="px-8 py-4 bg-[var(--text)] text-[var(--bg)] rounded-full font-medium hover:bg-[var(--accent)] transition-colors"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-8 py-4 border border-[var(--text)] rounded-full font-medium hover:bg-[var(--muted)] transition-colors"
            >
              Get in Touch
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="flex justify-center gap-12 md:gap-20"
          >
            {[
              { value: "15+", label: "Projects" },
              { value: "5+", label: "Years" },
              { value: "GitHub", label: "Contributor" },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-[var(--accent)]">
                  {stat.value}
                </div>
                <div className="text-sm text-[var(--text)]/50 uppercase tracking-wider mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      <motion.a
        href="#projects"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
      >
        <ArrowDown className="w-6 h-6 text-[var(--text)]/40" />
      </motion.a>
    </section>
  );
}