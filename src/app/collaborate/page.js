"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/navbar"; // Assuming Navbar is correctly implemented and styled
import Footer from "@/components/footer";

// Reusable components for better readability and consistency
const SectionHeader = ({ title, description }) => (
  <div className="text-center mb-12">
    <h2 className="text-4xl md:text-5xl font-extrabold text-glacier-primary mb-4">
      {title}
    </h2>
    {description && (
      <p className="text-lg md:text-xl text-glacier-dark max-w-3xl mx-auto">
        {description}
      </p>
    )}
  </div>
);

const SubTitle = ({ title }) => (
  <h3 className="text-2xl font-bold text-glacier-dark mb-6 mt-12 border-b-2 border-glacier-primary pb-2 inline-block">
    {title}
  </h3>
);

export default function CollaboratePage() {
  const frameworkSections = [
    {
      title: "1. WHO — Stakeholder Groups to Engage",
      content: (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-6 text-lg leading-relaxed">
          <p className="flex items-center">
            <span className="text-glacier-primary mr-3 text-2xl">•</span>
            <strong>Knowledge Holders:</strong> Glaciologists, Indigenous elders
          </p>
          <p className="flex items-center">
            <span className="text-glacier-primary mr-3 text-2xl">•</span>
            <strong>Creative Translators:</strong> Artists, designers, writers
          </p>
          <p className="flex items-center">
            <span className="text-glacier-primary mr-3 text-2xl">•</span>
            <strong>Community Connectors:</strong> Youth leaders, climbers, teachers
          </p>
          <p className="flex items-center">
            <span className="text-glacier-primary mr-3 text-2xl">•</span>
            <strong>Spiritual Guides:</strong> Monks, healers, ritualists
          </p>
          <p className="flex items-center">
            <span className="text-glacier-primary mr-3 text-2xl">•</span>
            <strong>Changemakers:</strong> Entrepreneurs, tech innovators
          </p>
          <p className="flex items-center">
            <span className="text-glacier-primary mr-3 text-2xl">•</span>
            <strong>Policy Influencers:</strong> Journalists, advisors, think tanks
          </p>
        </div>
      ),
    },
    {
      title: "2. WHAT — What They Bring to the Table",
      content: (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-6 text-lg leading-relaxed">
          <p className="flex items-center">
            <span className="text-glacier-primary mr-3 text-2xl">•</span>
            <strong>Expertise & Knowledge:</strong> Climate science, ancestral wisdom
          </p>
          <p className="flex items-center">
            <span className="text-glacier-primary mr-3 text-2xl">•</span>
            <strong>Creativity & Expression:</strong> Music, murals, documentaries
          </p>
          <p className="flex items-center">
            <span className="text-glacier-primary mr-3 text-2xl">•</span>
            <strong>Local & Cultural Insight:</strong> Traditional practices
          </p>
          <p className="flex items-center">
            <span className="text-glacier-primary mr-3 text-2xl">•</span>
            <strong>Platforms & Reach:</strong> Networks, classrooms, social media
          </p>
          <p className="flex items-center">
            <span className="text-glacier-primary mr-3 text-2xl">•</span>
            <strong>Tools & Tech:</strong> Sensors, AI, open data platforms
          </p>
          <p className="flex items-center">
            <span className="text-glacier-primary mr-3 text-2xl">•</span>
            <strong>Healing & Meaning:</strong> Ceremonies, rituals, sacred stories
          </p>
        </div>
      ),
    },
    {
      title: "3. WHY — What They Gain",
      content: (
        <ul className="list-none space-y-4 text-lg leading-relaxed">
          <li className="flex items-start">
            <span className="text-glacier-primary mr-3 text-2xl">•</span>
            Be part of a global, purpose-driven movement with tangible impact.
          </li>
          <li className="flex items-start">
            <span className="text-glacier-primary mr-3 text-2xl">•</span>
            Gain visibility through powerful storytelling, film, and exhibitions.
          </li>
          <li className="flex items-start">
            <span className="text-glacier-primary mr-3 text-2xl">•</span>
            Discover unique interdisciplinary collaboration opportunities.
          </li>
          <li className="flex items-start">
            <span className="text-glacier-primary mr-3 text-2xl">•</span>
            Access invaluable fieldwork opportunities in pristine glacier regions.
          </li>
          <li className="flex items-start">
            <span className="text-glacier-primary mr-3 text-2xl">•</span>
            Experience spiritual nourishment, purpose, and genuine human connection.
          </li>
          <li className="flex items-start">
            <span className="text-glacier-primary mr-3 text-2xl">•</span>
            Co-author significant outputs that actively shape global policy.
          </li>
        </ul>
      ),
    },
    {
      title: "4. WHEN — Volunteer Opportunities",
      content: (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-6 text-lg leading-relaxed">
          <p className="flex items-center">
            <span className="text-glacier-primary mr-3 text-2xl">•</span>
            <strong>Educational Reels (Glaciers):</strong> Online, ongoing contributions.
          </p>
          <p className="flex items-center">
            <span className="text-glacier-primary mr-3 text-2xl">•</span>
            <strong>GlacierX Gatherings:</strong> Immersive 3-day seasonal events.
          </p>
          <p className="flex items-center">
            <span className="text-glacier-primary mr-3 text-2xl">•</span>
            <strong>Residencies:</strong> Focused 2-4 week immersive programs.
          </p>
          <p className="flex items-center">
            <span className="text-glacier-primary mr-3 text-2xl">•</span>
            <strong>Local Action Labs:</strong> Monthly/Quarterly community-led initiatives.
          </p>
          <p className="flex items-center">
            <span className="text-glacier-primary mr-3 text-2xl">•</span>
            <strong>Virtual Story Circles:</strong> Monthly online sharing sessions.
          </p>
          <p className="flex items-center">
            <span className="text-glacier-primary mr-3 text-2xl">•</span>
            <strong>Annual Rituals/Festivals:</strong> Celebrating during Global Glacier Week.
          </p>
          <p className="flex items-center">
            <span className="text-glacier-primary mr-3 text-2xl">•</span>
            <strong>Advocacy Drives:</strong> Targeted, issue-based campaigns.
          </p>
        </div>
      ),
    },
    {
      title: "5. HOW — Step-by-Step Engagement Funnel",
      content: (
        <div className="space-y-6 text-lg leading-relaxed">
          <div className="flex items-start">
            <span className="text-glacier-primary mr-3 text-2xl font-bold">1.</span>
            <div>
              <strong>Inspiration:</strong> We captivate hearts and minds by sharing emotional stories through compelling reels, insightful talks, and widespread media.
            </div>
          </div>
          <div className="flex items-start">
            <span className="text-glacier-primary mr-3 text-2xl font-bold">2.</span>
            <div>
              <strong>Invitation:</strong> We extend open calls for specific roles like &quot;Artists for Glaciers&quot; or &quot;Tech Innovators for Cryosphere,&quot; matching skills to needs.
            </div>
          </div>
          <div className="flex items-start">
            <span className="text-glacier-primary mr-3 text-2xl font-bold">3.</span>
            <div>
              <strong>Immersion:</strong> Volunteers dive deep through hybrid glacier field visits, intensive residencies, and collaborative summits.
            </div>
          </div>
          <div className="flex items-start">
            <span className="text-glacier-primary mr-3 text-2xl font-bold">4.</span>
            <div>
              <strong>Integration:</strong> Together, we co-create impactful outputs, ranging from digital content and powerful rituals to widespread campaigns.
            </div>
          </div>
          <div className="flex items-start">
            <span className="text-glacier-primary mr-3 text-2xl font-bold">5.</span>
            <div>
              <strong>Impact Sharing:</strong> We ensure full credit, broad visibility, and continuous feedback loops, recognizing and amplifying every contribution.
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="bg-white text-glacier-dark min-h-screen">
      <Navbar />

      {/* Hero Banner */}
      <div className="relative w-full h-[300px] md:h-[400px] overflow-hidden">
        <img
          src="/img1.jpg" // Ensure this image path is correct and the image exists
          alt="Glacier landscape"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-glacier-dark/60 to-glacier-primary/30 flex items-center px-6 md:px-16">
          <h1 className="text-3xl md:text-5xl font-bold text-white drop-shadow-lg">
            Collaborate with Us
          </h1>
        </div>
      </div>

      <main className="flex flex-col"> {/* Removed mt-0 and space-y-20 here */}
        {/* Section: Introduction - placed immediately after banner, effectively removing extra top space */}

        {/* Section: Volunteer Framework Main Header */}
        <motion.section
          className="w-full py-16 px-6" // This section just holds the main header for the framework
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="max-w-6xl mx-auto">
            <SectionHeader
              title="Volunteer Engagement Framework for TVGF"
              description="Our structured approach ensures meaningful contributions and mutual growth for everyone involved in The Valley`s Glacier Future (TVGF)."
            />
          </div>
        </motion.section>

        {/* Individual Framework Sections (WHO, WHAT, WHY, WHEN, HOW) with alternating backgrounds */}
        {frameworkSections.map((section, index) => (
          <motion.section
            key={index}
            className={`w-full py-16 px-6 ${
              index % 2 === 0 ? "bg-glacier-light" : "bg-white"
            }`}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 * index }} // Stagger animations slightly
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="max-w-6xl mx-auto">
              <SubTitle title={section.title} />
              {section.content}
            </div>
          </motion.section>
        ))}

        {/* Section: Tiered Roles */}
        <motion.section
          className="w-full bg-glacier-light py-20 px-6"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="max-w-6xl mx-auto">
            <SectionHeader
              title="👥 Tiered Volunteer Roles"
              description="Our tiered system provides clear pathways for engagement, from casual support to deep involvement, recognizing every level of commitment."
            />
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  title: "Seed Guardians",
                  who: "Supporters, students, general enthusiasts",
                  role: "Follow our journey, share content, attend online events, and take the Glacier Oath. Low commitment, high impact.",
                  icon: "",
                },
                {
                  title: "Action Guardians",
                  who: "Artists, educators, tech users, local advocates",
                  role: "Lead storytelling events, create compelling content, and actively run local glacier campaigns. Medium commitment.",
                  icon: "",
                },
                {
                  title: "Circle Guardians",
                  who: "Fellows, mentors, skilled facilitators",
                  role: "Host or join immersive residencies, develop comprehensive toolkits, and co-author significant outputs. High commitment.",
                  icon: "",
                },
                {
                  title: "Elder Guardians",
                  who: "Indigenous elders, leading scientists, spiritual leaders",
                  role: "Guide the vision, lead sacred rituals and exhibitions, conduct ceremonies, and share ancestral storytelling. Core leadership.",
                  icon: "", // Changed to a more universally recognized &#39;sparkle&#39; for wisdom
                },
              ].map((tier, index) => (
                <motion.div
                  key={index}
                  className="bg-white text-glacier-dark p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1 flex flex-col items-center text-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true, amount: 0.4 }}
                >
                  <span className="text-5xl mb-4" role="img" aria-label={tier.title + " icon"}>
                    {tier.icon}
                  </span>
                  <h4 className="text-xl font-bold mb-3 text-glacier-primary">
                    {tier.title}
                  </h4>
                  <p className="text-base mb-2">
                    <span className="font-semibold">Who:</span> {tier.who}
                  </p>
                  <p className="text-base text-gray-700">
                    <span className="font-semibold">Role:</span> {tier.role}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Call to Action Section */}
        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2
              className="text-4xl font-extrabold text-glacier-primary mb-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Ready to Make a Difference?
            </motion.h2>
            <motion.p
              className="text-lg text-glacier-dark mb-10 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              Whether you&#39;re a seasoned expert or just starting your journey,
              there&#39;s a place for you in the **GlacierX movement**. Connect with us
              to explore opportunities and become a part of something truly **monumental**.
            </motion.p>
            <motion.button
              className="bg-glacier-primary text-white font-bold py-4 px-10 rounded-full text-lg shadow-xl hover:bg-glacier-dark transition-colors duration-300 transform hover:scale-105"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Contact Us to Collaborate
            </motion.button>
          </div>
        </section>
      </main>
      <Footer/>
    </div>
  );
}