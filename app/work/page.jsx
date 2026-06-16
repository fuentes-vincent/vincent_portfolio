"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { BsArrowUpRight, BsGithub } from "react-icons/bs"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

// ─── PROJECT DATA ─────────────────────────────────────────────────────────────

const projects = [
    {
        num: "01",
        category: "Hiring Platform",
        title: "Intenjobs",
        company: "Mashupgarage",
        description:
            "A job hiring platform tailored for Filipino BPO, call centre, and VA job seekers — similar to Indeed and LinkedIn Jobs. Connects candidates with top employers like Alorica, Concentrix, TaskUs, and Teleperformance. Features job listings, employer profiles, and an intuitive application flow built with Next.js 14 and Framer Motion.",
        stack: ["Next.js", "Tailwind CSS", "Framer Motion", "Firebase"],
        live: "",
        github: "",
    },
    {
        num: "02",
        category: "E-Commerce Mobile App",
        title: "CME",
        company: "Mashupgarage",
        description:
            "A jewelry e-commerce mobile application built with Expo and React Native. Lets users browse, search, and purchase jewelry products with a seamless shopping experience powered by Supabase for real-time data and Zustand for cart and session state management.",
        stack: ["Expo", "React Native", "TypeScript", "Supabase", "Zustand"],
        live: "",
        github: "",
    },
    {
        num: "03",
        category: "Enterprise Web Platform",
        title: "Metrobank",
        company: "Mashupgarage",
        description:
            "The public-facing web platform for Metrobank built with Next.js 14. Integrates a DatoCMS headless CMS via GraphQL/Apollo, Algolia search, Google Maps API, Recharts for data visualization, and Netlify Functions for serverless operations.",
        stack: ["Next.js", "TypeScript", "GraphQL", "DatoCMS", "Algolia"],
        live: "",
        github: "",
    },
    {
        num: "04",
        category: "E-Commerce Web App",
        title: "Axentrahealth",
        company: "Mashupgarage",
        description:
            "A healthcare e-commerce platform for purchasing medicines and health products online. Built with Next.js 15 and Supabase, it features product listings, order management, data visualization via Chart.js, rich text content editing, and transactional email via Resend.",
        stack: ["Next.js 15", "TypeScript", "Supabase", "Chart.js", "Tailwind CSS"],
        live: "",
        github: "",
    },
    {
        num: "05",
        category: "Marketing Website",
        title: "Super Manila",
        company: "Mashupgarage",
        description:
            "A marketing and informational web application for Super Manila built with Next.js 14. Features smooth page animations with Framer Motion, Swiper carousels, SASS styling, and interactive accordion sections via Radix UI.",
        stack: ["Next.js", "TypeScript", "Framer Motion", "Tailwind CSS", "SASS"],
        live: "",
        github: "",
    },
    {
        num: "06",
        category: "Web & Mobile App",
        title: "Metron",
        company: "Mashupgarage",
        description:
            "A comic platform where users can discover, buy, and read episodes and chapters of their favourite comics. Available on both web (Ruby on Rails + React) and mobile (Expo + React Native). Features in-app purchases, chapter unlocking, reading progress tracking, and Zustand-powered state management.",
        stack: ["Ruby on Rails", "React", "Expo", "React Native", "PostgreSQL"],
        live: "",
        github: "",
    },
    {
        num: "07",
        category: "Full-Stack Web App",
        title: "Internal System",
        company: "Mataverse Inc. & Ehrlich IT Services",
        description:
            "An internal company web system built with Ruby on Rails. Handles internal business operations and processes, providing employees with a centralized platform for managing company data and workflows.",
        stack: ["Ruby on Rails", "PostgreSQL", "HTML & CSS"],
        live: "",
        github: "",
    },
    {
        num: "08",
        category: "iOS Mobile App",
        title: "Graffwriter",
        company: "KODA Kollectiv",
        description:
            "A graffiti art iOS application built natively with Swift and UIKit. Lets users create, customize, and stylize graffiti-style lettering and artwork directly on their device with an intuitive touch-based interface.",
        stack: ["Swift", "UIKit"],
        live: "",
        github: "",
    },
]

