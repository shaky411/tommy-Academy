"use client";

import TrainingCard from "@/components/TrainingCard";
import React from "react";
import { InlineWidget } from "react-calendly";

export default function Training() {
  return (
    <div className="bg-slate-500 min-h-screen flex flex-col justify-start items-center pb-20">
      <div className="flex  flex-col justify-center items-center p-10">
      <h1 className="mt-20 mb-4 font-sans text-6xl sm:text-8xl font-bold tracking-tight text-slate-100 sm:leading-none">Training</h1>
            <p className="mb-10 text-center">Need some training or tech support? Click below to book a session.</p>
      </div>
      
      <TrainingCard />
      {/* <InlineWidget url="https://calendly.com/bertranddupont/selling-with-framepoint" />
      <InlineWidget url="https://calendly.com/marc-norris/framepoint-support" /> */}
    </div>
  );
}
