"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { BsArrowDownRight } from "react-icons/bs"

// Each service card: num = display order, description = short summary, href = where "read more" goes
const services = [
    {
        num: "01",
        title: "Web Development",
        description:
            "Building fast, responsive full-stack web applications using modern frameworks like Next.js and React. From database design to deployment — I handle the full lifecycle.",
        href: "/contact",
    },
    {
        num: "02",
        title: "Frontend Development",
        description:
            "Crafting pixel-perfect, accessible user interfaces with React, Tailwind CSS, and Framer Motion. Every component is built for performance and a smooth user experience.",
        href: "/contact",
    },
    {
        num: "03",
        title: "Backend & API Development",
        description:
            "Designing and building RESTful APIs and server-side logic using Node.js. Database integration, authentication, and business logic — reliable and scalable.",
        href: "/contact",
    },
    {
        num: "04",
        title: "UI/UX Design",
        description:
            "Translating wireframes and ideas into polished interfaces. Focused on user flow, visual hierarchy, and creating designs that are as intuitive as they are beautiful.",
        href: "/contact",
    },
]

const Services = () => {
    return (
        <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
            <div className="container mx-auto">
                {/* Page heading */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    className="mb-12"
                >
                    <h2 className="h2 text-accent">My Services</h2>
                    <p className="text-white/60 mt-2 max-w-[600px]">
                        What I bring to the table — from planning to production.
                    </p>
                </motion.div>

                {/*
                  Service cards grid:
                  - staggerChildren staggers the entrance of each card by 0.1s
                  - each card fades up from y:20 to y:0 for a smooth reveal
                */}
                <motion.div
                    initial="hidden"
                    animate="show"
                    variants={{
                        hidden: {},
                        show: {
                            transition: { staggerChildren: 0.1 },
                        },
                    }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
                >
                    {services.map((service) => (
                        <motion.div
                            key={service.num}
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
                            }}
                            className="flex-1 flex flex-col justify-center gap-6 group"
                        >
                            {/* Top row: number + arrow link */}
                            <div className="flex justify-between items-center">
                                {/* Large faded number gives each card a visual anchor */}
                                <span className="text-5xl font-extrabold text-white/10 group-hover:text-accent transition-all duration-500">
                                    {service.num}
                                </span>
                                <Link
                                    href={service.href}
                                    className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                                >
                                    <BsArrowDownRight className="text-primary text-3xl" />
                                </Link>
                            </div>

                            {/* Service title */}
                            <h3 className="text-[26px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
                                {service.title}
                            </h3>

                            {/* Description */}
                            <p className="text-white/60">{service.description}</p>

                            {/* Bottom divider line */}
                            <div className="border-b border-white/20 w-full" />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}

export default Services
