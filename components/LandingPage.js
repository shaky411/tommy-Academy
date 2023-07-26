'use client'

import React from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "../assets/tommy_Round.png";
import { motion } from "framer-motion";

export default function LandingPage() {
  return (
    <div className="flex flex-col p-6">
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

<div className="mb-10 flex flex-col p-10">
<span className=" text-gray-500 text-sm text-center">
&copy; 2023 All Rights Reserved, TommyTrinder.com Ltd
</span>
<div className="flex items-center justify-center">
{/* <FontAwesomeIcon className="text-yellow-500 text-lg mr-1" icon={faLocationDot} /> */}
<Link
  href="https://www.tommytrinder.com"
  target="_blank"
  rel="noopener noreferrer nofollow"
  className="text-sm my-4 text-center text-gray-400"
>
  Framepoint® Technology is a registered trademark of TommyTrinder.com
  Ltd. Pat.Pend.
</Link>
</div>
</div>

</div>
  );
}
