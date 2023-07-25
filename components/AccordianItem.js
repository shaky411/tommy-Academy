import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


import {
  faPlusCircle,
  faXmarkCircle,
  faCircleMinus,
  faAngleDown,
  faAngleUp
} from "@fortawesome/free-solid-svg-icons";
import { Collapse } from "react-collapse";

export default function AccordianItem({open, toggle, title, desc}) {
    return (
        <div className="pt-[10px]">
            <div className="bg-white rounded-t-lg shadow-lg text-slate-800 py-[25px] px-[50px] flex justify-between items-center cursor-pointer" onClick={toggle}>
                <p className="text-md md:text-xl font-semibold">{title}</p>
                <div className="text-[30px]">
                    {open ? <FontAwesomeIcon icon={faAngleUp} className="rounded w-4 h-4 p-1 text-rose-400 dark:text-slate-200"/> : <FontAwesomeIcon icon={faAngleDown} className="bg-slate-100 rounded w-4 h-4 p-1 text-slate-400 dark:text-slate-200"/>}
                </div>
            </div>

            <Collapse isOpened={open}>
                <div className="bg-white rounded-b-lg text-slate-500 px-[50px] pb-[20px]">{desc}</div>
            </Collapse>
        </div>
    )
}