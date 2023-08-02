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
  faFile,
  faVideo,
  faNewspaper
} from "@fortawesome/free-solid-svg-icons";

import {
  faReact,
  faInstagram,
  faFacebook,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

export default function Features() {
  return (
    <section className="bg-slate-200 dark:bg-gray-700 py-6 lg:px-20 px-6">
      <div className="container px-6 py-10 mx-auto">
        <h1 className="text-2xl font-semibold font-sans text-center text-slate-500 capitalize md:text-4xl">
          Become a pro with <span className="text-[#062D3C] dark:text-slate-200 font-bold">Framepoint®</span>
        </h1>

        <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-16 md:grid-cols-2 xl:grid-cols-3">


          {/* Card-1 */}
          <div className="flex flex-col items-center p-6 space-y-3 text-center bg-gray-100 border border-slate-200 dark:border-slate-700 hover:bg-slate-200 hover:border hover:border-gray-300 hover:dark:bg-gray-900 duration-300 rounded-xl dark:bg-gray-800">
          <span>
          <FontAwesomeIcon icon={faVideo} className="bg-indigo-200 dark:bg-indigo-500 rounded-full w-6 h-6 p-3 text-indigo-500 dark:text-slate-200"/>
            </span>

            <h1 className="text-xl font-semibold text-gray-700 capitalize dark:text-white">
              Video Tutorials
            </h1>

            <p className="text-gray-500 dark:text-gray-300">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit libero dolores totam aliquid. Officiis molestias delectus veritatis ea recusandae odit neque ab non assumenda fuga. Quo, molestiae odio sequi tenetur adipisci fuga, rem dolores voluptatum quibusdam minus nam ullam magnam.
            </p>

            <Link
              href="/Home"
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
          <div className="flex flex-col items-center p-6 space-y-3 text-center bg-gray-100 border border-slate-200 dark:border-slate-700 hover:bg-slate-200 hover:border hover:border-gray-300 hover:dark:bg-gray-900 duration-300 rounded-xl dark:bg-gray-800">
            <span>
              <FontAwesomeIcon icon={faNewspaper} className="bg-indigo-200 dark:bg-indigo-500 rounded-full w-6 h-6 p-3 text-indigo-500 dark:text-slate-200"/>
            </span>

            <h1 className="text-xl font-semibold text-gray-700 capitalize dark:text-white">
              Guides
            </h1>

            <p className="text-gray-500 dark:text-gray-300">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus quod tenetur quam quisquam. Earum, expedita. Amet odio consequatur necessitatibus dicta cumque, explicabo minima deleniti ipsa?
            </p>

            <Link
              href="/Home"
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
            <div className="flex flex-col items-center p-6 space-y-3 text-center bg-gray-100 border border-slate-200 dark:border-slate-700 hover:bg-slate-200 hover:border hover:border-gray-300 hover:dark:bg-gray-900 duration-300 rounded-xl dark:bg-gray-800">
            <span>
            <FontAwesomeIcon icon={faPaintRoller} className="bg-indigo-200 dark:bg-indigo-500 rounded-full w-6 h-6 p-3 text-indigo-500 dark:text-slate-200"/>
            </span>

            <h1 className="text-xl font-semibold text-gray-700 capitalize dark:text-white">
                Resources
            </h1>

            <p className="text-gray-500 dark:text-gray-300">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet, hic?
            </p>

            <Link
              href="/Home"
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
            <div className="flex flex-col items-center p-6 space-y-3 text-center bg-gray-100 border border-slate-200 dark:border-slate-700 hover:bg-slate-200 hover:border hover:border-gray-300 hover:dark:bg-gray-900 duration-300 rounded-xl dark:bg-gray-800">
            <span>
            <FontAwesomeIcon icon={faDatabase} className="bg-indigo-200 dark:bg-indigo-500 rounded-full w-6 h-6 p-3 text-indigo-500 dark:text-slate-200"/>
            </span>

            <h1 className="text-xl font-semibold text-gray-700 capitalize dark:text-white">
              Latest Features
            </h1>

            <p className="text-gray-500 dark:text-gray-300">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit doloremque amet fuga numquam nam atque earum dolores ducimus libero expedita iusto totam, quod cupiditate exercitationem iste unde, similique, dolor magni doloribus culpa at eaque repudiandae? Quaerat ex aperiam totam repellendus sed numquam et dolorum vel eius repudiandae. Optio, sit nemo.
            </p>

            <Link
              href="/Home"
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
            <div className="flex flex-col items-center p-6 space-y-3 text-center bg-gray-100 border border-slate-200 dark:border-slate-700 hover:bg-slate-200 hover:border hover:border-gray-300 hover:dark:bg-gray-900 duration-300 rounded-xl dark:bg-gray-800">
            <span>
            <FontAwesomeIcon icon={faWrench} className="bg-indigo-200 dark:bg-indigo-500 rounded-full w-6 h-6 p-3 text-indigo-500 dark:text-slate-200"/>
            </span>

            <h1 className="text-xl font-semibold text-gray-700 capitalize dark:text-white">
               Roadmap
            </h1>

            <p className="text-gray-500 dark:text-gray-300">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio architecto repellendus illo recusandae assumenda possimus veniam aliquid tempora, quam ut.
              <br />
              <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, pariatur.
            </p>

            <Link
              href="/Home"
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
            <div className="flex flex-col items-center p-6 space-y-3 text-center bg-gray-100 border border-slate-200 dark:border-slate-700 hover:bg-slate-200 hover:border hover:border-gray-300 hover:dark:bg-gray-900 duration-300 rounded-xl dark:bg-gray-800">
            <span>
            <FontAwesomeIcon icon={faPoundSign} className="bg-indigo-200 dark:bg-indigo-500 rounded-full w-6 h-6 p-3 text-indigo-500 dark:text-slate-200"/>
            </span>

            <h1 className="text-xl font-semibold text-gray-700 capitalize dark:text-white">
              News
            </h1>

            <p className="text-gray-500 dark:text-gray-300">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid dolore corporis est? Recusandae inventore, perspiciatis magni minus deserunt illum corporis consectetur pariatur qui exercitationem modi!
            </p>

            <Link
              href="/Home"
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