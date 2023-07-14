import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

import {
  faCode,
  faWrench,
  faDatabase,
  faPaintRoller,
  faPoundSign,
  faFile
} from "@fortawesome/free-solid-svg-icons";

import {
  faReact,
  faInstagram,
  faFacebook,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

export default function Features() {
  return (
    <section className="bg-slate-200 dark:bg-gray-700 py-6">
      <div className="container px-6 py-10 mx-auto">
        <h1 className="text-2xl font-semibold font-sans text-center text-slate-500 capitalize md:text-4xl">
          Become a pro with <span className="text-cyan-600">Framepoint</span>
        </h1>

        <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-16 md:grid-cols-2 xl:grid-cols-3">


          {/* Card-1 */}
          <div className="flex flex-col items-center p-6 space-y-3 text-center bg-gray-100 border border-slate-200 dark:border-slate-700 hover:bg-slate-200 hover:border hover:border-gray-300 hover:dark:bg-gray-900 duration-300 rounded-xl dark:bg-gray-800">
          <span>
          <FontAwesomeIcon icon={faFile} className="bg-indigo-200 dark:bg-indigo-500 rounded-full w-6 h-6 p-3 text-indigo-500 dark:text-slate-200"/>
            </span>

            <h1 className="text-xl font-semibold text-gray-700 capitalize dark:text-white">
              Video Tutorials
            </h1>

            <p className="text-gray-500 dark:text-gray-300">
              Tailwind CSS offers a flexible and efficient approach to styling
              websites and applications, allowing developers to create custom
              designs quickly and maintainable code. Its utility-first approach,
              customization options, and responsive design system make it a
              popular choice among developers.
            </p>

            <Link
              href="/Blog"
              className="flex items-center -mx-1 text-sm text-blue-500 capitalize transition-colors duration-300 transform dark:text-blue-400 hover:underline hover:text-blue-600 dark:hover:text-blue-500"
            >
              <span className="mx-1">read more</span>
              <svg
                className="w-4 h-4 mx-1 rtl:-scale-x-100"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </Link>
          </div>

          {/* Card-2 */}
          <div className="flex flex-col items-center p-6 space-y-3 text-center bg-gray-100 border border-slate-200 dark:border-slate-700 hover:bg-slate-200 hover:dark:bg-gray-900 duration-300 rounded-xl dark:bg-gray-800">
            <span>
              <FontAwesomeIcon icon={faCode} className="bg-indigo-200 dark:bg-indigo-500 rounded-full w-6 h-6 p-3 text-indigo-500 dark:text-slate-200"/>
            </span>

            <h1 className="text-xl font-semibold text-gray-700 capitalize dark:text-white">
              Guides
            </h1>

            <p className="text-gray-500 dark:text-gray-300">
              Next.js combines the power of React with server-side rendering and
              static site generation, providing a performant, scalable, and
              developer-friendly environment for building websites and web
              applications.
            </p>

            <Link
              href="/Blog"
              className="flex items-center -mx-1 text-sm text-blue-500 capitalize transition-colors duration-300 transform dark:text-blue-400 hover:underline hover:text-blue-600 dark:hover:text-blue-500"
            >
              <span className="mx-1">read more</span>
              <svg
                className="w-4 h-4 mx-1 rtl:-scale-x-100"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </Link>
          </div>

            {/* Card-3 */}
            <div className="flex flex-col items-center p-6 space-y-3 text-center bg-gray-100 border border-slate-200 dark:border-slate-700 hover:bg-slate-200 hover:dark:bg-gray-900 duration-300 rounded-xl dark:bg-gray-800">
            <span>
            <FontAwesomeIcon icon={faPaintRoller} className="bg-indigo-200 dark:bg-indigo-500 rounded-full w-6 h-6 p-3 text-indigo-500 dark:text-slate-200"/>
            </span>

            <h1 className="text-xl font-semibold text-gray-700 capitalize dark:text-white">
                Resources
            </h1>

            <p className="text-gray-500 dark:text-gray-300">
              Simplicity and cleanliness in web design should not sacrifice
              functionality or accessibility. We aim for designs that are
              visually appealing, user-friendly, and align with the purpose and
              goals of your website or application.
            </p>

            <Link
              href="/Blog"
              className="flex items-center -mx-1 text-sm text-blue-500 capitalize transition-colors duration-300 transform dark:text-blue-400 hover:underline hover:text-blue-600 dark:hover:text-blue-500"
            >
              <span className="mx-1">read more</span>
              <svg
                className="w-4 h-4 mx-1 rtl:-scale-x-100"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </Link>
          </div>

            {/* Card-4 */}
            <div className="flex flex-col items-center p-6 space-y-3 text-center bg-gray-100 border border-slate-200 dark:border-slate-700 hover:bg-slate-200 hover:dark:bg-gray-900 duration-300 rounded-xl dark:bg-gray-800">
            <span>
            <FontAwesomeIcon icon={faDatabase} className="bg-indigo-200 dark:bg-indigo-500 rounded-full w-6 h-6 p-3 text-indigo-500 dark:text-slate-200"/>
            </span>

            <h1 className="text-xl font-semibold text-gray-700 capitalize dark:text-white">
              Latest Features
            </h1>

            <p className="text-gray-500 dark:text-gray-300">
              Strapi is a headless CMS used to develop websites, mobile
              applications, eCommerce sites, and APIs. It allows you to create
              an API without knowing anything about the backend or databases.
              The system builds APIs based on content models automatically,
              making it easy to view data in the CMS with Strapi examples.
            </p>

            <Link
              href="/Blog"
              className="flex items-center -mx-1 text-sm text-blue-500 capitalize transition-colors duration-300 transform dark:text-blue-400 hover:underline hover:text-blue-600 dark:hover:text-blue-500"
            >
              <span className="mx-1">read more</span>
              <svg
                className="w-4 h-4 mx-1 rtl:-scale-x-100"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </Link>
          </div>

            {/* Card-5 */}
            <div className="flex flex-col items-center p-6 space-y-3 text-center bg-gray-100 border border-slate-200 dark:border-slate-700 hover:bg-slate-200 hover:dark:bg-gray-900 duration-300 rounded-xl dark:bg-gray-800">
            <span>
            <FontAwesomeIcon icon={faWrench} className="bg-indigo-200 dark:bg-indigo-500 rounded-full w-6 h-6 p-3 text-indigo-500 dark:text-slate-200"/>
            </span>

            <h1 className="text-xl font-semibold text-gray-700 capitalize dark:text-white">
               Roadmap
            </h1>

            <p className="text-gray-500 dark:text-gray-300">
              Achieving a truly "zero maintenance" web design may be difficult
              since all websites require some level of maintenance and updates.
              However, we adopt certain practices and technologies to minimize
              maintenance efforts.
              <br />
              <br />
              Keep in mind that some level of ongoing maintenance, monitoring,
              and occasional updates will still be necessary to ensure your
              website remains secure, functional, and aligned with evolving
              standards and technologies.
            </p>

            <Link
              href="/Blog"
              className="flex items-center -mx-1 text-sm text-blue-500 capitalize transition-colors duration-300 transform dark:text-blue-400 hover:underline hover:text-blue-600 dark:hover:text-blue-500"
            >
              <span className="mx-1">read more</span>
              <svg
                className="w-4 h-4 mx-1 rtl:-scale-x-100"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </Link>
          </div>

            {/* Card-6 */}
            <div className="flex flex-col items-center p-6 space-y-3 text-center bg-gray-100 border border-slate-200 dark:border-slate-700 hover:bg-slate-200 hover:dark:bg-gray-900 duration-300 rounded-xl dark:bg-gray-800">
            <span>
            <FontAwesomeIcon icon={faPoundSign} className="bg-indigo-200 dark:bg-indigo-500 rounded-full w-6 h-6 p-3 text-indigo-500 dark:text-slate-200"/>
            </span>

            <h1 className="text-xl font-semibold text-gray-700 capitalize dark:text-white">
              News
            </h1>

            <p className="text-gray-500 dark:text-gray-300">
              Remember, while cost-effective web design is important, it's
              essential to balance affordability with the quality,
              functionality, and scalability required for your website to
              achieve its goals.
            </p>

            <Link
              href="/Blog"
              className="flex items-center -mx-1 text-sm text-blue-500 capitalize transition-colors duration-300 transform dark:text-blue-400 hover:underline hover:text-blue-600 dark:hover:text-blue-500"
            >
              <span className="mx-1">read more</span>
              <svg
                className="w-4 h-4 mx-1 rtl:-scale-x-100"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}