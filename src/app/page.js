"use client";

import Navbar from "@/components/navbar";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Footer from "@/components/footer";
import {
  FaHandsHelping,
  FaBalanceScale,
  FaPeopleArrows,
  FaPaintBrush,
  FaMountain,
  FaTemperatureHigh,
  FaWater,
  FaPeopleCarry,
  FaTractor,
  FaExclamationTriangle,
  FaGlobeAmericas,
  FaSeedling,
  FaUsers,
  FaGlobe,
  FaEye, FaBullseye ,FaStarOfLife 
} from "react-icons/fa";
import Link from "next/link";

export default function HomePage() {

  const goals = [
  {
    title: "A Cryosphere Justice Framework",
    desc: "Glaciers legally and culturally protected in 10+ countries.",
    image: "/img3.jpg",
  },
  {
    title: "Cryosphere Pedagogy & Education",
    desc: "Embedded in school systems worldwide.",
    image: "/img3.jpg",
  },
  {
    title: "Real-time Glacier Monitoring",
    desc: "Publicly accessible data for all.",
    image: "/img3.jpg",
  },
  {
    title: "Global Glacier Guardians Network",
    desc: "Mobilizing 100,000+ individuals across continents.",
    image: "/img3.jpg",
  },
  {
    title: "Glaciers Resacralized",
    desc: "Through art, ritual, memory, and community initiatives.",
    image: "/img3.jpg",
  },
  {
    title: "Humanity & Glaciers",
    desc: "A relationship built on reverence and reciprocity.",
    image: "/img3.jpg",
  },
];


  const [isScrolled, setIsScrolled] = useState(false);

  const stats = [
  {
    icon: <FaTemperatureHigh className="text-2xl text-glacier-light" />,
    label: "3x Faster Warming",
    desc: "The Cryosphere is warming three times faster than the global average, signaling an urgent crisis.",
  },
  {
    icon: <FaWater className="text-2xl text-glacier-light" />,
    label: "50% Melt by 2100",
    desc: "Projections show that half of our glaciers may vanish by the end of the century, drastically altering ecosystems.",
  },
  {
    icon: <FaMountain className="text-2xl text-glacier-light" />,
    label: "Himalayan Ice Loss",
    desc: "Himalayan glaciers alone have lost over 40% of their ice volume since 2000, impacting millions downstream.",
  },
  {
    icon: <FaPeopleCarry className="text-2xl text-glacier-light" />,
    label: "2 Billion Lives at Risk",
    desc: "Over 2 billion people depend on glacier-fed rivers (like the Ganges, Indus, Brahmaputra, Yangtze) for survival.",
  },
  {
    icon: <FaTractor className="text-2xl text-glacier-light" />,
    label: "Disrupted Livelihoods",
    desc: "Melting glaciers lead to disrupted agriculture, unstable hydropower, and critical water security issues.",
  },
  {
    icon: <FaExclamationTriangle className="text-2xl text-glacier-light" />,
    label: "Increasing GLOFs",
    desc: "Glacial lake outburst floods (GLOFs) are becoming more frequent, posing severe threats to mountain communities.",
  },
  {
    icon: <FaGlobeAmericas className="text-2xl text-glacier-light" />,
    label: "Albedo Loss & Warming",
    desc: "Loss of glacial albedo reduces Earth’s reflectivity, accelerating planetary warming and collapsing fragile ecosystems.",
  },
  ];



useEffect(() => {
  const onScroll = () => {
    setIsScrolled(window.scrollY > 0);
  };
  window.addEventListener("scroll", onScroll);

  const video = document.getElementById("hero-video");
  if (video) {
    video.playbackRate = 0.7;
  }

  // ✅ Auto scroll to hash on page load
  const hash = window.location.hash;
  if (hash) {
    const target = document.querySelector(hash);
    if (target) {
      setTimeout(() => {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 300); // small delay for layout readiness
    }
  }

  return () => window.removeEventListener("scroll", onScroll);
}, []);

  const Button = ({ children, variant = "solid", className = "" }) => {
    const base = "px-8 py-3 rounded-full font-semibold transition duration-300 transform hover:scale-105"; // More prominent buttons
    const styles = {
      solid: "bg-glacier-primary text-white hover:bg-glacier-dark shadow-lg",
      outline:
        "border-2 border-glacier-primary text-glacier-primary hover:bg-glacier-primary hover:text-white shadow-md",
    };
    return (
      <button className={`${base} ${styles[variant]} ${className}`}>
        {children}
      </button>
    );
  };

  const SectionHeader = ({ title, description, isLightBackground = true }) => (
    <div className="text-center mb-16">
      <h2 className={`text-4xl md:text-5xl font-extrabold mb-4 ${isLightBackground ? 'text-glacier-primary' : 'text-white'}`}>
        {title}
      </h2>
      {description && (
        <p className={`text-lg md:text-xl max-w-3xl mx-auto ${isLightBackground ? 'text-glacier-dark' : 'text-glacier-light'}`}>
          {description}
        </p>
      )}
    </div>
  );

  const ParallaxBackground = ({ imageUrl, children }) => (
    <div
      className="relative bg-fixed bg-cover bg-center"
      style={{ backgroundImage: `url(${imageUrl})`, backgroundAttachment: 'fixed' }}
    >
      <div className="absolute inset-0 bg-glacier-dark/60"></div> {/* Dark overlay for readability */}
      <div className="relative z-10 py-24 px-6 md:px-16 text-white">
        {children}
      </div>
    </div>
  );

  return (
    <div className="bg-glacier-light text-glacier-dark">
      <Navbar />

      {/* Hero Banner */}
      <section id="hero" className="relative h-screen w-full overflow-hidden">
        <video
          id="hero-video"
          autoPlay
          loop
          muted
          playsInline // Added for better mobile compatibility
          className="absolute w-full h-full object-cover"
          src="/glacier-hero.mp4" // Ensure this video path is correct and the video exists
        />
        <div className="absolute inset-0 bg-glacier-primary/30 flex flex-col items-center justify-center text-center p-4 text-white">
          <motion.div
            className="w-64 h-auto mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <Image
              src="/comapny-hero-logo.png"
              alt="TVGF Logo"
              width={256}
              height={256}
              className="mx-auto"
            />
          </motion.div>
          <motion.p
            className="text-lg md:text-2xl max-w-2xl drop-shadow-lg"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            &quot;Where glaciers speak, communities rise, and the world listens.&quot;
          </motion.p>
          <motion.div
            className="mt-8 flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Button>Meet the Movement</Button>
            <Link href="/story" passHref>
              <Button variant="outline" className="border-white text-white "><span className="text-white">Watch the Story</span></Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Origin Story: A Movement Born in Ice */}
     <section className="py-20 px-6 md:px-16 bg-white text-glacier-dark">
      <div className="max-w-6xl mx-auto">
      <SectionHeader
      title="Origin Story: A Movement Born in Ice"
      description="The ice is speaking — will we listen?"
      isLightBackground={true}
      />

      <motion.div
        className="grid md:grid-cols-2 gap-12 items-center mt-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.3 }}
      >
      {/* LEFT: QUOTE */}
      <div className="space-y-6">
        <p className="text-xl md:text-2xl font-semibold leading-relaxed italic text-glacier-dark">
          &quot;I was held, not buried, by a Himalayan glacier on Annapurna. For 72 hours, it cradled me like a womb - cold, silent, alive.<br/><br/>
          That ice didn&apos;t just trap me. It protected me. That glacier gave me a second chance. <br/><br/>
          I survived . But glaciers won&apos;t. <br/><br/>
          I owe my life to these glaciers. This work is my return offering.&quot;
          
        </p>
        <p className="text-lg font-medium text-glacier-primary">
          — Anurag Maloo, Founder
        </p>
      </div>

      {/* RIGHT: IMAGE + BUTTON */}
      <div className="flex flex-col items-center md:items-start text-center md:text-left">
        <div className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-glacier-primary shadow-xl transition-transform duration-300 mb-4">
          <img
            src="/hero-image.jpg"
            alt="Anurag Maloo"
            className="w-full h-full object-cover"
          />
        </div>
        <p className="text-glacier-dark text-xl font-semibold mb-1">Anurag Maloo</p>
        <p className="text-glacier-soft text-sm italic mb-4">
          Founder
        </p>
          <Link href="/story" passHref>
            <Button className="mt-2 hover:bg-glacier-primary hover:text-white transition duration-300">
              Watch Anurag&apos;s Story
            </Button>
          </Link>
        </div>
        </motion.div>
      </div>
    </section>


      {/* Parallax Section 1: Cryosphere Background */}
      <ParallaxBackground imageUrl="/img1.jpg">
        <div id="crisis" className="max-w-6xl mx-auto text-center">
        <SectionHeader
        title="The Crisis: A Universal Cry from the Ice"
        description="Glaciers, Earth&#39;s water towers, are disappearing — rapidly, silently, irreversibly. Yet they remain largely invisible in global imagination and climate policy."
        isLightBackground={false}
      />

      <div className="grid md:grid-cols-2 gap-8 text-left mt-10">
        {stats.map((stat, idx) => (
          <motion.div
            key={idx}
            className="group flex items-start gap-4 p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 shadow-lg cursor-pointer transition-all duration-300"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            viewport={{ once: true, amount: 0.4 }}
          >
            <div className="min-w-[2rem]">{stat.icon}</div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-1">{stat.label}</h3>
              <p className="text-sm text-white/90 max-h-0 overflow-hidden group-hover:max-h-40 group-hover:mt-1 transition-all duration-300 ease-in-out">
                {stat.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>


      <motion.p
        className="text-lg mt-12 max-w-3xl mx-auto text-white"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        viewport={{ once: true }}
      >
        Without glaciers, we lose water, wisdom, and wonder. Yet, glaciers remain underrepresented and invisible in policy, education, and public imagination.
      </motion.p>
    </div>
    </ParallaxBackground>;

      {/* Why TVGF? */}
      <section className="py-20 px-6 md:px-16 bg-white text-glacier-dark">
        <div id="why-tvgf" className="max-w-6xl mx-auto">
          <SectionHeader
            title="Why TVGF? Our Unique Approach"
            description="The Voice of Glaciers Foundation is more than an organization; it&#39;s a global gratitude movement born from lived survival, uniting diverse voices for glacier stewardship."
            isLightBackground={true}
          />
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <motion.div
              className="space-y-6 text-lg leading-relaxed"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <h3 className="text-2xl font-bold text-glacier-primary mb-4">Because we exist at the intersection of science, spirit, and storytelling.</h3>
              <ul className="list-disc list-inside space-y-3">
                <li>Founded from <b>lived experience</b> inside a glacier, not just theory.</li>
                <li>We blend <b>policy, poetry, and people</b>; <b>data and devotion</b>; <b>science and spirit</b>; <b>memory and movement</b>.</li>
                <li>TVGF acts as a crucial <b>bridge between ice and identity</b>, connecting global communities to the cryosphere.</li>
                <li>It is the first-of-its-kind global platform centering glaciers as <b>sentient, sacred, and strategic</b> beings.</li>
              </ul>
            </motion.div>
            <motion.div
              className="grid grid-cols-1 gap-6 cursor-pointer"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              {/* Unique Blend */}
              <div className="p-6 bg-glacier-light rounded-xl shadow-md group transition-all duration-300">
                <div className="flex items-center gap-3 mb-2">
                  <FaSeedling className="text-glacier-primary text-xl" />
                  <h4 className="font-bold text-xl text-glacier-primary">Unique Blend</h4>
                </div>
                <p className="text-base text-glacier-dark opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-40 transition-all duration-500 overflow-hidden mt-2">
                  Blending science, storytelling, and spirituality for a holistic approach to glacier preservation.
                </p>
              </div>

              {/* Community-Driven */}
              <div className="p-6 bg-glacier-light rounded-xl shadow-md group transition-all duration-300">
                <div className="flex items-center gap-3 mb-2">
                  <FaUsers className="text-glacier-primary text-xl" />
                  <h4 className="font-bold text-xl text-glacier-primary">Community-Driven</h4>
                </div>
                <p className="text-base text-glacier-dark opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-40 transition-all duration-500 overflow-hidden mt-2">
                  Empowering mountain communities and uplifting indigenous wisdom.
                </p>
              </div>

              {/* Global Impact */}
              <div className="p-6 bg-glacier-light rounded-xl shadow-md group transition-all duration-300">
                <div className="flex items-center gap-3 mb-2">
                  <FaGlobe className="text-glacier-primary text-xl" />
                  <h4 className="font-bold text-xl text-glacier-primary">Global Impact</h4>
                </div>
                <p className="text-base text-glacier-dark opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-40 transition-all duration-500 overflow-hidden mt-2">
                  Influencing global policy and fostering intergenerational resilience.
                </p>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Parallax Section 2: Vision & Mission Background */}
      <ParallaxBackground imageUrl="/img2.jpg">
  <div className="max-w-6xl mx-auto" id="vision">
    <SectionHeader
      title="Our Vision & Mission"
      description="Guided by our North Star Goals for 2035, we empower communities, protect glaciers, and advance climate resilience."
      isLightBackground={false}
    />

    <div className="grid md:grid-cols-2 gap-10 text-center">
      {/* Vision Card */}
      <motion.div
        className="p-8 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 shadow-lg flex flex-col items-center"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.4 }}
      >
        <div className="flex items-center gap-3 mb-4">
          <FaEye className="text-2xl text-glacier-light" />
          <h3 className="text-2xl font-bold text-white">Vision</h3>
        </div>
        <p className="text-lg text-white/90 leading-relaxed">
          A world where glaciers are protected as sacred lifelines — through <b>collective memory, community action, and creative expression</b> — for climate justice and intergenerational resilience.
        </p>
      </motion.div>

      {/* Mission Card */}
      <motion.div
        className="p-8 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 shadow-lg flex flex-col items-center"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true, amount: 0.4 }}
      >
        <div className="flex items-center gap-3 mb-4">
          <FaBullseye className="text-2xl text-glacier-light" />
          <h3 className="text-2xl font-bold text-white">Mission</h3>
        </div>
        <p className="text-lg text-white/90 leading-relaxed">
          To activate global and local ecosystems for glacier preservation by weaving <b>science, storytelling, spirituality, and stewardship</b> into transformative experiences that inspire policy, protect ecosystems, and reshape human relationships with the cryosphere.
        </p>
      </motion.div>
    </div>
  </div>
</ParallaxBackground>

      {/* TVGF’s North Star & Core Values */}
      <section id="north-star" className="py-20 px-6 md:px-16 bg-white text-glacier-dark">
        <div className="max-w-6xl mx-auto" >
          <SectionHeader
            title="TVGF's North Star: Goals by 2035"
            description="By 2035, we envision a world fundamentally transformed in its relationship with glaciers."
            isLightBackground={true}
          />
          <div className="relative max-w-6xl mx-auto duration-1000">
            {/* North Star Icon - Positioned to the right */}
            <div className="hidden md:block absolute right-0 top-10 transform translate-x-1/2 opacity-10 text-glacier-primary text-[160px] pointer-events-none">
              <FaStarOfLife />
            </div>

            <ul className="space-y-10 mt-12">
              {goals.map((goal, index) => (
                <li
                  key={index}
                  className="group relative border-l-4 border-glacier-primary pl-6 cursor-pointer"
                >
                  {/* Title as bullet point */}
                  <div className="text-xl font-semibold text-glacier-primary">
                    • {goal.title}
                  </div>

                  {/* Hidden description appears on hover */}
                  <motion.div
                    className="mt-2 opacity-0 max-h-0 overflow-hidden group-hover:opacity-100 group-hover:max-h-[500px] transition-all duration-500 ease-in-out"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true, amount: 0.3 }}
                  >
                    <div className="text-glacier-dark/90 text-base md:text-lg">
                      {goal.desc}
                    </div>
                  </motion.div>
                </li>
              ))}
            </ul>
          </div>

          {/* Core Values Grid (unchanged) */}
          <div className="mt-20" id="core-values">
  <h3 className="text-3xl font-bold text-glacier-primary mb-8 text-center">
    Our Core Values
  </h3>
  <div className="grid md:grid-cols-3 gap-6">
    {(() => {
      const coreValues = [
        {
          name: "Collaboration",
          desc: "Bridging diverse disciplines and cultures for collective impact.",
          icon: FaHandsHelping,
        },
        {
          name: "Integrity",
          desc: "Grounded in robust scientific evidence and deep community respect.",
          icon: FaBalanceScale,
        },
        {
          name: "Equity",
          desc: "Uplifting indigenous wisdom and empowering local leadership.",
          icon: FaPeopleArrows,
        },
        {
          name: "Creativity",
          desc: "Driving change through storytelling, science, and co-created art.",
          icon: FaPaintBrush,
        },
        {
          name: "Resilience",
          desc: "Fostering long-term glacier guardianships and adaptive strategies.",
          icon: FaMountain,
        },
        {
          name: "Transparency",
          desc: "Operating with open governance and unwavering accountability.",
          icon: FaEye,
        },
      ];
      return coreValues.map((value, idx) => {
        const Icon = value.icon;
        return (
          <motion.div
            key={idx}
            className="p-6 bg-glacier-soft rounded-xl shadow-sm text-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: idx * 0.08 }}
            viewport={{ once: true, amount: 0.4 }}
          >
            <Icon className="text-3xl text-glacier-primary mb-3 mx-auto" />
            <h4 className="font-bold text-xl text-glacier-dark mb-2">
              {value.name}
            </h4>
            <p className="text-sm text-glacier-dark/80">{value.desc}</p>
          </motion.div>
        );
      });
    })()}
  </div>
