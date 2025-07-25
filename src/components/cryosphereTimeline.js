import React from "react";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Label,
} from "recharts";

const timelineData = [
  { year: 1985, glaciers: 100 },
  { year: 1992, glaciers: 98 },
  { year: 1995, glaciers: 96 },
  { year: 2000, glaciers: 93 },
  { year: 2003, glaciers: 91 },
  { year: 2005, glaciers: 89 },
  { year: 2007, glaciers: 87 },
  { year: 2010, glaciers: 84 },
  { year: 2012, glaciers: 82 },
  { year: 2014, glaciers: 80 },
  { year: 2015, glaciers: 78 },
  { year: 2017, glaciers: 75 },
  { year: 2019, glaciers: 72 },
  { year: 2020, glaciers: 69 },
  { year: 2021, glaciers: 66 },
  { year: 2022, glaciers: 62 },
  { year: 2023, glaciers: 60 },
  { year: 2024, glaciers: 58 },
];

const CryosphereTimeline = () => {
  return (
    <section className="w-full bg-glacier-dark py-20">
      <div className="w-[95%] max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-glacier-light mb-10">
          Cryosphere Loss Timeline (1985–2024)
        </h2>

        <ResponsiveContainer width="100%" height={400}>
          <LineChart data={timelineData} margin={{ top: 10, right: 30, left: 0, bottom: 40 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#2A787C" />
            <XAxis dataKey="year" stroke="#D7E2E2">
              <Label value="Year" offset={-10} position="insideBottom" fill="#D7E2E2" />
            </XAxis>
            <YAxis stroke="#D7E2E2" domain={[50, 100]} tickFormatter={(val) => `${val}%`}>
              <Label
                value="Remaining Glacial Mass (%)"
                angle={-90}
                position="insideLeft"
                style={{ textAnchor: "middle" }}
                fill="#D7E2E2"
              />
            </YAxis>
            <Tooltip
              contentStyle={{ backgroundColor: "#042A33", borderColor: "#2A787C" }}
              labelStyle={{ color: "#D7E2E2" }}
              itemStyle={{ color: "#D7E2E2" }}
            />
            <Line
              type="monotone"
              dataKey="glaciers"
              stroke="#8B0333"
              strokeWidth={3}
              dot={{ fill: "#D7E2E2", r: 4 }}
              activeDot={{ r: 6 }}
            />
          </LineChart>
        </ResponsiveContainer>

        <p className="text-sm md:text-base text-glacier-light/80 mt-6 max-w-3xl mx-auto">
          This timeline visualizes the gradual loss of global glacier mass over the past four decades, reflecting the accelerated impact of climate change on the cryosphere.
        </p>
      </div>
    </section>
  );
};

export default CryosphereTimeline;
