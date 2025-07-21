"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp } from "lucide-react";

const glossaryData = [
  { term: "Ablation", definition: "Loss of ice/snow through melting or sublimation." },
  { term: "Albedo", definition: "The reflectivity of a surface, like snow or ice." },
  { term: "Accumulation", definition: "The process of snow and ice building up on a glacier." },
  { term: "Bergschrund", definition: "A deep crack between moving glacier ice and stagnant ice." },
  { term: "Calving", definition: "When chunks of ice break off from the glacier into water." },
  { term: "Crevasse", definition: "A deep crack in the surface of a glacier." },
  { term: "Firn", definition: "Compacted snow transitioning into glacial ice." },
  { term: "Glacier", definition: "A large mass of ice moving slowly over land." },
  { term: "Jökulhlaup", definition: "A sudden glacial outburst flood." },
  { term: "Lateral Moraine", definition: "Debris accumulated along the sides of a glacier." },
  { term: "Medial Moraine", definition: "Debris formed when two glaciers merge." },
  { term: "Nunatak", definition: "A mountain peak that sticks out above glacier ice." },
  { term: "Outwash Plain", definition: "Sediment spread by meltwater from glaciers." },
  { term: "Plucking", definition: "Glacier eroding rock by freezing and removing pieces." },
  { term: "Striation", definition: "Scratches on bedrock caused by glacier movement." },
  { term: "Terminus", definition: "The end or toe of a glacier." },
  { term: "U-shaped Valley", definition: "A valley shaped by glacier erosion." },
  { term: "Valley Glacier", definition: "A glacier confined to a mountain valley." },
  { term: "Zone of Ablation", definition: "Part of a glacier where ice is lost." },
  { term: "Zone of Accumulation", definition: "Part of a glacier where snow accumulates." },
];

export default function GlacierGlossary() {
  const [search, setSearch] = useState("");
  const [activeLetter, setActiveLetter] = useState("");
  const [expandedTerms, setExpandedTerms] = useState({});

  // Filter based on search and first letter
  const filtered = glossaryData.filter((item) => {
    const matchesSearch = item.term.toLowerCase().includes(search.toLowerCase());
    const matchesLetter = activeLetter ? item.term.startsWith(activeLetter) : true;
    return matchesSearch && matchesLetter;
  });

  // Group by first letter
  const grouped = filtered.reduce((acc, item) => {
    const letter = item.term[0].toUpperCase();
    if (!acc[letter]) acc[letter] = [];
    acc[letter].push(item);
    return acc;
  }, {});

  const toggleExpand = (term) => {
    setExpandedTerms((prev) => ({
      ...prev,
      [term]: !prev[term],
    }));
  };

  return (
    <section id="glossary" className="py-20 px-4 md:px-20 bg-glacier-soft min-h-screen">
      <h2 className="text-4xl font-semibold mb-6 text-glacier-dark">Glacier Glossary</h2>

      {/* Search */}
      <div className="mb-6 max-w-xl">
        <Input
          placeholder="Search glossary term..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border-glacier-primary"
        />
      </div>

      {/* A-Z Letter Filter */}
      <div className="flex flex-wrap gap-2 mb-10">
        {"ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("").map((letter) => (
          <Button
            key={letter}
            variant={activeLetter === letter ? "default" : "outline"}
            size="sm"
            onClick={() => setActiveLetter(letter === activeLetter ? "" : letter)}
            className="w-9 h-9 p-0 text-base font-semibold"
          >
            {letter}
          </Button>
        ))}
      </div>

      {/* Glossary List */}
      {Object.keys(grouped).sort().map((letter) => (
        <div key={letter} className="mb-10">
          <h3 className="text-2xl font-bold mb-4 text-glacier-primary">Letter: {letter}</h3>
          <div className="space-y-4">
            {grouped[letter].map(({ term, definition }) => (
              <div
                key={term}
                className="bg-glacier-light rounded-xl shadow-md p-4 flex flex-col transition-all duration-300 border border-glacier-light"
              >
                <button
                  className="flex justify-between items-center text-left text-lg font-medium text-glacier-dark focus:outline-none"
                  onClick={() => toggleExpand(term)}
                >
                  {term}
                  {expandedTerms[term] ? (
                    <ChevronUp className="w-5 h-5" />
                  ) : (
                    <ChevronDown className="w-5 h-5" />
                  )}
                </button>
                {expandedTerms[term] && (
                  <p className="mt-2 text-glacier-dark text-sm">{definition}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      ))}

      {/* No Results */}
      {filtered.length === 0 && (
        <p className="text-center text-gray-500 mt-10">No terms found.</p>
      )}
    </section>
  );
}
