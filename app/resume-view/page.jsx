"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { FiDownload, FiArrowLeft } from "react-icons/fi"
import { Button } from "@/components/ui/button"

const ResumeView = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.4, ease: "easeIn" } }}
            className="min-h-screen flex flex-col bg-primary"
        >
            {/* ── Top bar ── */}
            <div className="sticky top-0 z-50 backdrop-blur-md bg-primary/80 border-b border-white/10">
                <div className="container mx-auto flex items-center justify-between py-4">
                    <div className="flex items-center gap-4">
                        <Button variant="ghost" size="sm" asChild className="gap-2 text-white/60 hover:text-white">
                            <Link href="/">
                                <FiArrowLeft className="text-base" />
                                Back
                            </Link>
                        </Button>
                        <div className="w-px h-5 bg-white/20" />
                        <span className="text-sm text-white/60">
                            Vincent Fuentes — <span className="text-accent">Resume</span>
                        </span>
                    </div>

                    <a
                        href="/resume.pdf"
                        download="Vincent-Fuentes-Resume.pdf"
                        className="flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-full border border-accent text-accent hover:bg-accent hover:text-primary transition-all duration-300"
                    >
                        <FiDownload />
                        Download PDF
                    </a>
                </div>
            </div>

            {/* ── PDF embed ── */}
            <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0, transition: { delay: 0.2, duration: 0.5, ease: "easeOut" } }}
                className="flex-1 flex flex-col items-center py-8 px-4"
            >
                {/* Glow accent behind the PDF frame */}
                <div
                    className="pointer-events-none absolute top-[20%] left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full"
                    style={{
                        background: "radial-gradient(circle, rgba(0,255,153,0.06) 0%, transparent 70%)",
                    }}
                />

                <div className="relative w-full max-w-[860px] rounded-2xl overflow-hidden border border-white/10 shadow-[0_0_60px_rgba(0,255,153,0.07)]">
                    <iframe
                        src="/resume.pdf"
                        className="w-full"
                        style={{ height: "calc(100vh - 140px)", minHeight: 600 }}
                        title="Vincent Fuentes Resume"
                    />
                </div>
            </motion.div>
        </motion.div>
    )
}

export default ResumeView