// ─── COMPONENT ────────────────────────────────────────────────────────────────

const Work = () => {
    const [active, setActive] = useState(0)
    const project = projects[active]

    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 0.4, duration: 0.4, ease: "easeIn" } }}
            className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
        >
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row xl:gap-[30px]">

                    {/* ── Left: active project detail ── */}
                    <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
                        <div className="flex flex-col gap-[24px]">

                            <div className="text-8xl leading-none font-extrabold text-white/10">
                                {project.num}
                            </div>

                            <h2 className="text-[36px] font-bold leading-none text-white capitalize">
                                {project.category} project
                            </h2>

                            <div className="flex items-center gap-2">
                                <span className="text-white/40 text-sm">Built at</span>
                                <span className="text-accent text-sm font-semibold">{project.company}</span>
                            </div>

                            <p className="text-white/60 text-sm leading-relaxed">{project.description}</p>

                            {/* Tech stack */}
                            <ul className="flex flex-wrap gap-3">
                                {project.stack.map((item, i) => (
                                    <li
                                        key={i}
                                        className="text-sm text-accent border border-accent/30 rounded-full px-3 py-1"
                                    >
                                        {item}
                                    </li>
                                ))}
                            </ul>

                            <div className="border border-white/20" />

                            {/* Links */}
                            <div className="flex items-center gap-4">
                                {project.live && (
                                    <TooltipProvider delayDuration={100}>
                                        <Tooltip>
                                            <TooltipTrigger asChild>
                                                <Link
                                                    href={project.live}
                                                    className="w-[60px] h-[60px] rounded-full bg-white/5 flex justify-center items-center group hover:bg-accent transition-all duration-300"
                                                >
                                                    <BsArrowUpRight className="text-white text-2xl group-hover:text-primary" />
                                                </Link>
                                            </TooltipTrigger>
                                            <TooltipContent><p>Live project</p></TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                )}
                                {project.github && (
                                    <TooltipProvider delayDuration={100}>
                                        <Tooltip>
                                            <TooltipTrigger asChild>
                                                <Link
                                                    href={project.github}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="w-[60px] h-[60px] rounded-full bg-white/5 flex justify-center items-center group hover:bg-accent transition-all duration-300"
                                                >
                                                    <BsGithub className="text-white text-2xl group-hover:text-primary" />
                                                </Link>
                                            </TooltipTrigger>
                                            <TooltipContent><p>GitHub repository</p></TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                )}
                                {!project.live && !project.github && (
                                    <p className="text-white/30 text-sm italic">Company project — links not public</p>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* ── Right: project selector ── */}
                    <div className="w-full xl:w-[50%] order-1 xl:order-none mb-8 xl:mb-0">
                        <ul className="flex flex-col gap-3">
                            {projects.map((p, i) => (
                                <motion.li
                                    key={i}
                                    initial={{ opacity: 0, x: 30 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.06 }}
                                    onClick={() => setActive(i)}
                                    className={`cursor-pointer px-6 py-4 rounded-xl border transition-all duration-300 ${
                                        active === i
                                            ? "border-accent bg-[#232329] text-white"
                                            : "border-white/10 bg-[#1c1c22] text-white/60 hover:border-white/30"
                                    }`}
                                >
                                    <div className="flex items-center gap-4">
                                        <span className={`text-sm font-bold ${active === i ? "text-accent" : "text-white/20"}`}>
                                            {p.num}
                                        </span>
                                        <div>
                                            <h3 className="font-semibold leading-tight">{p.title}</h3>
                                            <p className="text-xs text-white/30 mt-0.5">{p.category}</p>
                                        </div>
                                        <div className="ml-auto">
                                            <span className={`text-[10px] font-medium px-2 py-0.5 rounded-full border ${
                                                active === i
                                                    ? "border-accent/40 text-accent"
                                                    : "border-white/10 text-white/20"
                                            }`}>
                                                {p.company}
                                            </span>
                                        </div>
                                    </div>
                                </motion.li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </motion.section>
    )
}

export default Work
