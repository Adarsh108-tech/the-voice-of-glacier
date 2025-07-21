"use client";

import {
  FaInstagram,
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaWhatsapp,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-glacier-dark text-glacier-light py-10 px-6 md:px-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left: Logo & Socials */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">The Voice of Glaciers</h2>
          <p className="text-glacier-soft mb-4 max-w-md">
            Where glaciers speak, communities rise, and the world listens.
          </p>
          <div className="flex space-x-5 mt-4">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-glacier-light hover:text-glacier-primary text-xl" />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebookF className="text-glacier-light hover:text-glacier-primary text-xl" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="text-glacier-light hover:text-glacier-primary text-xl" />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
              <FaYoutube className="text-glacier-light hover:text-glacier-primary text-xl" />
            </a>
            <a href="https://wa.me/" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp className="text-glacier-light hover:text-glacier-primary text-xl" />
            </a>
          </div>
        </div>

        {/* Right: Founder Info */}
        <div className="text-glacier-soft">
          <h3 className="text-lg font-semibold text-white mb-2">Founder</h3>
          <p>Anuraag Maloo</p>
          <p>
            Email:{" "}
            <a
              href="mailto:thevoiceofglaciers@gmail.com"
              className="text-glacier-light underline hover:text-glacier-primary"
            >
              thevoiceofglaciers@gmail.com
            </a>
          </p>
        </div>
      </div>

      {/* Footer Bottom Text */}
      <div className="mt-10 text-center text-sm text-glacier-soft space-y-1">
        <p>© {new Date().getFullYear()} The Voice of Glaciers. All rights reserved.</p>
        <p>
          <a
            href="https://www.linkedin.com/in/adarsh-tiwari-5084ab256/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-glacier-primary transition-colors duration-300 underline"
          >
            Created by Adarsh Tiwari with love for glaciers
          </a>
        </p>
      </div>
    </footer>
  );
}
