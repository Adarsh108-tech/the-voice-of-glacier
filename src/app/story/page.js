"use client";

import { useState } from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    text: "For me, mountaineering has never just been about the thrill of summiting peaks. It's been a journey with a deeper mission—to spread awareness about the United Nations' Sustainable Development Goals (SDGs). That's what led me to launch the 'Climbing4SDGs' initiative, where I use mountaineering as a platform to engage with communities, encourage action, and advocate for global change",
    image: "/story/anuraag-maloo1.jpg",
  },
  {
    text: "Annapurna is infamous for its danger, with a high fatality rate of 33% due to avalanches and technical difficulty. Despite knowing the risks, I was determined to climb it to amplify my cause. On April 17, 2023, after 16 hours of climbing and reaching 7,900 meters, I decided to turn back just 150 meters from the summit due to worsening weather and exhaustion.",
    image: "/story/anuraag-maloo2.jpg",
  },
  {
    text: "While descending, I accidentally clipped onto the wrong rope and fell 300 meters into a deep crevasse. I lay unconscious in the ice for three days, recording messages on my GoPro, hoping someone would find me. On the third night, an avalanche buried me deeper, and I lost consciousness completely.",
    image: "/story/image.png",
  },
  {
    text: "Meanwhile, rescue efforts were underway. The first two attempts failed, but finally, a third team—including Polish climbers Adam Bielecki and Mariusz Hatala, Sherpas, and pilot Sobit Gauchan—set out, expecting to retrieve a body. But on April 20th, they found me alive, buried in the fetal position 80 meters deep at 6,000 meters altitude.",
    image: "/story/anurag-snow.png",
  },
  {
    text: "Since then, I've relearned everything—walking, writing, even moving my fingers. I feel like a 34-year-old with the motor skills of a baby. While my physical strength is still limited, I continue to undergo therapy and focus on healing.",
    image: "/story/group.jpg",
  },
  {
    text: "This journey has been nothing short of a miracle, made possible by relentless efforts from my rescuers, doctors, family, and friends. Above all, I owe my life to the mountains. Annapurna may have nearly taken my life, but it also gave it back. I'm alive to share this story—and I will always climb for a purpose.",
    image: "/story/anurag-last.jpg",
  }
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

      {/* 📽️ Story Section with Background Video */}
      <section
        className="relative w-full h-screen flex items-center justify-center overflow-hidden cursor-pointer px-4 sm:px-8"
        onClick={nextSlide}
      >
        {/* 🔹 Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
        >
          <source src="/AnuragMaloo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* 🔹 Overlay Color Filter */}
        <div className="absolute top-0 left-0 w-full h-full bg-glacier-soft/70 z-10" />

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
              <p className="text-glacier-dark md:text-2xl text-xs">{slides[index].text}</p>
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

        {/* 🔸 Slide Counter Prompt */}
        <div className="absolute bottom-10 w-full flex justify-center z-30">
          <p className="text-white font-semibold px-4 py-2 rounded-md bg-black/70 animate-pulse text-sm md:text-base">
            Click anywhere to continue ({index + 1}/{slides.length})
          </p>
        </div>
      </section>

      {/* 📺 YouTube Section */}
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