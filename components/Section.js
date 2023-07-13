import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

import {
    faSearch,
    faFile,
    faNetworkWired,
    faLocationDot,
    faPoundSign,
    faBoltLightning,
    faCode
} from "@fortawesome/free-solid-svg-icons"

export default function Section() {
    return (
        <div className="grid grid-cols-1 border-b border-slate-700 md:grid-cols-3 px-10 sm:px-20 bg-slate-300 dark:bg-slate-800 text-slate-600 dark:text-slate-500">

            <div className="py-10 space-y-5 dark:hover:bg-slate-700 hover:bg-slate-700 hover:text-slate-200 duration-300 p-6 flex flex-col items-center justify-center text-center">
                <FontAwesomeIcon className="text-5xl" icon={faBoltLightning}/>
                <h2 className="text-4xl">FAST</h2>
                <Link href="/Pricing">
                <span className="hover:text-green-500">Learn more</span>
                </Link>
            </div>

            <div className="py-10 space-y-5 dark:hover:bg-slate-700 hover:bg-slate-700 hover:text-slate-200 duration-300 p-6 flex flex-col items-center justify-center text-center">
                <FontAwesomeIcon className="text-5xl" icon={faCode}/>
                <h2 className="text-4xl">Responsive</h2>
                <Link href="/Pricing">
                <span className="hover:text-green-500">Learn more</span>
                </Link>
            </div>

            <div className="py-10 space-y-5 dark:hover:bg-slate-700 hover:bg-slate-700 hover:text-slate-200 duration-300 p-6 flex flex-col items-center justify-center text-center">
                <FontAwesomeIcon className="text-5xl" icon={faPoundSign}/>
                <h1 className="text-4xl">Affordable</h1>
                <Link href="/Pricing">
                <span className="hover:text-green-500">Learn more</span>
                </Link>
            </div>
        </div>    
      )
}