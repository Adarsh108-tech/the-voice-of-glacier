"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { useEffect } from "react";
import { FaDatabase, FaBookOpen, FaUsers, FaMicrophoneAlt, FaGavel , FaArrowRight, FaArrowDown } from "react-icons/fa";
import CryosphereTimeline from "@/components/cryosphereTimeline";

const roadmap = [
  {
    phase: "2025-26",
    focus:
      "Build narrative capital: storytelling, visibility, co-creation model, launch GlacierX, core team, digital channels",
  },
  {
    phase: "2026-27",
    focus:
      "Deploy Education + Activation tools, fellowships, residencies, glacier curriculum pilots, early policy pilots & policy white paper",
  },
  {
    phase: "2027-29 Goal",
    focus:
      "Ensure glaciers have policy protection, cultural visibility, and community stewardship in at least 10 countries",
  },
];

const longTermGoal = [
  "Ensure glaciers have policy protection, cultural visibility, and community stewardship in at least 10 countries.",
  "Global Glacier Guardians Network visualized.",
  "Policy change realized."
]


const theoryData = [
  {
    title: "Inputs",
    content: [
      "Programs",
      "Networks",
      "Media",
      "Advocacy",
      "Funding",
      "Partners"
    ]
  },
  {
    title: "Activities",
    content: [
      "GlacierX",
      "Fellowships",
      "Curricula",
      "Storytelling",
      "Campaigns"
    ]
  },
  {
    title: "Outputs",
    content: [
      "Events",
      "Curriculum",
      "Declarations",
      "Toolkits",
      "Policy briefs",
      "Art",
      "Community pledges"
    ]
  },
  {
    title: "Outcomes",
    content: [
      "Policy recognition",
      "Influence, local stewardship",
      "Youth/community engagement",
      "Digital activation"
    ]
  },
  {
    title: "Impact",
    content: ["Systemic glacier protection", "Cryosphere justice"]
  }
];

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
      <div id="strategy-hero" className="relative w-full h-[300px] md:h-[400px] overflow-hidden">
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
        className="w-full bg-glacier-dark py-24 transition-colors duration-300"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="w-[80%] max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-6 text-white">
            The Cryosphere Crisis
          </h2>

          <p className="text-lg mb-8 max-w-2xl text-glacier-light/90">
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
              className="p-6 rounded-xl bg-glacier-soft/10 backdrop-blur-md border border-glacier-soft text-glacier-light shadow"
            >
              <h3 className="text-xl font-semibold mb-2 text-glacier-light">What is the Cryosphere?</h3>
              <p className="text-sm leading-relaxed text-glacier-light/80">
                The cryosphere includes all frozen water parts of Earth: glaciers,
                snow, ice caps, permafrost. Its loss accelerates climate collapse.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="p-6 rounded-xl bg-glacier-soft/10 backdrop-blur-md border border-glacier-soft text-glacier-light shadow"
            >
              <h3 className="text-xl font-semibold mb-2 text-glacier-light">Key Impacts</h3>
              <ul className="list-disc list-inside space-y-1 text-sm text-glacier-light/80">
                <li>Glaciers melting at 3x global rate</li>
                <li>50% of glaciers gone by 2100</li>
                <li>Glacial lake floods (GLOFs) rising</li>
                <li>2 billion people affected globally</li>
                <li>Loss of indigenous knowledge & heritage</li>
              </ul>
            </motion.div>
          </div>

          <div className="mt-10">
            <p className="font-medium text-glacier-light">Why Now: UN Decade of Cryospheric Sciences (2025-2034)</p>
            <a
              href="https://www.un.org"
              target="_blank"
              className="underline text-white hover:text-glacier-light"
            >
              Explore UN Resolutions
            </a>
          </div>

          <div className="mt-6">
            <CryosphereTimeline/>
          </div>
        </div>
      </motion.section>


      {/* 2. Strategic Gaps */}
      <motion.section
        id="strategic-gaps"
        className="w-full py-24"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="w-[90%] max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 text-glacier-primary text-center">
            Strategic Gaps We Address
          </h2>

          <div className="space-y-10">
            {strategyGaps.map((gap, index) => {
            // Map index to image filenames
            const icons = [
              "/strategicGaps/book-open-svgrepo-com.svg",
              "/strategicGaps/file-svgrepo-com.svg",
              "/strategicGaps/global-leader-happy-strong-power-svgrepo-com.svg",
              "/strategicGaps/globe-2-svgrepo-com.svg",
            ];

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative flex flex-col md:flex-row ${
                  index % 2 === 0 ? "" : "md:flex-row-reverse"
                } items-center gap-6 bg-white/10 border border-white/20 backdrop-blur-md rounded-xl`}
              >
                {/* Icon from public folder */}
                <div className="flex-shrink-0 w-40 h-40 bg-glacier-primary/10 text-glacier-primary rounded-full flex items-center justify-center">
                  <img
                    src={icons[index]}
                    alt={`Icon ${index + 1}`}
                    className="w-20 h-20"
                  />
                </div>

                {/* Content */}
                <div className="flex-1 text-center md:text-left bg-glacier-light rounded-md p-10">
                  <h4 className="text-xl font-semibold text-glacier-primary mb-2">
                    {gap.title}
                  </h4>
                  <p className="text-base text-glacier-dark/90">{gap.content}</p>
                </div>
              </motion.div>
            );
          })}
          </div>
        </div>
      </motion.section>


      {/* 3. Dual-Force Model */}
      <motion.section
        id="dual-force-model"
        className="w-full bg-glacier-light py-24"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="w-[90%] max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 text-center text-glacier-dark">
            Dual-Force Action Model
          </h2>

          {/* TOP-DOWN SECTION */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 ">
            {/* Circle + Arrow */}
            <div className="flex flex-col items-center gap-1">
              <div className="w-40 h-40 rounded-full bg-glacier-dark text-white border border-glacier-dark flex items-center justify-center text-lg font-semibold shadow-md">
                TOP-DOWN
              </div>
              <div className="w-1 h-6 bg-glacier-dark" />
              <div className="w-0 h-0 border-l-8 border-r-8 border-t-[12px] border-l-transparent border-r-transparent border-t-glacier-dark" />
            </div>

            {/* Text and Icon */}
            <div className="flex items-center gap-6 bg-white shadow-md border border-glacier-dark/20 rounded-xl p-6 w-full md:w-auto max-w-xl">
              <img
                src="/dual-force/goverment-building-svgrepo-com.svg"
                alt="Government Icon"
                className="w-12 h-12 flex-shrink-0"
              />
              <p className="text-sm text-glacier-dark/90 leading-relaxed md:text-xl">
                Partnering with governments and institutions to shape climate policy
                and create global awareness.
              </p>
            </div>
          </div>

          {/* BOTTOM-UP SECTION */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            {/* Text and Icon */}
            <div className="flex items-center gap-6 bg-white shadow-md border border-glacier-dark/20 rounded-xl p-6 w-full md:w-auto max-w-xl">
              <img
                src="/dual-force/flag.svg"
                alt="Flag Icon"
                className="w-12 h-12 flex-shrink-0"
              />
              <p className="text-sm text-glacier-dark/90 leading-relaxed md:text-xl">
                Empowering glacier communities, youth, and educators through training
                and grassroots campaigns.
              </p>
            </div>

            {/* Circle + Arrow Up */}
            <div className="flex flex-col items-center gap-1">
              <div className="w-0 h-0 border-l-8 border-r-8 border-b-[12px] border-l-transparent border-r-transparent border-b-glacier-dark" />
              <div className="w-1 h-6 bg-glacier-dark" />
              <div className="w-40 h-40 rounded-full bg-glacier-dark text-white border border-glacier-dark flex items-center justify-center text-lg font-semibold shadow-md">
                BOTTOM-UP
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* 4. Solution Pillars */}
      <motion.section
        id="solution-pillars"
        className="w-full bg-glacier-dark py-20 transition-colors duration-300"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="w-[95%] max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-glacier-light mb-12">
            Core Solution Pillars
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Open Data",
                description: "Ensuring glacier-related information is accessible, transparent, and openly shared.",
                icon: <FaDatabase className="w-6 h-6 text-glacier-light" />,
              },
              {
                title: "Glacier Literacy",
                description: "Educating the public and institutions about glaciers and their climate relevance.",
                icon: <FaBookOpen className="w-6 h-6 text-glacier-light" />,
              },
              {
                title: "Community Engagement",
                description: "Involving local communities in glacier conservation through grassroots participation.",
                icon: <FaUsers className="w-6 h-6 text-glacier-light" />,
              },
              {
                title: "Creative Comms",
                description: "Using storytelling, media, and design to spread glacier awareness widely.",
                icon: <FaMicrophoneAlt className="w-6 h-6 text-glacier-light" />,
              },
              {
                title: "Policy Advocacy",
                description: "Shaping policies by influencing institutions and decision-makers globally.",
                icon: <FaGavel className="w-6 h-6 text-glacier-light" />,
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                className="rounded-xl p-6 bg-glacier-dark border border-glacier-soft/30 shadow-md text-left transition-all duration-300"
              >
                <div className="flex items-center gap-2 mb-2">
                  {item.icon}
                  <h3 className="text-xl font-semibold text-glacier-light">
                    {item.title}
                  </h3>
                </div>
                <p className="text-sm text-glacier-light/80 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>

          <p className="text-sm md:text-base text-glacier-light/70 max-w-2xl mx-auto mt-12">
            These core pillars form the foundation of our approach to cryosphere justice — integrating knowledge, community power, data transparency, creative storytelling, and global policy change.
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
          <h2 className="text-4xl font-bold mb-12 text-glacier-primary text-center">
            Theory of Change
          </h2>

          {/* Use overflow-x only on md+ */}
          <div className="md:overflow-x-auto">
            <div className="flex flex-col md:flex-row md:items-start md:gap-6">
              {theoryData.map((block, idx) => (
                <div key={idx} className="relative flex flex-col items-center md:flex-row md:items-center">
                  {/* Card */}
                  <div className="bg-glacier-light text-glacier-dark p-6 rounded-xl shadow-md border border-glacier-soft w-full md:w-64 text-center md:text-left">
                    <h3 className="text-xl font-semibold text-glacier-primary mb-2">
                      {block.title}
                    </h3>
                    <ul className="text-sm leading-relaxed list-disc list-inside text-left">
                      {block.content.map((line, i) => (
                        <li key={i}>{line}</li>
                      ))}
                    </ul>
                  </div>

                  {/* Arrow */}
                  {idx < theoryData.length - 1 && (
                    <>
                      {/* ↓ Mobile arrow */}
                      <div className="block md:hidden mt-4 text-glacier-primary">
                        <FaArrowDown size={18} />
                      </div>

                      {/* → Desktop arrow (centered) */}
                      <div className="hidden md:flex items-center justify-center h-full mx-2">
                        <FaArrowRight size={20} className="text-glacier-primary" />
                      </div>
                    </>
                  )}
                </div>
              ))}
            </div>
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
        <div className="w-[90%] max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-glacier-primary mb-12 text-center">
            Strategic Roadmap (2025–2035)
          </h2>

          <div className="relative border-l-4 border-glacier-primary pl-6 ml-3">
            {roadmap.map((step, index) => (
              <div key={index} className="mb-10 relative">
                {/* Dot */}
                <div className="absolute -left-[1.45rem] top-2.5 bg-glacier-primary w-4 h-4 rounded-full border-4 border-white z-10" />

                {/* Card */}
                <div className="bg-white p-6 rounded-xl shadow-md border border-glacier-soft transition hover:shadow-lg">
                  <h3 className="text-xl font-semibold text-glacier-primary mb-2">
                    {step.phase}
                  </h3>
                  <p className="text-sm text-glacier-dark leading-relaxed">{step.focus}</p>
                </div>
              </div>
            ))}

            {/* Final Goal */}
            <div className="relative">
              <div className="absolute -left-[1.45rem] top-2.5 bg-glacier-accent w-4 h-4 rounded-full border-4 border-white z-10" />
              <div className="bg-glacier-accent/10 border border-glacier-accent text-glacier-dark p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-semibold text-glacier-accent mb-2">
                  2030–2035 Goal
                </h3>
                <ul className="list-disc pl-5 text-sm leading-relaxed">
                  {longTermGoal.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      <Footer/>
    </div>
  );
}
