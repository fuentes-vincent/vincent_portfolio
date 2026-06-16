"use client"

import CountUp from "react-countup"

// Each stat has a target number and a readable label
// suffix="+" appended by CountUp so numbers display as "6+", "8+", etc.
const stats = [
    {
        num: 6,
        text: "Years of experience",
        suffix: "+",
    },
    {
        num: 8,
        text: "Projects completed",
        suffix: "+",
    },
    {
        num: 1000,
        text: "Code commits",
        suffix: "+",
    },
    {
        num: 15,
        text: "Technologies mastered",
        suffix: "+",
    },
]

const Stats = () => {
  return (
    <section className="pt-4 pb-12 xl:pt-0 xl:pb-0">
        <div className="container mx-auto">
            <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none">
                {stats.map((item, index) => {
                    return (
                        <div
                            className="flex-1 flex gap-4 items-center justify-center xl:justify-start"
                            key={index}
                        >
                            {/* CountUp animates from 0 to `end` over 5s with a 2s delay */}
                            <CountUp
                                end={item.num}
                                duration={5}
                                delay={2}
                                suffix={item.suffix}
                                className="text-4xl xl:text-6xl font-extrabold"
                            />
                            {/* max-w-[100px] causes the label to wrap into 2 short lines next to the number */}
                            <p className="max-w-[100px] leading-snug text-white/80">
                                {item.text}
                            </p>
                        </div>
                    )
                })}
            </div>
        </div>
    </section>
  )
}

export default Stats
