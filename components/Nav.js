"use client";

import React from "react";
import { useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "@fortawesome/free-brands-svg-icons";
import Providers from "@/app/providers";
import ThemeSwitcher from "@/app/ThemeSwitcher";
import Image from "next/image";
import Logo from "../assets/TommyLogo.png"

import {
  faReact,
  faInstagram,
  faFacebook,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

import {
  faXmark,
  faBars,
  faNetworkWired,
  faLocationDot,
  faSun,
} from "@fortawesome/free-solid-svg-icons";

export default function Nav() {
  const [navbar, setNavbar] = useState(false);

  return (
    <header>
      <nav className="bg-white shadow-lg">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          <div>
            <div className="flex items-center justify-between md:block">
              {/* LOGO */}
              <div>
                <Link href="/" className="flex items-center py-4 px-2">
                  <Image
                    src={Logo}
                    width={300}
                    height={200}
                    alt="next js logo"
                  />
                  
                </Link>
              </div>
              {/* HAMBURGER BUTTON FOR MOBILE */}
              <div className="md:hidden">
                <button
                  className="p-2 text-gray-500 rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <FontAwesomeIcon
                      className="text-xl text-rose-500"
                      icon={faXmark}
                    />
                  ) : (
                    <FontAwesomeIcon className="text-xl" icon={faBars} />
                  )}
                </button>
              </div>
              
            </div>
          </div>
          <div className="flex flex-col items-end">
            <div className="hidden md:flex space-x-2 mb-3">
          <FontAwesomeIcon icon={faFacebook} className="bg-white border-2 border-gray-600 dark:bg-gray-600 duration-300 rounded-full w-6 h-6 p-3 text-gray-600 dark:text-white"/>
          <FontAwesomeIcon icon={faTwitter} className="bg-white border-2 border-gray-600 dark:bg-gray-600 duration-300 rounded-full w-6 h-6 p-3 text-gray-600 dark:text-white"/>
          <FontAwesomeIcon icon={faLinkedin} className="bg-white border-2 border-gray-600 dark:bg-gray-600 duration-300 rounded-full w-6 h-6 p-3 text-gray-600 dark:text-white"/>
          <FontAwesomeIcon icon={faInstagram} className="bg-white border-2 border-gray-600 dark:bg-gray-600 duration-300 rounded-full w-6 h-6 p-3 text-gray-600 dark:text-white"/>
          </div>
          <div className="hidden md:flex">
          <Link href="/Training" className="text-slate-200 font-medium w-[150px] text-center mr-2 bg-cyan-600 hover:bg-cyan-800 duration-300 rounded-md px-4 py-3 shadow-md">
            Book Training
          </Link>
          <Link href="/" className="text-slate-200 font-med w-[150px] text-center bg-slate-500 hover:bg-slate-800 duration-300 rounded-md px-4 py-3 shadow-md">
            Contact
          </Link>
          </div>
          </div>
          
        </div>
        <div className="dark:bg-black bg-gray-300 duration-300">
            <div
              className={`flex-1 border-t justify-self-center md:block md:pb-0 md:mt-0 ${
                navbar ? "md:p-0 block" : "hidden"
              }`}
            >
              <ul className="h-screen p-2 md:h-auto items-center justify-center md:flex ">
                <li className="text-lg mx-3 text-slate-600 dark:text-white sm:text-slate-600 sm:dark:text-slate-100 md:hover:text-indigo-500 hover:text-slate-100 md:hover:dark:text-indigo-500 text-center hover:bg-indigo-500 rounded-md py-4 md:py-0 md:hover:bg-transparent">
                  <Link href="/Home" onClick={() => setNavbar(!navbar)}>
                    Home
                  </Link>
                </li>
                <li className="text-lg mx-3 text-slate-600 dark:text-white sm:text-slate-600 sm:dark:text-slate-100 md:hover:text-indigo-500 hover:text-slate-100 md:hover:dark:text-indigo-500 text-center hover:bg-indigo-500 rounded-md py-4 md:py-0 md:hover:bg-transparent">
                  <Link href="/Home" onClick={() => setNavbar(!navbar)}>
                    Tutorials
                  </Link>
                </li>
                <li className="text-lg mx-3 text-slate-600 dark:text-white sm:text-slate-600 sm:dark:text-slate-100 md:hover:text-indigo-500 hover:text-slate-100 md:hover:dark:text-indigo-500 text-center hover:bg-indigo-500 rounded-md py-4 md:py-0 md:hover:bg-transparent">
                  <Link href="/Home" onClick={() => setNavbar(!navbar)}>
                    Resources
                  </Link>
                </li>
                <li className="text-lg mx-3 text-slate-600 dark:text-white sm:text-slate-600 sm:dark:text-slate-100 md:hover:text-indigo-500 hover:text-slate-100 md:hover:dark:text-indigo-500 text-center hover:bg-indigo-500 rounded-md py-4 md:py-0 md:hover:bg-transparent">
                  <Link href="/Training" onClick={() => setNavbar(!navbar)}>
                    Training
                  </Link>
                </li>
                <li className="text-lg mx-3 text-slate-600 dark:text-white sm:text-slate-600 sm:dark:text-slate-100 md:hover:text-indigo-500 hover:text-slate-100 md:hover:dark:text-indigo-500 text-center hover:bg-indigo-500 rounded-md py-4 md:py-0 md:hover:bg-transparent">
                  <Link href="/News" onClick={() => setNavbar(!navbar)}>
                    News
                  </Link>
                </li>
                <li className="text-lg mx-3 text-slate-600 dark:text-white sm:text-slate-600 sm:dark:text-slate-100 md:hover:text-indigo-500 hover:text-slate-100 md:hover:dark:text-indigo-500 text-center hover:bg-indigo-500 rounded-md py-4 md:py-0 md:hover:bg-transparent">
                  <Link href="/Faq" onClick={() => setNavbar(!navbar)}>
                    FAQ
                  </Link>
                </li>
                <Providers>
                  <ThemeSwitcher />
                </Providers>
              </ul>
            </div>
          </div>
      </nav>
    </header>
  );
}
