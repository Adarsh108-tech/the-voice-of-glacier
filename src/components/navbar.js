"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const structuredLinks = [
    {
      name: "Home",
      href: "/",
      sublinks: [
        { label: "Crisis", href: "/#crisis" },
        { label: "Why TVGF", href: "/#why-tvgf" },
        { label: "Vision", href: "/#vision" },
        { label: "North Star", href: "/#north-star" },
        { label: "Core Values", href: "/#core-values" },
        { label: "The Gaps", href: "/#the-gaps" },
      ],
    },
    {
      name: "Our Strategy",
      href: "/ourStrategy",
      sublinks: [
        { label: "Cryosphere Crisis", href: "/ourStrategy#cryosphere-crisis" },
        { label: "Strategic Gaps", href: "/ourStrategy#strategic-gaps" },
        { label: "Dual-Force Model", href: "/ourStrategy#dual-force-model" },
        { label: "Solution Pillars", href: "/ourStrategy#solution-pillars" },
        { label: "Theory of Change", href: "/ourStrategy#theory-of-change" },
        { label: "Strategic Roadmap", href: "/ourStrategy#strategic-roadmap" },
      ],
    },
    {
      name: "Programs",
      href: "/programs",
      sublinks: [
        { label: "GlacierX Gatherings", href: "/programs#glacierx-gatherings" },
        { label: "Residencies & Fellowships", href: "/programs#glacierx-residencies-fellowships" },
        { label: "Education & Toolkits", href: "/programs#education-toolkits" },
        { label: "Cultural Campaigns", href: "/programs#cultural-campaigns" },
        { label: "Glacier Guardians", href: "/programs#glacier-guardians" },
        { label: "Policy Dialogues", href: "/programs#policy-dialogues" },
        { label: "Digital Platforms", href: "/programs#digital-tools" },
        { label: "Storytelling", href: "/programs#storytelling" },
      ],
    },
    {
      name: "Collaborate",
      href: "/collaborate",
      sublinks: [
        { label: "Partners", href: "/collaborate#partners" },
        { label: "Join Us", href: "/collaborate#join" },
      ],
    },
    {
    name: "Learn",
    href: "/Learn",
    sublinks: [
    { label: "Introduction", href: "/Learn#introduction" },
    { label: "Explore", href: "/Learn#explore" },
    { label: "Glacier Data", href: "/Learn#glacier-data" },
    { label: "Glossary", href: "/Learn#glossary" },
    { label: "Partners", href: "/Learn#partners" },
    { label: "Join Us", href: "/Learn#join" },
    ],
  }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 60) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
      setLastScrollY(currentScrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Handle internal smooth scroll
  const handleSmoothScroll = (href) => {
    const id = href.split("#")[1];
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      history.replaceState(null, "", href); // update URL hash
    }
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-transform duration-300 ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      } bg-transparent border-b border-white/20 shadow-sm`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <Image
                src="/comapny-dark-logo.png"
                alt="Company Logo"
                width={120}
                height={40}
                className="h-10 w-auto object-contain rounded-lg"
                priority
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            {structuredLinks.map((link) => (
              <div key={link.name} className="relative group">
                <Link
                  href={link.href}
                  className="relative text-white font-medium transition duration-200 group"
                >
                  {link.name}
                  <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full" />
                </Link>

                {link.sublinks?.length > 0 && (
                  <div className="absolute top-full left-0 w-56 mt-2 bg-white text-black rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition duration-200 z-10">
                    {link.sublinks.map((sublink) =>
                      sublink.href.startsWith("/#") ? (
                        <a
                          key={sublink.label}
                          href={sublink.href}
                          onClick={(e) => {
                            e.preventDefault();
                            handleSmoothScroll(sublink.href);
                          }}
                          className="block px-4 py-2 hover:bg-glacier-light hover:text-glacier-dark text-sm cursor-pointer"
                        >
                          {sublink.label}
                        </a>
                      ) : (
                        <Link
                          key={sublink.label}
                          href={sublink.href}
                          className="block px-4 py-2 hover:bg-glacier-light hover:text-glacier-dark text-sm"
                        >
                          {sublink.label}
                        </Link>
                      )
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pt-2 pb-4 space-y-4 bg-black/70 shadow-md border-t border-white/20">
          {structuredLinks.map((link) => (
            <div key={link.name}>
              <Link
                href={link.href}
                className="block text-white hover:text-cyan-300 font-medium"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
              {link.sublinks?.length > 0 && (
                <div className="ml-4 mt-1 space-y-1">
                  {link.sublinks.map((sublink) =>
                    sublink.href.startsWith("/#") ? (
                      <a
                        key={sublink.label}
                        href={sublink.href}
                        onClick={(e) => {
                          e.preventDefault();
                          setIsOpen(false);
                          handleSmoothScroll(sublink.href);
                        }}
                        className="block text-white hover:text-cyan-300 text-sm cursor-pointer"
                      >
                        {sublink.label}
                      </a>
                    ) : (
                      <Link
                        key={sublink.label}
                        href={sublink.href}
                        className="block text-white hover:text-cyan-300 text-sm"
                        onClick={() => setIsOpen(false)}
                      >
                        {sublink.label}
                      </Link>
                    )
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </nav>
  );
}
