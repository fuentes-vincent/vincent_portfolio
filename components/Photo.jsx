"use client"

import { motion } from "framer-motion"

// Dim code symbols that drift upward in the background
const codeSnippets = [
  { text: "</>",   top: "6%",  left: "10%",  delay: 0,   dur: 4   },
  { text: "{ }",   top: "14%", left: "74%",  delay: 0.6, dur: 3.5 },
  { text: "=>",    top: "68%", left: "4%",   delay: 1.2, dur: 4.5 },
  { text: "[ ]",   top: "75%", left: "82%",  delay: 0.3, dur: 3.8 },
  { text: "async", top: "84%", left: "22%",  delay: 0.9, dur: 4.2 },
  { text: "const", top: "10%", left: "42%",  delay: 1.5, dur: 3.6 },
  { text: "( )",   top: "46%", left: "88%",  delay: 0.4, dur: 4   },
  { text: "&&",    top: "80%", left: "60%",  delay: 1.1, dur: 3.7 },
  { text: "===",   top: "36%", left: "2%",   delay: 0.7, dur: 4.3 },
  { text: "null",  top: "56%", left: "78%",  delay: 1.8, dur: 3.9 },
  { text: "fn()",  top: "22%", left: "86%",  delay: 0.2, dur: 4.1 },
  { text: "//",    top: "90%", left: "48%",  delay: 1.4, dur: 3.5 },
]

const Photo = () => {
  return (
    <div className="relative w-[300px] h-[300px] xl:w-[506px] xl:h-[506px] flex items-center justify-center">

      {/* ── Floating code symbols ── */}
      {codeSnippets.map((s, i) => (
        <motion.span
          key={i}
          className="absolute font-primary text-accent select-none pointer-events-none"
          style={{ top: s.top, left: s.left }}
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.28, 0], y: [6, -12, 6] }}
          transition={{ duration: s.dur, delay: s.delay, repeat: Infinity, ease: "easeInOut" }}
        >
          <span className="text-[11px] xl:text-[13px] font-bold">{s.text}</span>
        </motion.span>
      ))}

      {/* ── RING 1: Outer full circle — slow clockwise ── */}
      <motion.div
        className="absolute inset-0"
        animate={{ rotate: 360 }}
        transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
      >
        <svg viewBox="0 0 506 506" className="w-full h-full" fill="none">
          <circle cx="253" cy="253" r="225"
            stroke="#00ff99" strokeWidth="1" strokeOpacity="0.15"
            strokeDasharray="6 18" />
          <circle cx="253" cy="28"  r="5.5" fill="#00ff99" fillOpacity="0.85" />
          <circle cx="253" cy="478" r="3"   fill="#00ff99" fillOpacity="0.4"  />
          <circle cx="478" cy="253" r="3.5" fill="#00ff99" fillOpacity="0.5"  />
        </svg>
      </motion.div>

      {/*
        ── RING 2: Horizontal ellipse — counter-clockwise ──
        Simulates a circle tilted ~65° on the X-axis (like Saturn's rings viewed from the side).
        rx=175 ry=74 gives the correct foreshortening for that tilt angle.
      */}
      <motion.div
        className="absolute inset-0"
        animate={{ rotate: -360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        <svg viewBox="0 0 506 506" className="w-full h-full" fill="none">
          <ellipse cx="253" cy="253" rx="175" ry="74"
            stroke="#00ff99" strokeWidth="1.5" strokeOpacity="0.26"
            strokeDasharray="22 10" />
          <circle cx="78"  cy="253" r="7"   fill="#00ff99" fillOpacity="1"    />
          <circle cx="428" cy="253" r="4"   fill="#00ff99" fillOpacity="0.5"  />
        </svg>
      </motion.div>

      {/*
        ── RING 3: Vertical ellipse — faster clockwise ──
        Simulates a circle tilted ~65° on the Y-axis (orbit going up-down).
        rx=74 ry=175 is the complement of Ring 2.
      */}
      <motion.div
        className="absolute inset-0"
        animate={{ rotate: 360 }}
        transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
      >
        <svg viewBox="0 0 506 506" className="w-full h-full" fill="none">
          <ellipse cx="253" cy="253" rx="74" ry="175"
            stroke="#00ff99" strokeWidth="2" strokeOpacity="0.30"
            strokeDasharray="30 8" />
          <circle cx="253" cy="78"  r="7"   fill="#00ff99" fillOpacity="1"    />
          <circle cx="253" cy="428" r="4.5" fill="#00ff99" fillOpacity="0.6"  />
        </svg>
      </motion.div>

      {/* ── Outer glow pulse ── */}
      <motion.div
        className="absolute rounded-full pointer-events-none"
        style={{
          width: 190, height: 190,
          background: "radial-gradient(circle, rgba(0,255,153,0.1) 0%, transparent 70%)",
        }}
        animate={{ scale: [1, 1.7, 1], opacity: [0.55, 0, 0.55] }}
        transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* ── Inner glow pulse ── */}
      <motion.div
        className="absolute rounded-full pointer-events-none"
        style={{
          width: 120, height: 120,
          background: "radial-gradient(circle, rgba(0,255,153,0.18) 0%, transparent 70%)",
        }}
        animate={{ scale: [1, 1.35, 1], opacity: [0.8, 0.1, 0.8] }}
        transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
      />

      {/* ── Core orb ── */}
      <motion.div
        className="relative z-10 rounded-full flex items-center justify-center"
        style={{
          width: 100, height: 100,
          background:
            "radial-gradient(circle at 30% 30%, rgba(0,255,153,0.35) 0%, rgba(0,255,153,0.06) 65%, transparent)",
          border: "1.5px solid rgba(0,255,153,0.5)",
        }}
        animate={{
          boxShadow: [
            "0 0 16px 4px rgba(0,255,153,0.28), inset 0 0 10px rgba(0,255,153,0.08)",
            "0 0 55px 20px rgba(0,255,153,0.58), inset 0 0 35px rgba(0,255,153,0.28)",
            "0 0 16px 4px rgba(0,255,153,0.28), inset 0 0 10px rgba(0,255,153,0.08)",
          ],
        }}
        transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
      >
        <span className="text-accent text-2xl xl:text-3xl font-bold select-none tracking-tight">
          {"</>"}
        </span>
      </motion.div>

    </div>
  )
}

export default Photo
