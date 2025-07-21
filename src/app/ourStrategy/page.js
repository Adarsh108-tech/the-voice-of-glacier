"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { useEffect } from "react";
import { useRouter } from "next/router";

const strategyGaps = [
  {
    title: "Lack of Glacier Education",
    content:
      "Most communities and schools lack awareness of the Cryosphere`s role in climate systems, leading to weak advocacy and action.",
  },
  {
    title: "Disconnected Global-Local Policy",
    content:
      "Policies are often created globally without accounting for local realities or involving local voices from glacier regions.",
  },
  {
    title: "Missing Open Cryo Data",
    content:
      "Data on glacial retreat, GLOFs, and melt patterns are often siloed, outdated, or inaccessible to the public and researchers.",
  },
  {
    title: "Under-leveraged Youth Movements",
    content:
      "Young leaders from glacier regions lack platforms to scale their activism or connect with global policy and climate networks.",
  },
];

const pillars = [
  {
    title: "Glacier Literacy",
    content: "Building cryo-education programs",
  },
  {
    title: "Community Engagement",
    content: "Grassroots movements & training",
  },
  {
    title: "Creative Comms",
    content: "Art, films, storytelling for awareness",
  },
  {
    title: "Open Data",
    content: "Accessible cryosphere data platforms",
  },
  {
    title: "Policy Advocacy",
    content: "Influencing national & global decisions",
  },
];

export default function StrategyPage() {
  useEffect(() => {
  const hash = window.location.hash;
  if (hash) {
    const id = hash.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      setTimeout(() => {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 100); // delay ensures DOM has fully rendered
    }
  }
}, []);


  return (
    <div className="bg-white text-glacier-dark min-h-screen">
      <Navbar />

      {/* Hero Banner */}
      <div id="strategy-hero" className="relative w-full h-[300px] md:h-[400px] overflow-hidden mb-12">
        <img
          src="/img1.jpg"
          alt="Strategy Banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-glacier-dark/60 to-glacier-primary/30 flex items-center px-6 md:px-16">
          <h1 className="text-3xl md:text-5xl font-bold text-white drop-shadow">
            Our Cryosphere Strategy
          </h1>
        </div>
      </div>

      {/* 1. Cryosphere Crisis */}
      <motion.section
        id="cryosphere-crisis"
        className="w-full bg-white py-24"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="w-[80%] max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-6 text-glacier-primary">
            The Cryosphere Crisis
          </h2>
          <p className="text-lg mb-8 max-w-2xl">
            The cryosphere is warming at three times the global average. This has
            devastating implications — disappearing glaciers, ecosystem disruption,
            cultural loss, and life-threatening glacial lake floods.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="p-6 rounded-xl bg-white/10 backdrop-blur-md border border-white/30 shadow"
            >
              <h3 className="text-xl font-semibold mb-2">What is the Cryosphere?</h3>
              <p>
                The cryosphere includes all frozen water parts of Earth: glaciers,
                snow, ice caps, permafrost. Its loss accelerates climate collapse.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="p-6 rounded-xl bg-white/10 backdrop-blur-md border border-white/30 shadow"
            >
              <h3 className="text-xl font-semibold mb-2">Key Impacts</h3>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>Glaciers melting at 3x global rate</li>
                <li>50% of glaciers gone by 2100</li>
                <li>Glacial lake floods (GLOFs) rising</li>
                <li>2 billion people affected globally</li>
                <li>Loss of indigenous knowledge & heritage</li>
              </ul>
            </motion.div>
          </div>

          <div className="mt-10">
            <p className="font-medium">
              Why Now: UN Decade of Cryospheric Sciences (2025-2034)
            </p>
            <a
              href="https://www.un.org"
              target="_blank"
              className="underline text-glacier-accent hover:text-glacier-primary"
            >
              Explore UN Resolutions 
            </a>
          </div>

          <div className="mt-6">
            <img
              src="/timeline-cryosphere.png"
              alt="Cryosphere Timeline"
              className="rounded-xl w-full object-cover border"
            />
          </div>
        </div>
      </motion.section>

      {/* 2. Strategic Gaps */}
      <motion.section
        id="strategic-gaps"
        className="w-full bg-glacier-light py-24"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="w-[80%] max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-6 text-glacier-primary">
            Strategic Gaps We Address
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {strategyGaps.map((gap, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-6 rounded-xl bg-white/10 backdrop-blur-md border border-white/20"
              >
                <h4 className="text-xl font-semibold text-glacier-primary mb-2">
                  {gap.title}
                </h4>
                <p className="text-sm text-glacier-dark/90">{gap.content}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* 3. Dual-Force Model */}
      <motion.section
        id="dual-force-model"
        className="w-full bg-white py-24"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="w-[80%] max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-6 text-glacier-primary">
            Dual-Force Action Model
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl bg-white/10 backdrop-blur-md border border-white/20">
              <h4 className="text-xl font-semibold mb-2 text-glacier-primary">Top-down</h4>
              <p className="text-sm text-glacier-dark/90">
                Partnering with governments and institutions to shape climate
                policy and create global awareness.
              </p>
            </div>
            <div className="p-6 rounded-xl bg-white/10 backdrop-blur-md border border-white/20">
              <h4 className="text-xl font-semibold mb-2 text-glacier-primary">Bottom-up</h4>
              <p className="text-sm text-glacier-dark/90">
                Empowering glacier communities, youth, and educators through
                training and grassroots campaigns.
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* 4. Solution Pillars */}
      <motion.section
        id="solution-pillars"
        className="w-full bg-glacier-light py-24"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="w-[80%] max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-6 text-glacier-primary">Core Solution Pillars</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {pillars.map((pillar, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="p-4 rounded-lg bg-white/10 backdrop-blur-md border border-white/20"
              >
                <h4 className="font-semibold text-glacier-primary mb-1">
                  {pillar.title}
                </h4>
                <p className="text-sm text-glacier-dark/90">{pillar.content}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* 5. Theory of Change */}
      <motion.section
        id="theory-of-change"
        className="w-full bg-white py-24"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="w-[80%] max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-4 text-glacier-primary">
            Theory of Change
          </h2>
          <img
            src="/theory-of-change.png"
            alt="Theory of Change Diagram"
            className="w-full rounded-xl border"
          />
        </div>
      </motion.section>

      {/* 6. Roadmap */}
      <motion.section
        id="strategic-roadmap"
        className="w-full bg-glacier-light py-24"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="w-[80%] max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-4 text-glacier-primary">
            Strategic Roadmap (2025-2035)
          </h2>
          <img
            src="/roadmap-2035.png"
            alt="Strategic Roadmap"
            className="w-full rounded-xl border"
          />
        </div>
      </motion.section>
      <Footer/>
    </div>
  );
}
