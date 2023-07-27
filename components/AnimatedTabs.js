import React from "react";
import { motion } from "framer-motion";
import { useState } from "react";

let tabs = [
    { id: "videos", label: "Videos" },
    { id: "images", label: "Images" },
    { id: "examples", label: "Examples" },
]

export default function AnimatedTabs() {
    let [activeTab, setActiveTab] = useState(tabs[0].id);

    return (
        <div className="flex space-x-1">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`${
                activeTab === tab.id ? "" : "hover:text-white/60"
              } relative rounded-full px-3 py-1.5 text-sm font-bold text-slate-800 outline-sky-400 transition focus-visible:outline-2`}
              style={{
                WebkitTapHighlightColor: "transparent",
              }}
            >
              {activeTab === tab.id && (
                <motion.span
                  layoutId="bubble"
                  className="absolute inset-0 z-10 bg-white mix-blend-overlay"
                  style={{ borderRadius: 9999 }}
                  transition={{ type: "spring", bounce: 0.3, duration: 1.6 }}
                />
              )}
              {tab.label}
            </button>
          ))}
        </div>
      );
}