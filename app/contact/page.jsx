"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

// Contact info shown on the left column
const info = [
    {
        icon: <FaPhoneAlt />,
        title: "Phone",
        description: "09666581923",
    },
    {
        icon: <FaEnvelope />,
        title: "Email",
        description: "fuentes.vincent96@gmail.com",
    },
    {
        icon: <FaMapMarkerAlt />,
        title: "Location",
        description: "Cebu, Philippines",
    },
]

// ─── COMPONENT ───────────────────────────────────────────────────────────────

const Contact = () => {
    // Controlled form state — keeps all input values in one object
    const [form, setForm] = useState({
        firstname: "",
        lastname: "",
        email: "",
        phone: "",
        service: "",
        message: "",
    })

    // errors tracks which fields failed client-side validation
    const [errors, setErrors] = useState({})

    // submitted true shows the success message instead of the form
    const [submitted, setSubmitted] = useState(false)

    // Generic change handler works for all text inputs
    const handleChange = (e) => {
        const { name, value } = e.target
        setForm((prev) => ({ ...prev, [name]: value }))
        // Clear the error for this field as soon as the user starts typing
        if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }))
    }

    // Select uses a different API from Radix — value is passed directly, not via event
    const handleServiceChange = (value) => {
        setForm((prev) => ({ ...prev, service: value }))
        if (errors.service) setErrors((prev) => ({ ...prev, service: "" }))
    }

    // Basic required-field validation before "sending"
    const validate = () => {
        const next = {}
        if (!form.firstname.trim()) next.firstname = "First name is required"
        if (!form.lastname.trim())  next.lastname  = "Last name is required"
        if (!form.email.trim())     next.email     = "Email is required"
        else if (!/\S+@\S+\.\S+/.test(form.email)) next.email = "Enter a valid email"
        if (!form.message.trim())   next.message   = "Message cannot be empty"
        return next
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const found = validate()
        if (Object.keys(found).length > 0) {
            setErrors(found)
            return
        }
        // No backend — just show a success state
        setSubmitted(true)
    }

    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 0.4, duration: 0.4, ease: "easeIn" } }}
            className="py-6"
        >
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row gap-[30px]">

                    {/* ── Left column: form ── */}
                    <div className="xl:w-[54%] order-2 xl:order-none">
                        <h3 className="text-4xl font-bold text-accent mb-2">Let&apos;s work together</h3>
                        <p className="text-white/60 mb-8">
                            Have a project in mind? Fill out the form and I&apos;ll get back to you within 24 hours.
                        </p>

                        {submitted ? (
                            // Success state — shown after a valid submit
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="flex flex-col items-center justify-center gap-4 py-20 text-center"
                            >
                                <div className="text-6xl">✅</div>
                                <h4 className="text-2xl font-bold text-accent">Message sent!</h4>
                                <p className="text-white/60 max-w-[360px]">
                                    Thanks for reaching out, {form.firstname}. I&apos;ll reply to{" "}
                                    <span className="text-white">{form.email}</span> as soon as possible.
                                </p>
                                <Button
                                    variant="outline"
                                    onClick={() => { setSubmitted(false); setForm({ firstname:"",lastname:"",email:"",phone:"",service:"",message:"" }) }}
                                >
                                    Send another message
                                </Button>
                            </motion.div>
                        ) : (
                            <form onSubmit={handleSubmit} className="flex flex-col gap-6" noValidate>
                                {/* Name row */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <FieldWrapper error={errors.firstname}>
                                        <Input
                                            name="firstname"
                                            placeholder="First name"
                                            value={form.firstname}
                                            onChange={handleChange}
                                            className={fieldClass(errors.firstname)}
                                        />
                                    </FieldWrapper>
                                    <FieldWrapper error={errors.lastname}>
                                        <Input
                                            name="lastname"
                                            placeholder="Last name"
                                            value={form.lastname}
                                            onChange={handleChange}
                                            className={fieldClass(errors.lastname)}
                                        />
                                    </FieldWrapper>
                                </div>

                                {/* Email + phone row */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <FieldWrapper error={errors.email}>
                                        <Input
                                            type="email"
                                            name="email"
                                            placeholder="Email address"
                                            value={form.email}
                                            onChange={handleChange}
                                            className={fieldClass(errors.email)}
                                        />
                                    </FieldWrapper>
                                    <Input
                                        type="tel"
                                        name="phone"
                                        placeholder="Phone number (optional)"
                                        value={form.phone}
                                        onChange={handleChange}
                                        className={fieldClass()}
                                    />
                                </div>

                                {/* Service dropdown — Radix Select */}
                                <Select onValueChange={handleServiceChange}>
                                    <SelectTrigger className={fieldClass(errors.service)}>
                                        <SelectValue placeholder="Select a service" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectGroup>
                                            <SelectLabel>Services</SelectLabel>
                                            <SelectItem value="web-development">Web Development</SelectItem>
                                            <SelectItem value="frontend">Frontend Development</SelectItem>
                                            <SelectItem value="backend">Backend / API Development</SelectItem>
                                            <SelectItem value="ui-ux">UI/UX Design</SelectItem>
                                        </SelectGroup>
                                    </SelectContent>
                                </Select>
                                {errors.service && <p className="text-red-400 text-sm -mt-4">{errors.service}</p>}

                                {/* Message */}
                                <FieldWrapper error={errors.message}>
                                    <Textarea
                                        name="message"
                                        placeholder="Type your message here…"
                                        rows={6}
                                        value={form.message}
                                        onChange={handleChange}
                                        className={fieldClass(errors.message) + " min-h-[200px]"}
                                    />
                                </FieldWrapper>

                                <Button size="md" className="max-w-40">
                                    Send message
                                </Button>
                            </form>
                        )}
                    </div>

                    {/* ── Right column: contact info ── */}
                    <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
                        <ul className="flex flex-col gap-10">
                            {info.map((item, i) => (
                                <li key={i} className="flex items-center gap-6">
                                    {/* Accent-colored icon circle */}
                                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                                        <div className="text-[28px]">{item.icon}</div>
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-white/60">{item.title}</p>
                                        <h3 className="text-xl">{item.description}</h3>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </motion.section>
    )
}

// ─── HELPERS ─────────────────────────────────────────────────────────────────

// Wraps an input and shows its error message below it
const FieldWrapper = ({ children, error }) => (
    <div className="flex flex-col gap-1">
        {children}
        {error && <p className="text-red-400 text-sm">{error}</p>}
    </div>
)

// Base input/textarea class; adds red border when there's a validation error
const fieldClass = (error) =>
    `bg-primary border-white/10 focus:border-accent placeholder:text-white/30 text-white${
        error ? " border-red-400" : ""
    }`

export default Contact
