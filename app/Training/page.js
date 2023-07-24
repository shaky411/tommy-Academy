"use client";

import TrainingCard from "@/components/TrainingCard";
import React from "react";
import { InlineWidget } from "react-calendly";

export default function Training() {
  return (
    <div className="bg-slate-200 flex justify-center items-center">
      <TrainingCard />
      {/* <InlineWidget url="https://calendly.com/bertranddupont/selling-with-framepoint" />
      <InlineWidget url="https://calendly.com/marc-norris/framepoint-support" /> */}
    </div>
  );
}
