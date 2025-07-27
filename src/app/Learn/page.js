"use client";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import GlacierGlossary from "@/components/glossary";
import GlacierCard from "@/components/GlacierCard";


// Glacier data array
const glacierDetails = [
  {
    title: "Gangotri Glacier (Uttarakhand)",
    location: "Garhwal Himalayas, source of the Ganga River",
    retreat: "~1 km in the last 70 years (~15-20 meters/year)",
    concern: "Significant mass & length loss; freshwater source for millions.",
    beforeImage: "/glacierData/gangotri-new.png",
    afterImage: "/glacierData/gangotri-old.png",
    beforeLabel: "1984",
    afterLabel: "2023",
  },
  {
    title: "Siachen Glacier (Ladakh)",
    location: "Eastern Karakoram Range",
    retreat: "~1,000 meters over 30 years",
    concern: "Military activity accelerates melt; climate sensitive.",
    beforeImage: "/glacierData/siachen-old.png",
    afterImage: "/glacierData/siachen-new.png",
    beforeLabel: "1984",
    afterLabel: "2020",
  },
  {
    title: "Pindari Glacier (Uttarakhand)",
    location: "Kumaon region",
    retreat: "~135 meters from 1958 to 2020 (~2 meters/year recently)",
    concern: "Moraine shift observed; high scientific attention.",
    beforeImage: "/glacierData/Pindari-old.png",
    afterImage: "/glacierData/Pindari-new.png",
    beforeLabel: "1984",
    afterLabel: "2020",
  },
  {
    title: "Zemu Glacier (Sikkim)",
    location: "Near Kanchenjunga, Eastern Himalayas",
    retreat: "~27% area loss in recent decades",
    concern: "Vital for Teesta River; rapid satellite-observed retreat.",
    beforeImage: "/glacierData/Zemu-old.png",
    afterImage: "/glacierData/Zemu-new.png",
    beforeLabel: "1984",
    afterLabel: "2020",
  },
  {
    title: "Dokriani Glacier (Uttarakhand)",
    location: "Bhagirathi Valley",
    retreat: "~20 meters/year",
    concern: "Volume loss confirmed by Wadia Institute studies.",
    beforeImage: "/glacierData/DokrainGlacier-old.png",
    afterImage: "/glacierData/DokrianiGlacier-new.png",
    beforeLabel: "1984",
    afterLabel: "2020", 
  },
  {
    title: "Chhota Shigri Glacier (Himachal Pradesh)",
    location: "Lahaul-Spiti region",
    retreat: "~15-20 meters/year",
    concern: "One of India's benchmark glaciers with detailed data.",
    beforeImage: "/glacierData/chotta-old.png",
    afterImage: "/glacierData/chotta-new.png",
    beforeLabel: "1984",
    afterLabel: "2020",
  },
];


