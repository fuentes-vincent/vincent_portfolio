"use client"

import CountUp from "react-countup"

const stats = [
    {
        nume: 3,
        text: "Years of experience",
    },
    {
        nume: 3,
        text: "Projects",
    },
    {
        nume: 200,
        text: "Number of commits",
    },
]

const Stats = () => {
  return (
    <section>
        <div className="container mx-auto">
            <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none">
                {stats.map((item, index)=> {
                    return (
                        <div className="flex-1 flex gap-4 items-center justify-center xl:justify-start"
                        key={index}>
                            <CountUp
                                end={item.nume}
                                duration={5}
                                delay={2}
                                className="text-4xl xl:text-6xl font-extrabold"
                            />
                        </div>
                    )
                })}
            </div>
        </div>
     </section>
  )
}

export default Stats