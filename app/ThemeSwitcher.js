"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "@fortawesome/free-brands-svg-icons";

import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    // <div className="text-center mt-6 md:mt-0">
    //     <button className="text-orange-500 hover:text-orange-700 rounded mr-2" onClick={() => setTheme("light")}><FontAwesomeIcon icon={faSun}/></button>
    //     <button className="text-indigo-500 hover:text-indigo-700 rounded" onClick={() => setTheme("dark")}><FontAwesomeIcon icon={faMoon}/></button>
    // </div>
<div className="flex items-center justify-center">
<button
aria-label="Toggle Dark Mode"
type="button"
className="w-10 h-10 p-3 rounded focus:outline-none"
onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
>
{mounted && (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    stroke="currentColor"
    className="w-4 h-4 text-violet-600 dark:text-yellow-500"
  >
    {theme === "dark" ? (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
      />
    ) : (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
      />
    )}
  </svg>
)}
</button>
</div>



  );
};

export default ThemeSwitcher;