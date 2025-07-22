"use client";

import { useState } from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    text: "An Indian climber who went missing after falling into a crevasse on Mount Annapurna in Nepal has been found alive. Anurag Maloo, who went missing on Monday, was found in a critical condition by rescuers.",
    image: "/story/anuraag-maloo1.jpg",
  },
  {
    text: "Two other Indian climbers were rescued on Tuesday, while an Irish climber died while descending Annapurna. It is the 10th highest mountain in the world and is known for its treacherous terrain.",
    image: "/story/anuraag-maloo2.jpg",
  },
  {
    text: "Mr Maloo is currently seeking treatment at Manipal Hospital in Pokhara city, a sherpa from Seven Summit Treks - a mountaineering company that led the search operation - told ANI news.",
    image: "/story/anuraag3.jpg",
  },
  {
    text: "Amit Chowdhury of UIAA told the BBC that it's possible to survive in a crevasse since it's warmer and protected from wind—if not severely injured.",
    image: "/story/anuraag4.jpg",
  },
  {
    text: "A resident of Rajasthan state, Mr Maloo, went missing at around 6,000m while descending. His father Om Prakash said he fell into a crevasse between Camp III and Camp II.",
    image: "/story/anuraag5.jpg",
  },
  {
    text: "His brother Aashish launched an online petition urging special rescue intervention, noting that the sherpa team was insufficient alone.",
    image: "/story/anuraag6.jpg",
  },
  {
    text: "Last year, Mr Maloo climbed a Himalayan peak. He's on a mission to climb all 14 peaks above 8,000m and the world's seven summits to promote the UN's SDGs.",
    image: "/story/anuraag7.jpg",
  },
  {
    text: "On Tuesday, climber Baljeet Kaur and others were rescued. In November, she became the first Indian woman to summit Mount Manaslu without oxygen.",
    image: "/story/anuraag8.jpg",
  },
];

export default function AnuraagStoryPage() {
  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    if (index < slides.length - 1) {
      setIndex((prev) => prev + 1);
    }
  };

  return (
    <main className="w-full bg-glacier-light text-glacier-dark min-h-screen">
      <Navbar />

      <section
        className="relative w-full h-screen bg-glacier-soft flex items-center justify-center overflow-hidden cursor-pointer px-4 sm:px-8"
        onClick={nextSlide}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.6 }}
            className={`relative z-20 flex flex-col md:flex-row items-center justify-between gap-10 w-full max-w-6xl ${
              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            }`}
          >
            <div className="flex-1 w-full md:w-1/2 text-lg md:text-xl leading-relaxed">
              {index === 0 && (
                <h1 className="text-3xl md:text-4xl font-bold text-glacier-primary mb-4 text-center md:text-left">
                  Anurag Maloo: A Story of Survival
                </h1>
              )}
              <p className="text-glacier-dark">{slides[index].text}</p>
            </div>

            <div className="flex-1 w-full md:w-1/2 flex justify-center">
              <div className="w-full max-w-md sm:max-w-lg aspect-video">
                <img
                  src={slides[index].image}
                  alt="Anurag Maloo"
                  className="w-full h-full object-cover rounded-xl shadow-xl"
                />
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="absolute bottom-10 w-full flex justify-center z-30">
          <p className="text-white font-semibold px-4 py-2 rounded-md bg-black/70 animate-pulse text-sm md:text-base">
            Click anywhere to continue ({index + 1}/{slides.length})
          </p>
        </div>
      </section>

      <section className="w-full bg-glacier-light py-16 flex flex-col items-center justify-center px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-glacier-dark mb-6 text-center">
          Watch the Full Story
        </h2>
        <div className="w-full max-w-4xl aspect-video shadow-xl rounded-lg overflow-hidden">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/5ikXr7qjjJk"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          ></iframe>
        </div>
      </section>

      <Footer />
    </main>
  );
}
