"use client"

import React, { useState } from "react";
import AccordianItem from "@/components/AccordianItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


import {
  faPlusCircle
} from "@fortawesome/free-solid-svg-icons";


export default function Faq() {

    const [open, setOpen] = useState(false);

    const toggle = (index) => {
        if(open === index) {
            return setOpen(null)
        }

        setOpen(index) 
    }

    const accordianData = [
        {
            title: "How do I unlock an expired quote?",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. A accusantium amet, soluta maxime ipsam sit. Explicabo modi eos ab atque."
        },
        {
            title: "Can I edit the VAT",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. A accusantium amet, soluta maxime ipsam sit. Explicabo modi eos ab atque."
        },
        {
            title: "How do I add more users",
            desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel corrupti id fugit quidem ducimus nesciunt dolores eum doloremque consectetur tempore sint, ab, incidunt officiis. At illum cupiditate dolorum rem, mollitia ipsa nemo sint eius laborum voluptate, delectus incidunt. Omnis, vitae sint? Quisquam exercitationem blanditiis dolores sit, saepe incidunt facilis qui."
        }
    ]

    return (
        <section className="bg-slate-500 h-screen grid place-items-center">
            <div className="px-[40px] max-w-[800px] flex flex-col justify-center items-center">

            <h1 className="mb-20 text-3xl md:text-4xl">Frequently asked questions</h1>

            {accordianData.map((data, index) => {
                return <AccordianItem key={index} open={index === open} title={data.title} desc={data.desc} toggle={() =>toggle(index)} />;
            })}

            </div>

        </section>
    )
}