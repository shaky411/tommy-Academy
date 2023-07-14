"use client";

import React from "react";
import { InlineWidget } from "react-calendly";

export default function Training() {
  return (
    <div className="bg-slate-200 grid grid-cols-1 md:grid-cols-2 gap-5 items-center justify-center p-10">
      <InlineWidget url="https://calendly.com/marc-norris/framepoint-support" />

      <InlineWidget url="https://calendly.com/bertranddupont/selling-with-framepoint" />
    </div>
  );
}
