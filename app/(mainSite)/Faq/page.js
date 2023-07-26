"use client"

import React, { useState } from "react";
import AccordianItem from "@/components/AccordianItem";
import { motion } from "framer-motion";


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
            title: "How do I update my payment card?",
            desc: "To update your payment card, click on the grey avatar in the top right of your screen, click on settings, then 'Billing & Payment'"
        },
        {
            title: "How do I add more users?",
            desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel corrupti id fugit quidem ducimus nesciunt dolores eum doloremque consectetur tempore sint, ab, incidunt officiis. At illum cupiditate dolorum rem, mollitia ipsa nemo sint eius laborum voluptate, delectus incidunt. Omnis, vitae sint? Quisquam exercitationem blanditiis dolores sit, saepe incidunt facilis qui."
        },
        {
            title: "Can you delete quotes?",
            desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel corrupti id fugit quidem ducimus nesciunt dolores eum doloremque consectetur tempore sint, ab, incidunt officiis. At illum cupiditate dolorum rem, mollitia ipsa nemo sint eius laborum voluptate, delectus incidunt. Omnis, vitae sint? Quisquam exercitationem blanditiis dolores sit, saepe incidunt facilis qui."
        },
        {
            title: "How do I cancel my subscription?",
            desc: "To update your payment card, click on the grey avatar in the top right of your screen, click on settings, then 'Billing & Payment'"
        }
    ]

    return (
        <section className="bg-slate-500 min-h-screen flex justify-center items-start pb-20">
            <div className="px-[40px] max-w-[800px] flex flex-col justify-center items-center">

            <motion.div
                initial={{ opacity:0 }}
                animate={{ opacity:1 }}
                transition={{ duration: 2.5, delay: 0.2 }}
            >
            <h1 className="mt-20 mb-4 font-sans text-6xl sm:text-8xl font-bold tracking-tight text-slate-100 sm:leading-none text-center">FAQ</h1>
            </motion.div>
            <p className="mb-10 text-center">These are some frequently asked questions from our users</p>

            {accordianData.map((data, index) => {
                return <AccordianItem key={index} open={index === open} title={data.title} desc={data.desc} toggle={() =>toggle(index)} />;
            })}

            </div>

        </section>
    )
}