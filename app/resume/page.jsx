"use client"

import { motion } from "framer-motion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

// ─── DATA ────────────────────────────────────────────────────────────────────

const about = {
    title: "About Me",
    description:
        "I'm a Software Developer with 6+ years of experience building full-stack web and mobile applications across multiple companies and industries in the Philippines.",
    info: [
        { fieldName: "Name",        fieldValue: "Vincent Fuentes" },
        { fieldName: "Phone",       fieldValue: "09666581923" },
        { fieldName: "Experience",  fieldValue: "6+ Years" },
        { fieldName: "Email",       fieldValue: "fuentes.vincent96@gmail.com" },
        { fieldName: "Nationality", fieldValue: "Filipino" },
        { fieldName: "Freelance",   fieldValue: "Available" },
        { fieldName: "Languages",   fieldValue: "English, Filipino" },
    ],
}

const experience = {
    title: "My Experience",
    description: "Companies and teams I've had the privilege of building with.",
    items: [
        {
            company: "Mashupgarage",
            position: "Software Developer",
            duration: "Jan 2024 – Present",
        },
        {
            company: "KODA Kollectiv",
            position: "Software Engineer (iOS & Frontend)",
            duration: "Apr 2023 – Dec 2023",
        },
        {
            company: "Ehrlich IT Services, Inc.",
            position: "Software Developer",
            duration: "Jun 2021 – Oct 2022",
        },
        {
            company: "Mataverse, Inc.",
            position: "Software Developer",
            duration: "Oct 2019 – Jun 2021",
        },
    ],
}

const education = {
    title: "My Education",
    description: "Academic background and self-study that built my foundation.",
    items: [
        {
            institution: "University / College",
            degree: "Bachelor of Science in Information Technology",
            duration: "2015 – 2019",
        },
        {
            institution: "Udemy / freeCodeCamp",
            degree: "Full-Stack Web Development Bootcamp",
            duration: "2020 – 2021",
        },
        {
            institution: "Online — Docs & Courses",
            degree: "React, Next.js, TypeScript & NestJS",
            duration: "2022 – Present",
        },
    ],
}

import {
    FaHtml5,
    FaCss3,
    FaReact,
    FaNodeJs,
    FaPhp,
} from "react-icons/fa"
import {
    SiTailwindcss,
    SiNextdotjs,
    SiJavascript,
    SiTypescript,
    SiRubyonrails,
    SiPostgresql,
    SiSupabase,
    SiNestjs,
    SiSwift,
    SiWordpress,
} from "react-icons/si"

const skills = {
    title: "My Skills",
    description: "Technologies I work with across web, mobile, and backend.",
    items: [
        { icon: <FaReact />,        name: "React.js" },
        { icon: <SiNextdotjs />,    name: "Next.js" },
        { icon: <SiTypescript />,   name: "TypeScript" },
        { icon: <SiJavascript />,   name: "JavaScript" },
        { icon: <FaNodeJs />,       name: "Node.js" },
        { icon: <SiNestjs />,       name: "NestJS" },
        { icon: <SiRubyonrails />,  name: "Ruby on Rails" },
        { icon: <SiTailwindcss />,  name: "Tailwind CSS" },
        { icon: <SiPostgresql />,   name: "PostgreSQL" },
        { icon: <SiSupabase />,     name: "Supabase" },
        { icon: <SiSwift />,        name: "Swift" },
        { icon: <FaHtml5 />,        name: "HTML 5" },
        { icon: <FaCss3 />,         name: "CSS 3" },
        { icon: <FaPhp />,          name: "PHP" },
        { icon: <SiWordpress />,    name: "WordPress" },
    ],
}

// ─── COMPONENT ───────────────────────────────────────────────────────────────

