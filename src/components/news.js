"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function GlacierNews() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const res = await fetch(
          `https://newsdata.io/api/1/news?apikey=${process.env.NEXT_PUBLIC_NEWS_API_KEY}&q=glaciers&language=en&category=environment`
        );
        const data = await res.json();
        setArticles(data.results || []);
      } catch (error) {
        console.error("Error fetching glacier news:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  return (
    <section className="bg-glacier-light px-4 md:px-12 py-16 min-h-screen text-glacier-dark font-cabin">
      <motion.h2
        className="text-lg sm:text-xl md:text-5xl font-nohemi text-center mb-10 md:mb-12 px-2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Latest Glacier News
      </motion.h2>

      {loading ? (
        <p className="text-center text-glacier-primary text-sm sm:text-base">
          Loading news...
        </p>
      ) : articles.length === 0 ? (
        <p className="text-center text-glacier-accent text-sm sm:text-base">
          No glacier-related news found.
        </p>
      ) : (
        <div className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {articles.map((article, index) => (
            <motion.a
              key={index}
              href={article.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-xl shadow-md hover:shadow-xl border border-glacier-soft transition-all duration-300 flex flex-col p-5 sm:p-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="font-nohemi text-sm sm:text-lg md:text-xl text-glacier-dark line-clamp-2">
                {article.title}
              </h3>
              <p className="text-xs sm:text-sm text-glacier-primary line-clamp-3 mt-2">
                {article.description}
              </p>
              <p className="text-xs sm:text-sm text-glacier-soft mt-auto pt-4">
                {new Date(article.pubDate).toLocaleDateString()} •{" "}
                {article.source_id?.toUpperCase() || "Unknown Source"}
              </p>
            </motion.a>
          ))}
        </div>
      )}
    </section>
  );
}
