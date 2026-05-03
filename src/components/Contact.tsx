"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Github, Linkedin, Mail, Send } from "lucide-react";
import { socials } from "@/lib/data";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" ref={ref} className="py-32 px-6 bg-[var(--muted)]/30">
      <div className="max-w-7xl mx-auto">
        <motion.span
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="block text-sm text-[var(--accent)] uppercase tracking-widest mb-4"
        >
          Contact
        </motion.span>

        <div className="grid md:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Let&apos;s work together
            </h2>
            <p className="text-lg text-[var(--text)]/70 mb-8">
              Have a project in mind? I&apos;d love to hear about it. Drop me a
              message or reach out directly.
            </p>

            <div className="flex gap-4">
              {socials.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-[var(--bg)] rounded-full hover:bg-[var(--accent)] hover:text-white transition-all"
                >
                  {social.icon === "Github" && <Github className="w-5 h-5" />}
                  {social.icon === "Linkedin" && <Linkedin className="w-5 h-5" />}
                  {social.icon === "Mail" && <Mail className="w-5 h-5" />}
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            {submitted ? (
              <div className="p-8 bg-[var(--accent)] text-white rounded-2xl text-center">
                <Send className="w-12 h-12 mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                <p>Thanks for reaching out. I&apos;ll get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Name</label>
                  <input
                    type="text"
                    required
                    value={formState.name}
                    onChange={(e) =>
                      setFormState({ ...formState, name: e.target.value })
                    }
                    className="w-full px-6 py-4 bg-[var(--bg)] rounded-xl border border-[var(--muted)] focus:border-[var(--accent)] focus:outline-none transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    required
                    value={formState.email}
                    onChange={(e) =>
                      setFormState({ ...formState, email: e.target.value })
                    }
                    className="w-full px-6 py-4 bg-[var(--bg)] rounded-xl border border-[var(--muted)] focus:border-[var(--accent)] focus:outline-none transition-colors"
                    placeholder="you@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <textarea
                    required
                    rows={4}
                    value={formState.message}
                    onChange={(e) =>
                      setFormState({ ...formState, message: e.target.value })
                    }
                    className="w-full px-6 py-4 bg-[var(--bg)] rounded-xl border border-[var(--muted)] focus:border-[var(--accent)] focus:outline-none transition-colors resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-4 bg-[var(--text)] text-[var(--bg)] rounded-xl font-medium hover:bg-[var(--accent)] transition-colors"
                >
                  Send Message
                </button>
              </form>
            )}
          </motion.div>
        </div>

        <div className="mt-20 pt-8 border-t border-[var(--muted)] flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-[var(--text)]/50">
          <p>© {new Date().getFullYear()} Hanish Chow. All rights reserved.</p>
          <p>Built with Next.js + Framer Motion</p>
        </div>
      </div>
    </section>
  );
}