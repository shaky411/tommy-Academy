import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "@fortawesome/free-brands-svg-icons";
import Providers from "@/app/providers";
import ThemeSwitcher from "@/app/ThemeSwitcher";

import {
  faEnvelope,
  faHome
} from "@fortawesome/free-solid-svg-icons";

import {
  faTwitter,
  faLinkedin
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 flex flex-col justify-center items-center h-30 shadow-t-lg text-lg p-20">
      <div className="">
        <Link
          href="/"
        >
          <FontAwesomeIcon
            className="hover:text-green-500 text-2xl hover:scale-125 duration-300"
            icon={faHome}
          />{" "}
        </Link>
        <Link
          href="https://www.linkedin.com"
          target="_blank"
          rel="noopener noreferrer nofollow"
        >
          <FontAwesomeIcon
            className="mx-2 hover:text-green-500 text-2xl hover:scale-125 duration-300"
            icon={faLinkedin}
          />{" "}
        </Link>
        <Link
          href="https://www.twitter.com"
          target="_blank"
          rel="noopener noreferrer nofollow"
        >
          <FontAwesomeIcon
            className="hover:text-green-500 text-2xl hover:scale-125 duration-300"
            icon={faTwitter}
          />
        </Link>
      </div>
      <span className="mt-6 text-gray-500 text-sm text-center">&copy; 2023 All Rights Reserved, TommyTrinder.com Ltd</span>
      <div className="flex items-center justify-center">
        {/* <FontAwesomeIcon className="text-yellow-500 text-lg mr-1" icon={faLocationDot} /> */}
        <Link
          href="https://www.tommytrinder.com"
          target="_blank"
          rel="noopener noreferrer nofollow"
          className="text-sm my-4 text-center text-gray-400"
        >
          Framepoint®  Technology is a registered trademark of TommyTrinder.com Ltd. Pat.Pend.
        </Link>
        
      </div>
      <Link
          href="https://www.graygecko.co.uk"
          target="_blank"
          rel="noopener noreferrer nofollow"
          className="text-sm text-center text-indigo-500 hover:text-green-500 duration-300 mt-10"
        >
          Site by <strong>GrayGecko</strong>
        </Link>
    </footer>
  );
}