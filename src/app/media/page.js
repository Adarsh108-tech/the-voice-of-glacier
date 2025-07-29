"use client";

import { useRef } from "react";
import VideoCard from "@/components/videoCard";
import ImageCard from "@/components/ImageCard";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function MediaPage() {
  const contentRef = useRef(null);
  const newsRef = useRef(null);

  const scrollToSection = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main className="w-full text-glacier-dark overflow-x-hidden font-cabin">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-screen w-full overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute w-full h-full object-cover"
          src="/AnuragMaloo.mp4"
        />
        <div className="absolute inset-0 bg-glacier-dark bg-opacity-60 flex flex-col items-center justify-center text-white text-center p-6">
          <h1 className="text-4xl sm:text-5xl font-nohemi mb-6">
            Updates about Glacier
          </h1>
        </div>
      </section>

      {/* Our Content */}
      <section
        ref={contentRef}
        className="py-20 px-6 md:px-20 bg-glacier-light"
      >
        <h2 className="text-3xl sm:text-4xl font-nohemi mb-10 text-glacier-primary text-center">
          Our Content
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <VideoCard
            videoSrc="/media/dushanbeConfrenceVideo.mp4"
            heading="Melting Ice Revealed"
            description="A time-lapse showing glacier retreat over the last decade."
          />

          <ImageCard
            imageSrc="/media/dushanbeAnurag.jpg"
            heading="Aerial Glacier View"
            description="A breathtaking view of the Himalayas covered in glaciers."
          />
          <ImageCard
            imageSrc="/media/one.jpg"
            heading="Aerial Glacier View"
            description="A breathtaking view of the Himalayas covered in glaciers."
          />
          <ImageCard
            imageSrc="/media/two.jpg"
            heading="Close-up of Glacial Ice"
            description="Detailed structure of compact ice layers in a glacier."
          />
        </div>
      </section>

      {/* Glacier News Section */}

      <Footer />
    </main>
  );
}
