import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


import {
  faPlusCircle,
  faXmarkCircle
} from "@fortawesome/free-solid-svg-icons";
import { Collapse } from "react-collapse";

export default function AccordianItem({open, toggle, title, desc}) {
    return (
        <div className="pt-[10px]">
            <div className="bg-white rounded-t-lg shadow-lg text-slate-800 py-[25px] px-[50px] flex justify-between items-center cursor-pointer" onClick={toggle}>
                <p className="text-md md:text-xl font-semibold">{title}</p>
                <div className="text-[30px]">
                    {open ? <FontAwesomeIcon icon={faXmarkCircle} className="bg-indigo-200 dark:bg-indigo-500 rounded-full w-6 h-6 p-3 text-indigo-500 dark:text-slate-200"/> : <FontAwesomeIcon icon={faPlusCircle} className="bg-indigo-200 dark:bg-indigo-500 rounded-full w-6 h-6 p-3 text-indigo-500 dark:text-slate-200"/>}
                </div>
            </div>

            <Collapse isOpened={open}>
                <div className="bg-white rounded-b-lg text-slate-500 px-[50px] pb-[20px]">{desc}</div>
            </Collapse>
        </div>
    )
}