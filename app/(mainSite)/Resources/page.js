'use client'

import React from "react";
import { motion } from "framer-motion";
import AnimatedTabs from "@/components/AnimatedTabs";
import Login from "@/components/Login";

export default function Resources() {
    return (
        <div className="bg-slate-500 min-h-screen flex flex-col justify-start items-center pb-20 px-10">
            <motion.div
                initial={{ opacity:0 }}
                animate={{ opacity:1 }}
                transition={{ duration: 2.5, delay: 0.2 }}
            >
      <h1 className="mt-20 mb-4 font-sans text-6xl sm:text-8xl font-bold tracking-tight text-slate-100 sm:leading-none">Resources</h1>
      </motion.div>
            

            <AnimatedTabs />
            {/* <Login /> */}
      
    </div>
    )
}