const Resume = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 0.4, duration: 0.4, ease: "easeIn" } }}
            className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
        >
            <div className="container mx-auto">
                <Tabs defaultValue="experience" className="flex flex-col xl:flex-row gap-[60px]">

                    {/* ── Left: Tab triggers ── */}
                    <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6 bg-transparent h-full">
                        <TabsTrigger
                            value="experience"
                            className="w-full bg-[#27272c] data-[state=active]:text-primary data-[state=active]:bg-accent h-[48px] rounded-full capitalize"
                        >
                            Experience
                        </TabsTrigger>
                        <TabsTrigger
                            value="education"
                            className="w-full bg-[#27272c] data-[state=active]:text-primary data-[state=active]:bg-accent h-[48px] rounded-full capitalize"
                        >
                            Education
                        </TabsTrigger>
                        <TabsTrigger
                            value="skills"
                            className="w-full bg-[#27272c] data-[state=active]:text-primary data-[state=active]:bg-accent h-[48px] rounded-full capitalize"
                        >
                            Skills
                        </TabsTrigger>
                        <TabsTrigger
                            value="about"
                            className="w-full bg-[#27272c] data-[state=active]:text-primary data-[state=active]:bg-accent h-[48px] rounded-full capitalize"
                        >
                            About me
                        </TabsTrigger>
                    </TabsList>

                    {/* ── Right: Tab content ── */}
                    <div className="min-h-[70vh] w-full">

                        {/* EXPERIENCE TAB */}
                        <TabsContent value="experience" className="w-full">
                            <SectionHeader title={experience.title} description={experience.description} />
                            <ScrollArea className="h-[400px]">
                                <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                    {experience.items.map((item, i) => (
                                        <TimelineCard key={i} top={item.duration} mid={item.position} bot={item.company} />
                                    ))}
                                </ul>
                            </ScrollArea>
                        </TabsContent>

                        {/* EDUCATION TAB */}
                        <TabsContent value="education" className="w-full">
                            <SectionHeader title={education.title} description={education.description} />
                            <ScrollArea className="h-[400px]">
                                <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                    {education.items.map((item, i) => (
                                        <TimelineCard key={i} top={item.duration} mid={item.degree} bot={item.institution} />
                                    ))}
                                </ul>
                            </ScrollArea>
                        </TabsContent>

                        {/* SKILLS TAB — single TooltipProvider wraps all icons, not one per icon */}
                        <TabsContent value="skills" className="w-full h-full">
                            <SectionHeader title={skills.title} description={skills.description} />
                            <TooltipProvider delayDuration={100}>
                                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-4 xl:gap-[30px]">
                                    {skills.items.map((skill, i) => (
                                        <li key={i}>
                                            <Tooltip>
                                                <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                                                    <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                                        {skill.icon}
                                                    </div>
                                                </TooltipTrigger>
                                                <TooltipContent>
                                                    <p className="capitalize">{skill.name}</p>
                                                </TooltipContent>
                                            </Tooltip>
                                        </li>
                                    ))}
                                </ul>
                            </TooltipProvider>
                        </TabsContent>

                        {/* ABOUT TAB */}
                        <TabsContent value="about" className="w-full text-center xl:text-left">
                            <SectionHeader title={about.title} description={about.description} />
                            <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 gap-x-10 max-w-[620px] mx-auto xl:mx-0">
                                {about.info.map((item, i) => (
                                    <li key={i} className="flex items-center justify-center xl:justify-start gap-4">
                                        <span className="text-white/60">{item.fieldName}</span>
                                        <span className="text-xl">{item.fieldValue}</span>
                                    </li>
                                ))}
                            </ul>
                        </TabsContent>
                    </div>
                </Tabs>
            </div>
        </motion.div>
    )
}

// ─── SMALL SHARED COMPONENTS ─────────────────────────────────────────────────

const SectionHeader = ({ title, description }) => (
    <div className="flex flex-col gap-[30px] text-center xl:text-left mb-8">
        <h3 className="text-4xl font-bold">{title}</h3>
        <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{description}</p>
    </div>
)

const TimelineCard = ({ top, mid, bot }) => (
    <li className="bg-[#232329] min-h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center gap-1">
        <span className="text-accent">{top}</span>
        <h3 className="text-xl max-w-[260px] min-h-[60px]">{mid}</h3>
        <div className="flex items-center gap-3">
            <span className="w-[6px] h-[6px] rounded-full bg-accent shrink-0" />
            <p className="text-white/60 leading-snug">{bot}</p>
        </div>
    </li>
)

export default Resume
