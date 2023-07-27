'use client'

import React from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "../assets/tommy_Round.png";
import { motion } from "framer-motion";
import AnimatedTabs from "./AnimatedTabs";

export default function LandingPage() {
  return (
    <div className="flex flex-col px-6 bg-gray-950">
    <div className="flex flex-col justify-center items-center min-h-screen">

        <motion.div
        animate={{
            scale: [1, 3, 3, 1, 1],
            rotate: [0, 0, 360, 360, 0],
            borderRadius: ["20%", "20%", "50%", "50%", "20%"],}}
            transition={{ duration: 3.5, delay: 0.5 }}
        >
      <Image
        src={Logo}
        width={100}
        height={100}
        alt="Tommy Logo"
        // style={{opacity: 0.5}}
      />
      </motion.div>

<motion.div
    initial={{ opacity:0 }}
    animate={{ opacity:1 }}
    transition={{ duration: 3.5, delay: 3.5 }}
>
      <h1 className="text-2xl my-4 text-center">
        Welcome to Framepoint Academy
      </h1>
      </motion.div>

<motion.div
initial={{ opacity:0 }}
animate={{ opacity:1 }}
transition={{ duration: 2.5, delay: 4.5 }}
>
      <Link
        href="/Home"
        className="text-lg font-bold bg-white duration-300 hover:bg-slate-700 px-6 py-2 w-[150px] text-center text-slate-800 hover:text-slate-100 rounded-full"
      >
        Enter
      </Link>
      </motion.div>

{/* <div className="">
<AnimatedTabs />
</div> */}
      

      
    </div>



</div>
  );
}
