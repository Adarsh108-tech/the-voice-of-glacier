"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const Button = ({ children, variant = "solid", className = "" }) => {
  const base = "px-6 py-2 rounded-md font-medium transition duration-300";
  const styles = {
    solid: "bg-glacier-primary text-white hover:bg-glacier-dark",
    outline:
      "border border-glacier-primary text-glacier-primary hover:bg-glacier-primary hover:text-white",
  };
  return (
    <button className={`${base} ${styles[variant]} ${className}`}>
      {children}
    </button>
  );
};

const programs = [
  {
    id: "glacierx-gatherings",
    title: "GlacierX Gatherings",
    description:
      "Immersive 3-day events in glacier regions merging science, art, ritual, and policy.",
    details: [
      "Locations: Ladakh, Spiti, Sikkim, Vienna, Davos, Andes, Alps",
      "Day 1: Ice Talks, Cinema, Art Installations",
      "Day 2: Story Circles, Rituals, Ice Studios",
      "Day 3: Youth Assemblies, Melt March, Glacier Pact Signings",
      "Outputs: Pledges, art, policy briefs, archives",
    ],
    image: "/img1.jpg",
  },
  {
    id: "glacierx-residencies-fellowships",
    title: "GlacierX Residencies & Fellowships",
    description:
      "Cross-disciplinary residencies and labs for artists, scientists, and youth.",
    details: [
      "Fellows: Artist–scientist pairings",
      "Youth Labs: Local 18–25 year-old leaders",
      "Wisdom Council: Elders, ritualists, storytellers",
    ],
    image: "/img2.jpg",
  },
  {
    id: "education-toolkits",
    title: "Education & Toolkits",
    description:
      "Experiential kits, curriculums, and certification programs.",
    details: [
      "GlacierX-in-a-Box: classroom-ready kits",
      "Cryosphere Curriculum: for schools & NGOs",
      "Certification: Youth, educators, facilitators",
    ],
    image: "/img3.jpg",
  },
  {
    id: "cultural-campaigns",
    title: "Cultural Campaigns & Public Rituals",
    description:
      "Mobilizing collective memory and emotion through rituals, ceremonies, and storytelling.",
    details: [
      "#MyGlacierStory",
      "Echoes from the Ice",
      "Melt March, Glacier Oath",
      "Letters to the Glacier",
      "Sacred Grief Rituals & Indigenous Ceremonies",
    ],
    image: "/img1.jpg",
  },
  {
    id: "glacier-guardians",
    title: "Glacier Guardians Network",
    description:
      "A global network of committed individuals and communities for cryosphere action.",
    details: [
      "Levels: Seed → Action → Circle → Elder",
      "Regions: 10–14 glacier zones",
      "Roles: storytelling, pledges, monitoring, training, advocacy",
    ],
    image: "/img2.jpg",
  },
  {
    id: "policy-dialogues",
    title: "Policy Dialogues & Global Forums",
    description:
      "Youth, indigenous advocacy, and cryosphere forums.",
    details: [
      "Declarations, white papers, and presence at:",
      "COP30, UN Water Conference, Dushanbe Forums, UNESCO MAB",
    ],
    image: "/img3.jpg",
  },
  {
    id: "digital-tools",
    title: "Digital Tools & Technology Platforms",
    description:
      "Digital collaboration, archives, citizen science, and glacier adoption tools.",
    details: [
      "CryoCollab Portal",
      "Glacier Digital Archive & Echoes Archive",
      "Citizen Science Dashboard",
      "Adopt-a-Glacier Platform",
    ],
    image: "/img2.jpg",
  },
  {
    id: "storytelling",
    title: "Storytelling & Digital Strategy",
    description:
      "Media campaigns, emotional narratives, influencer collaborations.",
    details: [
      "Narratives: The Glacier That Held Me (film), Voices of Ice (podcast)",
      "Formats: Comics, exhibitions, toolkits, zines",
      "Campaigns: #CryoVoices, #GlacierXFridays",
      "Goal: Reach 100K+ on Instagram with sacred + scientific visual identity",
    ],
    image: "/img1.jpg",
  },
];

export default function FlagshipPrograms() {
  return (
    <div className="bg-glacier-light text-glacier-dark min-h-screen">
      <Navbar />

      {/* Hero Banner */}
      <section className="relative h-screen w-full overflow-hidden" id="programs-hero">
        <video
          id="hero-video"
          autoPlay
          loop
          muted
          className="absolute w-full h-full object-cover"
          src="/glacier-hero.mp4"
        />
        <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center p-4 text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            OUR FLAGSHIP PROGRAMS
          </h1>
          <p className="text-lg md:text-2xl max-w-2xl">
            &quot;Where glaciers speak, communities rise, and the world listens.&quot;
          </p>
          <div className="mt-6 flex gap-4">
            <Button>Meet the Movement</Button>
            <Button variant="outline">Watch the Story</Button>
          </div>
        </div>
      </section>

      <div className="pt-24 max-w-7xl mx-auto px-6 md:px-8 py-16">
        <h2 className="text-5xl font-extrabold mb-6 text-glacier-primary text-center">
          Our Flagship Programs
        </h2>
        <p className="text-xl text-glacier-dark mb-16 text-center max-w-3xl mx-auto">
          A holistic ecosystem of action—from glacier zones to global platforms, fostering
          connection, knowledge, and advocacy.
        </p>

        <div className="space-y-14">
          {programs.map((program, index) => (
            <section key={index} id={program.id} className="space-y-1 scroll-mt-20">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.3 }}
                className={`grid md:grid-cols-2 gap-10 items-center ${
                  index % 2 === 1 ? "md:grid-flow-col-dense" : ""
                }`}
              >
                <div className={`${index % 2 === 1 ? "md:col-start-2" : ""}`}>
                  <h3 className="text-3xl font-bold text-glacier-primary mb-2">
                    {program.title}
                  </h3>
                  <p className="mt-2 mb-6 text-glacier-dark text-lg leading-relaxed">
                    {program.description}
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-glacier-dark text-base">
                    {program.details.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div
                  className={`relative h-[350px] w-full rounded-2xl overflow-hidden transform transition-transform duration-300 hover:scale-[1.02] ${
                    index % 2 === 1 ? "md:col-start-1 md:row-start-1" : ""
                  }`}
                >
                  <img
                    src={program.image}
                    alt={program.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
              </motion.div>

              {index !== programs.length - 1 && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true, amount: 0.2 }}
                  className="h-[250px] bg-fixed bg-center bg-cover rounded-2xl mt-16"
                  style={{
                    backgroundImage: `url('/images/parallax-${(index % 3) + 1}.jpg')`,
                  }}
                />
              )}
            </section>
          ))}
        </div>

        <div className="text-center mt-24">
          <h3 className="text-3xl font-bold text-glacier-primary mb-4">
            Join the Movement
          </h3>
          <p className="text-xl text-glacier-dark mb-8 max-w-2xl mx-auto">
            Explore how you can contribute to protecting our planet&#39;s cryosphere.
          </p>
          <button className="bg-glacier-primary text-white font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-glacier-dark transition-colors duration-300">
            Learn More
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}
