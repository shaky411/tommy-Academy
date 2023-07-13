import React from "react";
import Link from "next/link";
import Image from "next/image";
import mainPic from "../assets/Copy of support5.jpg"

export default function Hero() {
  return (
    <div className="relative bg-slate-100 border-b dark:border-slate-700 dark:bg-gray-900 duration-300 flex flex-col-reverse px-10 mx-auto lg:block lg:flex-col lg:py-36 xl:py-38 md:px-8 md:max-w-full pt-10">
      <div className="z-0 flex justify-center h-full -mx-4 overflow-hidden lg:pt-24 lg:pb-16 lg:pr-8 xl:pr-10 lg:w-1/2 lg:absolute lg:justify-end lg:bottom-0 lg:left-0 lg:items-center">
        <Image
          src={mainPic}
          // width={2000}
          // height={2000}
          className="object-cover rounded-r-[25px] shadow object-right w-full h-auto lg:w-auto lg:h-full hidden sm:flex mb-20"
          alt="laptop image"
          blurDataURL="data"
          placeholder="blur"
          priority
        />
      </div>
      <div className="relative flex justify-end max-w-xl mx-auto xl:pr-20 lg:max-w-screen-xl">
        <div className="mb-16 lg:pr-5 lg:max-w-lg lg:mb-0">
          <div className="max-w-xl mb-6">
          <h2 className="max-w-lg mb-6 font-sans text-6xl sm:text-8xl font-bold tracking-tight text-slate-500 sm:leading-none">
              Framepoint
            </h2>
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-600 dark:text-gray-600 sm:text-4xl sm:leading-none">
             Academy
            </h2>
            <p className="text-base text-gray-700 dark:text-slate-200 md:text-lg">
            Welcome to Framepoint Academy. Here you will find, video tutorials, downloadable resources such as web assets and all things Framepoint. Stay up to date with the latest features and keep track of our current roadmap as we work to make Framepoint the most complete, window quoting software on the market.
            </p>
          </div>
          <div className="flex">
          <Link
                href="/Contact"
                className="mr-2 w-full sm:w-[150px] inline-flex items-center justify-center h-11 px-4 font-medium tracking-wide text-slate-200 duration-300 rounded shadow-md bg-indigo-500 hover:bg-indigo-800 focus:shadow-outline focus:outline-none"
              >
                Tutorials
              </Link>
              <Link
                href="/Blog"
                className="w-full sm:w-[150px] inline-flex items-center justify-center h-11 px-4 font-medium tracking-wide text-slate-800 hover:text-slate-200 duration-300 rounded shadow-md bg-green-400 hover:bg-green-800 focus:shadow-outline focus:outline-none"
              >
                Resources
              </Link>
          </div>
        </div>
      </div>
    </div>
  );
}