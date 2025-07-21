"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import Image from "next/image";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import GlacierGlossary from "@/components/glossary";
import CompareSlider from "@/components/CompareSlider";

const glacierData = [
  { year: 2000, volume: 100 },
  { year: 2005, volume: 90 },
  { year: 2010, volume: 75 },
  { year: 2015, volume: 60 },
  { year: 2020, volume: 45 },
  { year: 2023, volume: 35 },
];

export default function LearnPage() {
  return (
    <main className="w-full text-glacier-dark overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-screen w-full overflow-hidden" id="hero">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute w-full h-full object-cover"
          src="/glacier-hero.mp4"
        />
        <div className="absolute inset-0 bg-glacier-dark bg-opacity-60 flex flex-col items-center justify-center text-white text-center p-4">
          <h1 className="text-5xl font-bold mb-4">Learn about Glaciers</h1>
          <p className="text-xl max-w-2xl">
            One of the most valuable components of nature
          </p>
        </div>
      </section>

      {/* Section 1: Introduction */}
      <section className="py-20 px-6 md:px-20 bg-glacier-light text-glacier-dark" id="introduction">
        <h2 className="text-4xl font-semibold mb-8 text-glacier-primary">Introduction</h2>
        <p className="mb-6 text-lg leading-relaxed">
          Glaciers play a crucial role in regulating Earth&#39;s climate, providing freshwater,
          and maintaining ecological balance. However, due to global warming, glaciers are rapidly melting,
          threatening ecosystems and water security globally.
        </p>
        <ul className="list-disc list-inside mb-8 space-y-2 text-glacier-dark">
          <li>Mobilizing global efforts to prevent further melting</li>
          <li>Raising awareness</li>
          <li>Fostering collaboration</li>
          <li>Advocating for action</li>
          <li>Enhancing scientific understanding</li>
          <li>Strengthening policy frameworks and financial support</li>
        </ul>

        <div className="bg-white p-6 rounded-xl shadow-md">
          <h3 className="text-2xl font-bold mb-4">Glacier Volume Decline Over Time</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={glacierData}>
              <XAxis dataKey="year" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="volume" stroke="#2A787C" strokeWidth={3} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </section>

      {/* Section 2: Explore */}
      <section className="py-20 px-6 md:px-20 bg-glacier-soft" id="explore">
        <h2 className="text-4xl font-semibold mb-8 text-glacier-dark">Explore</h2>

        <div className="flex gap-6 overflow-x-auto custom-scrollbar pb-4">
            <Card className="bg-glacier-light shadow-md min-w-[300px] max-w-sm flex-shrink-0">
            <CardContent className="p-4">
                <h4 className="text-xl font-bold mb-2">What is a Glacier?</h4>
                <iframe
                className="w-full h-64 rounded-lg"
                src="https://www.youtube.com/embed/ZsKx_3dXkak"
                title="What is a Glacier?"
                allowFullScreen
                />
            </CardContent>
            </Card>

            <Card className="bg-glacier-light shadow-md min-w-[300px] max-w-sm flex-shrink-0">
            <CardContent className="p-4">
                <h4 className="text-xl font-bold mb-2">NASA Climate Change</h4>
                <a
                href="https://climate.nasa.gov/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-glacier-primary underline"
                >
                Visit NASA&#39;s Official Climate Site
                </a>
            </CardContent>
            </Card>

                        <Card className="bg-glacier-light shadow-md min-w-[300px] max-w-sm flex-shrink-0">
            <CardContent className="p-4">
                <h4 className="text-xl font-bold mb-2">NASA Climate Change</h4>
                <a
                href="https://climate.nasa.gov/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-glacier-primary underline"
                >
                Visit NASA&#39;s Official Climate Site
                </a>
            </CardContent>
            </Card>

                        <Card className="bg-glacier-light shadow-md min-w-[300px] max-w-sm flex-shrink-0">
            <CardContent className="p-4">
                <h4 className="text-xl font-bold mb-2">NASA Climate Change</h4>
                <a
                href="https://climate.nasa.gov/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-glacier-primary underline"
                >
                Visit NASA&#39;s Official Climate Site
                </a>
            </CardContent>
            </Card>

                        <Card className="bg-glacier-light shadow-md min-w-[300px] max-w-sm flex-shrink-0">
            <CardContent className="p-4">
                <h4 className="text-xl font-bold mb-2">NASA Climate Change</h4>
                <a
                href="https://climate.nasa.gov/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-glacier-primary underline"
                >
                Visit NASA&#39;s Official Climate Site
                </a>
            </CardContent>
            </Card>

                        <Card className="bg-glacier-light shadow-md min-w-[300px] max-w-sm flex-shrink-0">
            <CardContent className="p-4">
                <h4 className="text-xl font-bold mb-2">NASA Climate Change</h4>
                <a
                href="https://climate.nasa.gov/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-glacier-primary underline"
                >
                Visit NASA&#39;s Official Climate Site
                </a>
            </CardContent>
            </Card>

                        <Card className="bg-glacier-light shadow-md min-w-[300px] max-w-sm flex-shrink-0">
            <CardContent className="p-4">
                <h4 className="text-xl font-bold mb-2">NASA Climate Change</h4>
                <a
                href="https://climate.nasa.gov/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-glacier-primary underline"
                >
                Visit NASA&#39;s Official Climate Site
                </a>
            </CardContent>
            </Card>

            {/* Add more scrollable cards here if needed */}
        </div>
        </section>



      {/* Section 3: Glacier Data Comparison */}
      <section className="py-20 px-6 md:px-20 bg-glacier-light" id="glacier-data">
        <h2 className="text-4xl font-semibold mb-8 text-glacier-primary">
          Glacier Changes Over Time
        </h2>
        <div className="mb-6">
          <Input placeholder="Search Glacier..." className="max-w-md border-glacier-primary" />
        </div>
        <div className="max-w-4xl mx-auto rounded-xl flex flex-row gap-12 overflow-hidden shadow-md">
            <CompareSlider
            heading="Glacier Comparison"
            beforeImage="/img3.jpg"
            afterImage="/img3.jpg"
            beforeLabel="2000"
            afterLabel="2023"
            />
        </div>
      </section>

      {/* Section 4: Glossary */}
      <section className="py-20 px-6 md:px-20 bg-glacier-soft" id="glossary">
        <GlacierGlossary />
      </section>

      <Footer />
    </main>
  );
}
