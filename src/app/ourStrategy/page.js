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
        className="w-full bg-glacier-light py-10"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="w-[95%] max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-glacier-primary mb-4">Core Solution Pillars</h2>

          <div className="relative w-full h-[520px] md:h-[660px] lg:h-[740px] mb-4">
            <svg viewBox="0 0 750 620" className="w-full h-full">
              {/* Adjusted positions for slight overlaps */}
              <circle cx="375" cy="190" r="135" fill="#00BFFF" fillOpacity="0.5" /> {/* Glacier Literacy */}
              <circle cx="270" cy="335" r="135" fill="#32CD32" fillOpacity="0.5" /> {/* Community Engagement */}
              <circle cx="480" cy="335" r="135" fill="#FFA500" fillOpacity="0.5" /> {/* Creative Comms */}
              <circle cx="165" cy="190" r="135" fill="#FF6347" fillOpacity="0.5" /> {/* Open Data */}
              <circle cx="585" cy="190" r="135" fill="#9370DB" fillOpacity="0.5" /> {/* Policy Advocacy */}

              {/* Labels aligned with new positions */}
              <text x="375" y="185" textAnchor="middle" className="fill-white font-semibold text-[10px] sm:text-xs md:text-sm lg:text-base">
                Glacier Literacy
              </text>
              <text x="270" y="340" textAnchor="middle" className="fill-white font-semibold text-[10px] sm:text-xs md:text-sm lg:text-base">
                Community Engagement
              </text>
              <text x="480" y="340" textAnchor="middle" className="fill-white font-semibold text-[10px] sm:text-xs md:text-sm lg:text-base">
                Creative Comms
              </text>
              <text x="165" y="195" textAnchor="middle" className="fill-white font-semibold text-[10px] sm:text-xs md:text-sm lg:text-base">
                Open Data
              </text>
              <text x="585" y="195" textAnchor="middle" className="fill-white font-semibold text-[10px] sm:text-xs md:text-sm lg:text-base">
                Policy Advocacy
              </text>
            </svg>
          </div>

          <p className="text-sm md:text-base text-glacier-dark/90 max-w-2xl mx-auto">
            The overlapping circles highlight the interconnectedness of glacier literacy, grassroots engagement, open data, storytelling, and policy action — driving a unified strategy for cryosphere justice.
          </p>
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
        <div className="w-[90%] max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-6 text-glacier-primary">Theory of Change</h2>
          <div className="overflow-x-auto rounded-xl shadow">
            <table className="min-w-full border border-gray-200 text-left text-sm">
              <thead className="bg-glacier-light text-glacier-dark font-semibold">
                <tr>
                  <th className="px-4 py-3 border">Inputs</th>
                  <th className="px-4 py-3 border">Activities</th>
                  <th className="px-4 py-3 border">Outputs</th>
                  <th className="px-4 py-3 border">Outcomes</th>
                  <th className="px-4 py-3 border">Impact</th>
                </tr>
              </thead>
              <tbody className="bg-white text-glacier-dark">
                <tr>
                  <td className="px-4 py-3 border">
                    • Programs<br />
                    • Networks<br />
                    • Media<br />
                    • Advocacy<br />
                    • Funding<br />
                    • Partners
                  </td>
                  <td className="px-4 py-3 border">
                    • GlacierX<br />
                    • Fellowships<br />
                    • Curricula<br />
                    • Storytelling<br />
                    • Campaigns
                  </td>
                  <td className="px-4 py-3 border">
                    • Events<br />
                    • Curriculum<br />
                    • Declarations<br />
                    • Toolkits<br />
                    • Policy briefs<br />
                    • Art<br />
                    • Community pledges
                  </td>
                  <td className="px-4 py-3 border">
                    • Policy recognition<br />
                    • Influence, local stewardship<br />
                    • Youth/community engagement<br />
                    • Digital activation
                  </td>
                  <td className="px-4 py-3 border font-semibold text-glacier-primary">
                    Systemic glacier protection<br />+<br />Cryosphere justice
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
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
        <div className="w-[90%] max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-6 text-glacier-primary">Strategic Roadmap (2025-2035)</h2>
          <div className="overflow-x-auto rounded-xl shadow">
            <table className="min-w-full border border-gray-200 text-left text-sm">
              <thead className="bg-glacier-primary text-white font-semibold">
                <tr>
                  <th className="px-4 py-3 border">Phase</th>
                  <th className="px-4 py-3 border">Focus / Milestone</th>
                  <th className="px-4 py-3 border">2030-2035 Goal</th>
                </tr>
              </thead>
              <tbody className="bg-white text-glacier-dark">
                <tr>
                  <td className="px-4 py-3 border">2025-26</td>
                  <td className="px-4 py-3 border">
                    Build narrative capital: storytelling, visibility, co-creation model, launch GlacierX, core team, digital channels
                  </td>
                  <td className="px-4 py-3 border" rowSpan={3}>
                    Ensure glaciers have policy protection, cultural visibility, and community stewardship in at least 10 countries.<br />
                    Global Glacier Guardians Network visualized.<br />
                    Policy change realized.
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 border">2026-27</td>
                  <td className="px-4 py-3 border">
                    Deploy Education + Activation tools, fellowships, residencies, glacier curriculum pilots, early policy pilots & policy white paper
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 border">2027-29 Goal</td>
                  <td className="px-4 py-3 border">
                    Ensure glaciers have policy protection, cultural visibility, and community stewardship in at least 10 countries
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </motion.section>

      <Footer/>
    </div>
  );
}