const glacierData = [
  { year: 1980, volumeIndex: 200 },
  { year: 1985, volumeIndex: 195 },
  { year: 1990, volumeIndex: 190 },
  { year: 1995, volumeIndex: 185 },
  { year: 2000, volumeIndex: 180 },
  { year: 2005, volumeIndex: 170 },
  { year: 2010, volumeIndex: 160 },
  { year: 2015, volumeIndex: 145 },
  { year: 2020, volumeIndex: 130 },
  { year: 2021, volumeIndex: 128 },
  { year: 2022, volumeIndex: 125 },
  { year: 2023, volumeIndex: 120 },
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
          src="/AnuragMaloo.mp4"
        />
        <div className="absolute inset-0 bg-glacier-dark bg-opacity-60 flex flex-col items-center justify-center text-white text-center p-4">
          <h1 className="text-5xl font-nohemi mb-4">Learn about Glaciers</h1>
          <p className="text-xl max-w-2xl cabin">
            One of the most valuable components of nature
          </p>
        </div>
      </section>

      {/* Section 1: Introduction */}
      <section className="py-20 px-6 md:px-20 bg-glacier-light text-glacier-dark font-cabin" id="introduction">
        <h2 className="text-4xl font-nohemi mb-8 text-glacier-primary">Introduction</h2>

        <blockquote className="text-xl italic mb-8 text-center text-glacier-dark">
          &#8220;When the ice melts, it&#39;s not just water that disappears&mdash;it&#39;s memory, balance, and the future.&#8221;
        </blockquote>

        <p className="mb-6 text-lg leading-relaxed">
          The <strong>cryosphere</strong> includes all components of the Earth System that are frozen&mdash;such as snow cover,
          glaciers, ice sheets, ice shelves, icebergs, sea ice, lake ice, river ice, permafrost, and seasonally frozen ground.
          It plays a critical role in regulating Earth&#39;s climate, supporting ecosystems, and providing water to billions of people.
        </p>

        <p className="mb-6 text-lg leading-relaxed">
          According to the <strong>IPCC Special Report</strong>, the cryosphere is undergoing rapid and alarming changes:
        </p>

        <ul className="list-disc list-inside mb-8 space-y-3 text-glacier-dark text-lg">
          <li>🌐 <strong>70%</strong> of Earth&#39;s freshwater is locked in snow and ice</li>
          <li>🧊 <strong>10%</strong> of Earth&#39;s land area is covered by glaciers or ice sheets</li>
          <li>🌊 Global sea level rise (2006&ndash;2015) was <strong>2.5&times; faster</strong> than during 1901&ndash;1990</li>
          <li>🌨 Arctic June snow cover has declined by <strong>13.4%</strong> per decade since 1967</li>
          <li>🏔 Ice sheets are up to <strong>4 km</strong> thick in East Antarctica and <strong>3 km</strong> in Greenland</li>
          <li>🧱 Antarctica holds enough ice to raise sea levels by <strong>58 meters</strong> if completely melted</li>
        </ul>
      </section>


      {/* Section 2: Explore */}
      <section className="py-20 px-6 md:px-20 bg-glacier-soft font-cabin" id="explore">
        <h2 className="text-4xl font-semibold mb-8  font-nohemi text-glacier-primary">Explore</h2>

        <div className="flex gap-6 overflow-x-auto custom-scrollbar pb-4">
          {[
            {
              title: "NASA Climate Change",
              link: "https://climate.nasa.gov/",
              image: "/explore/nasa.png",
            },
            {
              title: "Learn about Cryosphere",
              link: "https://wmo.int/topics/cryosphere",
              image: "/explore/cryosphere.png",
            },
            {
              title: "International Year of Glaciers' Preservation 2025",
              link: "https://wmo.int/resources/campaigns/launch-of-website-international-year-of-glaciers-preservation-2025",
              image: "/explore/YearOfGlacier.png",
            },
            {
              title: "National Snow and Ice Data Center",
              link: "https://nsidc.org/learn/parts-cryosphere/glaciers",
              image: "/explore/NationalSnowIceDomain.png",
            },
            {
              title: "List of Glaciers in India",
              link: "https://en.wikipedia.org/wiki/List_of_glaciers_in_India",
              image: "/explore/ListOfGlacier.png",
            },
          ].map((item, i) => (
            <a
              key={i}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="relative group rounded-lg overflow-hidden min-w-[350px] max-w-md flex-shrink-0 h-64 shadow-lg"
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-105"
                style={{ backgroundImage: `url(${item.image})` }}
              ></div>
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                <h4 className="text-white text-lg font-bold px-4 text-center">{item.title}</h4>
              </div>
            </a>
          ))}
        </div>
      </section>



      {/* Section 3: Glacier Data Comparison */}
      <section className="py-20 px-6 md:px-20 bg-glacier-light font-cabin" id="glacier-data">
        <h2 className="text-4xl font-nohemi mb-8 text-glacier-primary">
          Glacier Changes Over Time
        </h2>
        
        <div className="grid md:grid-cols-2 gap-10">
        {glacierDetails.map((glacier, index) => (
            <GlacierCard
            key={index}
            title={glacier.title}
            location={glacier.location}
            retreat={glacier.retreat}
            concern={glacier.concern}
            beforeImage={glacier.beforeImage}
            afterImage={glacier.afterImage}
            beforeLabel={glacier.beforeLabel}
            afterLabel={glacier.afterLabel}
            />
        ))}
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
