import React from "react";

import Link from "next/link";
import Image from "next/image";
import ProfilePicture from "../assets/42cb4ee6.jpeg";
import ProfilePicture2 from "../assets/4a861a84.jpg";
import MarcModal from "./MarcModal";
import BertieModal from "./BertieModal";

export default function TrainingCard() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-[1000px] px-6 py-10">
      <div className="flex flex-col items-center p-6 space-y-6 text-center bg-slate-100 border border-slate-300 dark:border-slate-700 hover:border hover:border-gray-300 hover:dark:bg-gray-900 duration-300 rounded-xl dark:bg-gray-800">
        <Image
          className="rounded-full bg-orange-300 shadow-md p-2"
          src={ProfilePicture2}
          width={100}
          height={100}
          alt="Picture of the author"
        />

        <span className="text-gray-400 text-sm">Bertrand Dupont</span>

        <h1 className="text-xl font-semibold text-gray-700 capitalize dark:text-white">
          Framepoint Training (45min)
        </h1>

        <p className="text-gray-500 dark:text-gray-300">
          Are you looking to supercharge your sales? Take a deep dive into the
          world of Framepoint with this 45min training session.
        </p>

        <BertieModal />
      </div>

      <div className="flex flex-col items-center p-6 space-y-6 text-center bg-slate-100 border border-slate-300 dark:border-slate-800 hover:border hover:border-gray-300 hover:dark:bg-gray-900 duration-300 rounded-xl dark:bg-gray-800">
        <Image
          className="rounded-full bg-indigo-300 shadow-md p-2"
          src={ProfilePicture}
          width={100}
          height={100}
          alt="Picture of the author"
        />

        <span className="text-gray-400 text-sm">Marc Norris</span>

        <h1 className="text-xl font-semibold text-gray-700 capitalize dark:text-white">
          Tech Support Call (15min)
        </h1>

        <p className="text-gray-500 dark:text-gray-300">
          Have a technical query or just need some help with a feature? This
          15min session should be enough to get you back up and running.
        </p>

        <MarcModal />
      </div>

      
    </div>
  );
}