</div>

        </div>
      </section>


      {/* Parallax Section 3: Strategic Context Background */}
      <ParallaxBackground imageUrl="/img3.jpg">
        <div className="max-w-6xl mx-auto px-4">
          <SectionHeader
            title="Strategic Context: Why 2025-2034 is Critical"
            description="The next decade presents unprecedented opportunities and urgent calls to action for glacier preservation."
            isLightBackground={false}
          />
          <div className="grid md:grid-cols-3 gap-6">
            {/* Card 1: UN International Year of Glaciers' Preservation */}
            <motion.div
              className="p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 shadow-lg space-y-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <h3 className="text-xl font-semibold text-white">UN Year of Glaciers&apos; Preservation - 2025</h3>
              <ul className="list-disc list-inside text-white/90 text-sm space-y-2">
                <li>UN Resolution A/RES/77/281 adopted globally</li>
                <li>Raises urgency on glacier melt & water security</li>
                <li>Calls for public education & research funding</li>
                <li>Arctic may be ice-free by 2030</li>
              </ul>
            </motion.div>

            {/* Card 2: UN Decade of Cryospheric Sciences */}
            <motion.div
              className="p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 shadow-lg space-y-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <h3 className="text-xl font-semibold text-white">UN Decade of Cryospheric Sciences - 2025-2034</h3>
              <ul className="list-disc list-inside text-white/90 text-sm space-y-2">
                <li>Led by WMO & UNESCO</li>
                <li>Integrates cryosphere science & local knowledge</li>
                <li>Aligns glacier research with SDGs</li>
                <li>Targets water, climate, ecosystems & livelihoods</li>
              </ul>
            </motion.div>

            {/* Card 3: Related Global Movements */}
            <motion.div
              className="p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 shadow-lg space-y-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <h3 className="text-xl font-semibold text-white">Global Movements & Climate Platforms</h3>
              <ul className="list-disc list-inside text-white/90 text-sm space-y-2">
                <li><b>UN Ocean Decade:</b> Links glacial melt to ocean health</li>
                <li><b>COP30 & UN Water Conferences:</b> Key platforms for cryosphere advocacy in climate finance</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </ParallaxBackground>


      {/* The Gaps We&#39;re Addressing */}
      <section className="py-20 px-6 md:px-16 bg-white text-glacier-dark" id="the-gaps">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            title="The Gaps We&#39;re Addressing"
            description="Despite the critical importance of glaciers, significant gaps hinder effective preservation efforts. TVGF steps in to bridge these divides."
            isLightBackground={true}
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Public Imagination", missing: "Glaciers are seen as distant and abstract, not personal and relatable." },
              { title: "Cultural Voice", missing: "Indigenous wisdom, mountain community stories, and sacred rituals are often ignored." },
              { title: "Interdisciplinary Collaboration", missing: "Science, art, and spirituality operate in isolated silos." },
              { title: "Policy Integration", missing: "Glaciers and the broader Cryosphere are frequently excluded from national and international climate plans." },
              { title: "Open Data Access", missing: "Glacier data, especially from the Global South, is limited, fragmented, or inaccessible." },
              { title: "Glacier Pedagogy", missing: "No integrated, cryosphere-specific educational curriculum framework exists across schools and universities." },
            ].map((gap, idx) => (
              <motion.div
                key={idx}
                className="p-6 bg-glacier-light rounded-xl shadow-md border border-glacier-soft"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true, amount: 0.4 }}
              >
                <h3 className="text-xl font-bold text-glacier-primary mb-2"> {gap.title}</h3>
                <p className="text-base text-glacier-dark">{gap.missing}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Join the Movement CTA */}
      <section className="py-24 px-6 md:px-16 bg-gradient-to-r from-glacier-primary to-glacier-dark text-center text-white">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow ">Join the Movement</h2>
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          Whether you&#39;re a glacier lover, scientist, student, or global citizen—there&#39;s a vital place for you in the Voice of Glaciers Foundation.
        </p>
        <div className="flex flex-wrap justify-center gap-6">
          <Button className="bg-white text-glacier-dark font-semibold hover:!bg-glacier-soft">
            <span className="text-glacier-dark">
              Become a Glacier Guardian
            </span>
          </Button>
          <Button variant="outline" className="!border-white !text-white hover:!bg-white hover:!text-glacier-dark">Volunteer Now</Button>
          <Button variant="outline" className="!border-white !text-white hover:!bg-white hover:!text-glacier-dark">Donate</Button>
        </div>
      </section>
      <Footer/>
    </div>
  );
}