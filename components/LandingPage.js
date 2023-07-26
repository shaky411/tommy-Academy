'use client'

import React from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "../assets/tommy_Round.png";
import { motion } from "framer-motion";

export default function LandingPage() {
  return (
    <div className="flex flex-col px-6">
    <div className="flex flex-col justify-center items-center min-h-screen">
      <Image
        src={Logo}
        width={100}
        height={100}
        alt="Tommy Logo"
        className="mb-4"
        // style={{opacity: 0.5}}
      />

<motion.div
    initial={{ opacity:0 }}
    animate={{ opacity:1 }}
    transition={{ duration: 3.5, delay: 0.1 }}
>
      <h1 className="text-2xl mb-6 text-center">
        Welcome to Framepoint Academy
      </h1>
      </motion.div>

      <Link
        href="/Home"
        className="text-lg font-bold bg-slate-200 duration-300 hover:bg-slate-700 px-4 py-1 w-[150px] text-center text-slate-800 hover:text-slate-100 rounded"
      >
        Enter
      </Link>

      
    </div>



</div>
  );
}
