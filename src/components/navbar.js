"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [openDropdown, setOpenDropdown] = useState(null);

  const router = useRouter();
  const pathname = usePathname();
  const dropdownRef = useRef(null);

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
    },
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

  // Handle click outside for dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSmoothScroll = (href) => {
    const [path, hash] = href.split("#");
    if (pathname !== "/" && path === "/") {
      router.push(`/#${hash}`);
      return;
    }
    const element = document.getElementById(hash);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      history.replaceState(null, "", href);
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

          {/* Desktop Menu with Clickable Dropdowns */}
          <div
            className="hidden md:flex space-x-8 items-center relative"
            ref={dropdownRef}
          >
            {structuredLinks.map((link) => (
              <div key={link.name} className="relative">
                <button
                  onClick={() =>
                    setOpenDropdown(openDropdown === link.name ? null : link.name)
                  }
                  className="flex items-center gap-1 text-white font-medium transition duration-200"
                >
                  {link.name}
                  {link.sublinks?.length > 0 && <ChevronDown size={16} />}
                </button>

                {link.sublinks?.length > 0 && openDropdown === link.name && (
                  <div
                    className={`absolute top-full mt-2 w-56 bg-white text-black rounded-md shadow-lg z-10 ${
                      link.name === "Learn" ? "right-0" : "left-0"
                    }`}
                  >
                    {link.sublinks.map((sublink) =>
                      sublink.href.startsWith("/#") ? (
                        <a
                          key={sublink.label}
                          href={sublink.href}
                          onClick={(e) => {
                            e.preventDefault();
                            handleSmoothScroll(sublink.href);
                            setOpenDropdown(null);
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
                          onClick={() => setOpenDropdown(null)}
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
              onClick={() => {
                setIsOpen(!isOpen);
                setOpenDropdown(null);
              }}
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
              <button
                className="w-full text-left text-white font-medium hover:text-cyan-300"
                onClick={() =>
                  setOpenDropdown((prev) =>
                    prev === link.name ? null : link.name
                  )
                }
              >
                {link.name}
              </button>

              {link.sublinks?.length > 0 && openDropdown === link.name && (
                <div className="ml-4 mt-1 space-y-1">
                  {link.sublinks.map((sublink) =>
                    sublink.href.startsWith("/#") ? (
                      <a
                        key={sublink.label}
                        href={sublink.href}
                        onClick={(e) => {
                          e.preventDefault();
                          setIsOpen(false);
                          setOpenDropdown(null);
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
                        onClick={() => {
                          setIsOpen(false);
                          setOpenDropdown(null);
                        }}
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
