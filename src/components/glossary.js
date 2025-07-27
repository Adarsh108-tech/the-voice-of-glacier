"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp } from "lucide-react";

const glossaryData = [
  { term: "Ablation", definition: "Loss of ice or snow from a glacier due to melting, sublimation, or calving. (Simple: The glacier is shrinking as ice melts or breaks off.)" },
  { term: "Accumulation", definition: "The addition of snow and ice to a glacier, primarily through snowfall. (Simple: New snow builds up on the glacier, making it grow.)" },
  { term: "Alpine Glacier", definition: "A glacier formed in mountainous regions, typically flowing down valleys. (Simple: A mountain glacier moving like a slow river.)" },
  { term: "Arete", definition: "A sharp ridge formed between two glaciers eroding parallel valleys. (Simple: A narrow mountain ridge shaped by glaciers on both both sides.)" },
  { term: "Avalanche", definition: "A rapid flow of snow down a slope, often involving ice and debris. (Simple: A big rush of snow sliding down a mountain.)" },
  { term: "Ablation Zone", definition: "The lower part of a glacier where melting and ice loss exceed accumulation. (Simple: The part of the glacier that loses more ice than it gains.)" },
  { term: "Active Layer", definition: "The surface layer of soil above permafrost that thaws and refreezes annually. (Simple: The top soil that melts in summer and freezes again in winter.)" },
  { term: "Arctic Amplification", definition: "The phenomenon where the Arctic warms faster than the global average due to feedback mechanisms. (Simple: The Arctic is heating up faster than the rest of the world.)" },
  { term: "Bergschrund", definition: "A deep crevasse separating moving glacier ice from the stagnant ice or rock at the head of a glacier. (Simple: A big crack near the top of a glacier.)" },
  { term: "Basal Sliding", definition: "The movement of glacier ice over the bedrock, lubricated by meltwater. (Simple: The glacier slips over wet ground underneath.)" },
  { term: "Blue Ice", definition: "Densely packed glacier ice that appears blue due to the absorption of red light. (Simple: Very old, dense glacier ice that looks blue.)" },
  { term: "Brittle Zone", definition: "The upper glacier layer where ice breaks under stress, forming crevasses. (Simple: The top part of the glacier where cracks easily form.)" },
  { term: "Bedrock", definition: "The solid rock beneath glacier ice or soil. (Simple: The hard rock under the glacier.)" },
  { term: "Basal Melt", definition: "Melting of glacier ice at its base due to geothermal heat or friction. (Simple: Ice melting at the bottom of the glacier.)" },
  { term: "Basal Till", definition: "Sediment deposited directly under a glacier as it moves. (Simple: Mud and rocks left behind by a moving glacier.)" },
  { term: "Black Carbon", definition: "Soot particles that settle on glaciers, reducing albedo and accelerating melt. (Simple: Dark dust on ice that makes glaciers melt faster.)" },
  { term: "Crevasse", definition: "A deep crack or fracture in the glacier surface caused by stress. (Simple: A big crack on top of a glacier.)" },
  { term: "Cirque", definition: "A bowl-shaped depression carved by a glacier at the head of a valley. (Simple: A big scoop in the mountain where a glacier started.)" },
  { term: "Continental Glacier", definition: "Massive ice sheets covering large land areas like Antarctica or Greenland. (Simple: A huge glacier covering a whole continent.)" },
  { term: "Calving", definition: "The breaking off of ice chunks from the edge of a glacier, often forming icebergs. (Simple: When pieces of glacier fall into the ocean.)" },
  { term: "Cryosphere", definition: "All frozen water parts on Earth, including glaciers, ice caps, and permafrost. (Simple: All the icy places on Earth.)" },
  { term: "Cold-based Glacier", definition: "A glacier frozen to its bed, with little or no movement at the base. (Simple: A glacier stuck to the ground with no sliding.)" },
  { term: "Cryoconite", definition: "Dark dust on glacier surfaces that absorbs heat and speeds up melting. (Simple: Dirty spots on a glacier that make it melt faster.)" },
  { term: "Climate Change", definition: "Long-term change in global temperatures and weather patterns affecting glacier dynamics. (Simple: The Earth is getting warmer, which melts glaciers.)" },
  { term: "Core Sampling", definition: "A method of extracting ice cylinders to study past climate. (Simple: Taking deep ice samples to learn about Earth’s history.)" },
  { term: "Carbon Sink", definition: "A natural system that absorbs more carbon than it releases. Glaciers may indirectly act as carbon sinks through ecosystems. (Simple: Nature storing away harmful gases.)" },
  { term: "Debris-covered Glacier", definition: "A glacier whose surface is partially or fully covered with rock debris. (Simple: A glacier hidden under a layer of rocks.)" },
  { term: "Drumlin", definition: "A streamlined hill formed beneath a glacier, shaped by ice movement and till. (Simple: A smooth, long hill made by a glacier.)" },
  { term: "Delta", definition: "A landform at the mouth of a river where sediment is deposited as the water flow slows. (Simple: A fan-shaped area where a glacier-fed river ends.)" },
  { term: "Deflation", definition: "Wind-driven removal of fine sediment from a glacier's surface. (Simple: Wind blowing away dust from a glacier.)" },
  { term: "Erratic", definition: "A large rock transported by a glacier far from its origin. (Simple: A big boulder left behind by a glacier in a strange place.)" },
  { term: "Esker", definition: "A winding ridge formed from sediments deposited by meltwater streams beneath a glacier. (Simple: A long, twisty hill made by water under a glacier.)" },
  { term: "Englacial", definition: "Located within the glacier ice. (Simple: Something stuck inside a glacier.)" },
  { term: "Equilibrium Line", definition: "The dividing line on a glacier between the accumulation and ablation zones. (Simple: Where the glacier neither grows nor shrinks.)" },
  { term: "Firn", definition: "Granular snow that has survived one melt season but has not yet turned into ice. (Simple: Snow that’s a bit like ice but not quite.)" },
  { term: "Fjord", definition: "A deep, glacially carved valley flooded by seawater. (Simple: A deep sea inlet made by glaciers.)" },
  { term: "Flow Line", definition: "Path followed by particles within a glacier as it moves. (Simple: The glacier’s trail as it slowly flows downhill.)" },
  { term: "Freeze-Thaw Weathering", definition: "The breaking of rock due to water freezing and expanding in cracks. (Simple: When water freezes in cracks and breaks rocks.)" },
  { term: "Glacier", definition: "A large, persistent body of ice that forms on land and moves under its own weight. (Simple: A big, slow-moving river of ice.)" },
  { term: "Glacial Retreat", definition: "The process of a glacier shrinking back due to melting and reduced snowfall. (Simple: When a glacier melts and gets smaller.)" },
  { term: "Glacial Advance", definition: "When a glacier grows and moves forward. (Simple: The glacier is growing and sliding ahead.)" },
  { term: "Glacial Erratic", definition: "A large rock carried and deposited by a glacier far from its source. (Simple: A big rock out of place thanks to a glacier.)" },
  { term: "Horn", definition: "A sharp mountain peak formed by glacial erosion from multiple sides. (Simple: A pointed mountain carved by glaciers.)" },
  { term: "Hanging Valley", definition: "A smaller valley left above the main valley, often with waterfalls, after glacial erosion. (Simple: A side valley that hangs above a bigger one.)" },
  { term: "Hydrofracture", definition: "Cracking of ice due to water pressure. (Simple: Water breaking through glacier ice.)" },
  { term: "Hydrology", definition: "The study of water flow and storage in glacier systems. (Simple: How water moves in and around glaciers.)" },
  { term: "Ice Cap", definition: "A dome-shaped glacier covering less than 50,000 square kilometers. (Simple: A smaller ice sheet over land.)" },
  { term: "Ice Sheet", definition: "A massive glacier covering more than 50,000 square kilometers. (Simple: A giant slab of ice over a large area.)" },
  { term: "Iceberg", definition: "A large chunk of ice that broke off from a glacier and floats in the ocean. (Simple: A piece of glacier floating in water.)" },
  { term: "Icefall", definition: "A steep section of a glacier with rapid ice flow and crevasses. (Simple: A frozen waterfall made of glacier ice.)" },
  { term: "Jokulhlaup", definition: "A sudden, glacial outburst flood. (Simple: A surprise flood from a glacier.)" },
  { term: "Kettle Lake", definition: "A lake formed when a buried chunk of glacier ice melts. (Simple: A small lake left behind by melting glacier ice.)" },
  { term: "Kame", definition: "A hill made of sand and gravel deposited by meltwater. (Simple: A mound formed by water from a melting glacier.)" },
  { term: "Lateral Moraine", definition: "A ridge of debris deposited along the sides of a glacier. (Simple: A rocky edge next to a glacier.)" },
  { term: "Loess", definition: "Fine, wind-blown sediment from glacial outwash plains. (Simple: Dusty soil blown from glacier areas.)" },
  { term: "Lag Deposit", definition: "Coarse material left behind after finer sediments are blown or washed away. (Simple: The heavier stuff left behind when the light stuff is blown off.)" },
  { term: "Moraine", definition: "An accumulation of debris deposited by a glacier. (Simple: A pile of rocks and dirt from a glacier.)" },
  { term: "Medial Moraine", definition: "A stripe of debris formed where two glaciers meet. (Simple: A line of rocks in the middle of a glacier.)" },
  { term: "Mass Balance", definition: "The difference between accumulation and ablation on a glacier. (Simple: Whether a glacier is growing or shrinking overall.)" },
  { term: "Meltwater", definition: "Water from melting glacier ice. (Simple: Melted ice from the glacier.)" },
  { term: "Neve", definition: "Compacted snow that is in the process of becoming glacier ice. (Simple: Snow that’s turning into glacier ice.)" },
  { term: "Nunatak", definition: "A mountain peak or rocky ridge that sticks out above a glacier. (Simple: A rocky island sticking up out of the ice.)" },
  { term: "Outwash Plain", definition: "Flat area formed by sediment deposited by meltwater from a glacier. (Simple: A flat land made from melted glacier water and dirt.)" },
  { term: "Overdeepening", definition: "When glaciers erode bedrock to form deep basins below sea level. (Simple: A deep hole carved under the glacier.)" },
  { term: "Permafrost", definition: "Ground that stays frozen for at least two years. (Simple: Soil that’s always frozen.)" },
  { term: "Plucking", definition: "A glacier pulling rocks away from the ground as it moves. (Simple: The glacier yanks rocks from the ground.)" },
  { term: "Piedmont Glacier", definition: "A glacier that spreads out at the base of a mountain range. (Simple: A glacier that flattens out when it hits a plain.)" },
  { term: "Quaternary Glaciation", definition: "The most recent period of ice ages spanning the last 2.6 million years. (Simple: The time of Earth’s recent ice ages.)" },
  { term: "Roche Moutonnée", definition: "A rock formation smoothed by glacier ice on one side and steep on the other. (Simple: A rock shaped by glaciers, smooth on one side, rough on the other.)" },
  { term: "Rift", definition: "A crack or gap formed by ice pulling apart. (Simple: A split in the glacier.)" },
  { term: "Snowline", definition: "The lowest elevation where snow remains year-round. (Simple: The height on a mountain where snow doesn’t melt.)" },
  { term: "Surge", definition: "A short, rapid advance of a glacier. (Simple: When the glacier suddenly moves fast.)" },
  { term: "Sublimation", definition: "Ice turning straight into vapor without melting first. (Simple: Ice disappearing into air without becoming water.)" },
  { term: "Terminus", definition: "The end or snout of a glacier. (Simple: The bottom or end of a glacier.)" },
  { term: "Tarn", definition: "A lake formed in a cirque after a glacier melts. (Simple: A small lake left in a mountain bowl.)" },
  { term: "Till", definition: "Unsorted sediment deposited directly by a glacier. (Simple: A mix of rocks and dirt dropped by a glacier.)" },
  { term: "U-shaped Valley", definition: "A valley with a rounded bottom carved by glacier movement. (Simple: A valley shaped like a big “U.”)" },
  { term: "Valley Glacier", definition: "A glacier that flows down a mountain valley. (Simple: A glacier squeezed into a mountain path.)" },
  { term: "Vegetation Feedback", definition: "How plants growing on glacial land can affect melting and climate. (Simple: Plants growing on glaciers can speed up melting.)" },
  { term: "White Ice", definition: "Newly fallen or less compressed glacier ice that appears white. (Simple: Fresh or fluffy-looking glacier ice.)" },
  { term: "Watershed", definition: "A land area where all the water drains to one place, influenced by glaciers. (Simple: Where melted glacier water flows into rivers.)" },
  { term: "Xerothermic Period", definition: "A hot and dry climatic phase often used in paleoclimatic studies. (Simple: A very warm, dry time in Earth’s history.)" },
  { term: "Yenisei Glacier Influence", definition: "Refers to glacial impact on the Yenisei River system in Siberia. (Simple: How glaciers shaped the rivers in Siberia.)" },
  { term: "Younger Dryas", definition: "A sudden return to glacial conditions about 12,800 years ago. (Simple: A short, cold period during the end of the last ice age.)" },
  { term: "Zone of Ablation", definition: "The area of a glacier where ice loss exceeds gain. (Simple: Where the glacier melts more than it grows.)" },
  { term: "Zone of Accumulation", definition: "The region where snowfall adds to the glacier. (Simple: Where snow keeps adding ice to the glacier.)" }
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
    <section id="glossary" className="py-20 px-4 md:px-20 bg-glacier-soft min-h-screen font-cabin">
      <h2 className="text-4xl font-semibold mb-6 text-glacier-dark font-nohemi">Glacier Glossary</h2>

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
