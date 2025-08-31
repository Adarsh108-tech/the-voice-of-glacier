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
              there&#39;s a place for you in the <br/> <b>GlacierX movement</b>. Connect with us
              to explore opportunities and become a part of something truly <b>monumental</b>.
            </motion.p>
            <motion.button
              className="bg-glacier-primary text-white font-bold py-4 px-10 rounded-full text-lg shadow-xl hover:bg-glacier-dark transition-colors duration-300 transform hover:scale-105"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              onClick={() =>
                window.open(
                  "https://docs.google.com/forms/d/e/1FAIpQLScxbQubbwUS2rdI3KRD9ZGbppWN5B6ZITGw7SmDHMG34c2CXw/viewform?usp=preview",
                  "_blank" // opens in new tab
                )
              }
            >
              Collaborate with us
            </motion.button>
          </div>
        </section>
      </main>
      <Footer/>
    </div>
  );
}