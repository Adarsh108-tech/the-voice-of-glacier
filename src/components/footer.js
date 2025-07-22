"use client";

import {
  FaInstagram,
  FaFacebookF,
  FaLinkedin,
} from "react-icons/fa";
import Image from "next/image";

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
            <a
              href="https://www.instagram.com/thevoiceofglaciers/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="text-glacier-light hover:text-glacier-primary text-xl" />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF className="text-glacier-light hover:text-glacier-primary text-xl" />
            </a>
            <a
              href="https://www.linkedin.com/company/the-voice-of-glaciers-foundation/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="text-glacier-light hover:text-glacier-primary text-xl" />
            </a>
            <a
              href="https://substack.com/@thevoiceofglaciers"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/substack-icon.webp"
                alt="Substack"
                width={20}
                height={20}
                className="invert hover:invert-0 transition duration-300"
              />
            </a>
          </div>
        </div>

        {/* Right: Founder Info + Logo */}
        <div className="text-glacier-soft flex flex-col items-start md:items-end space-y-4">
          <div>
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
          <Image
            src="/comapny-dark-logo.png"
            alt="The Voice of Glaciers Logo"
            width={120}
            height={60}
            className="object-contain"
          />
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
