/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  Mail, 
  Globe, 
  MapPin, 
  GraduationCap, 
  Award, 
  Calendar, 
  Quote,
  CheckCircle2,
  HeartPulse,
  Phone
} from "lucide-react";

// Line 20
// Line 21
// Line 22
// Line 23
// Line 24
// Line 25

export default function App() {
  const trainings = [
    "Suicide Assessment & Prevention: Evidence-Based Risk Management",
    "Compassion Fatigue & Secondary Trauma: Mitigating Burnout",
    "Professional Self-Care Retreat",
    "Grief, Loss & Bereavement: Clinical Approaches to Healing",
    "Nicotine Use Disorder & Dependence",
    "Clinical Ethics: Legal & Professional Practice",
    "12 Core Functions of Addiction Counseling",
    "Substance Use & Domestic Violence",
    "SUD Among Veterans",
    "SUD in Older Adults",
    "Evidence-Based Treatment (EBT) Practices",
    "Psychopathology & Co-Occurring Disorders",
    "Addictions Advocacy & Stigma-Free Communication"
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen flex flex-col items-center py-6 px-4 sm:px-6 bg-cream/30 print:p-0 print:bg-white"
    >
      <div className="w-full max-w-[8.5in] min-h-[11in] bg-white shadow-2xl border-t-[10px] border-navy relative flex flex-col print:shadow-none print:border-t-0 print:w-full print:h-full mx-auto">
        {/* Gold Band */}
        <div className="h-1 bg-gold w-full" />
        <section className="flex flex-col items-center bg-navy relative overflow-hidden py-10 px-8 md:px-20">
          {/* Decorative Elements */}
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
            <div className="absolute top-5 left-5 w-48 h-48 border-2 border-gold rounded-full -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-5 right-5 w-72 h-72 border-2 border-gold rounded-full translate-x-1/2 translate-y-1/2" />
          </div>
          
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="relative w-48 h-48 md:w-56 md:h-56 mb-6 z-10"
          >
            <div className="absolute inset-0 border-4 border-gold rounded-full -m-2 animate-pulse-slow" />
            <div className="w-full h-full rounded-full overflow-hidden border-4 border-white shadow-2xl">


              <img src="/profile.jpg" alt="Profile" className="w-full h-full object-cover object-top contrast-[1.05] saturate-[0.9]" referrerPolicy="no-referrer" />
            </div>
            <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 bg-gold px-4 py-0.5 rounded-full shadow-lg">
              <p className="text-[9px] font-black tracking-[0.2em] uppercase text-navy whitespace-nowrap">Expert Clinician</p>
            </div>
          </motion.div>

          <div className="text-center z-10 max-w-3xl">
            <motion.p 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-xs font-bold tracking-[0.4em] uppercase text-gold mb-4"
            >
              Speaker &nbsp;·&nbsp; Trainer &nbsp;·&nbsp; Facilitator
            </motion.p>
            <motion.h1 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="font-serif text-4xl md:text-5xl font-black leading-tight text-white mb-4"
            >
              Dr. Andrea Garraway
            </motion.h1>
            <motion.p 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-sm md:text-base font-semibold tracking-widest text-gold-lt mb-6 leading-relaxed"
            >
              Ph.D. &nbsp;·&nbsp; CCS &nbsp;·&nbsp; ICAADC &nbsp;·&nbsp; ICCS &nbsp;·&nbsp; LCMHC-S &nbsp;·&nbsp; LCAS
            </motion.p>
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col items-center"
            >
              <div className="w-16 h-1 bg-gold mb-6" />
              <p className="font-serif italic text-lg md:text-xl text-white/90 leading-relaxed max-w-2xl">
                "Born for this work — shaped by the realities of human suffering, committed to transforming how we respond to it."
              </p>
            </motion.div>
          </div>
        </section>

        {/* STORY BAND - Centered */}
        <section className="bg-gold px-8 md:px-20 py-6 text-center">
          <div className="max-w-4xl mx-auto flex flex-col items-center gap-4">
            <div className="w-10 h-10 bg-navy rounded-full flex items-center justify-center text-gold shadow-lg">
              <Globe size={20} />
            </div>
            <p className="font-serif italic text-base md:text-lg leading-relaxed font-bold text-navy">
              Raised in Guyana — one of the countries with the world's highest rates of completed suicide — Dr. Garraway's work is not academic. It is personal. It is purposeful. It has always been necessary.
            </p>
          </div>
        </section>

        {/* MAIN CONTENT GRID - Balanced Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] flex-1">
          
          {/* LEFT COLUMN: BIO */}
          <main className="p-8 md:p-10 lg:border-r border-navy/10">
            <div className="mb-8">
              <p className="text-[10px] font-bold tracking-[0.4em] uppercase text-gold mb-3">The Clinician</p>
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-navy mb-6 leading-tight">
                Clinician. Supervisor. Nationally Recognized Speaker.
              </h2>
              <div className="space-y-6 text-sm md:text-base leading-relaxed text-muted">
                <p>
                  Dr. Garraway is a licensed clinician and clinical supervisor with <span className="text-navy font-bold underline decoration-gold decoration-4 underline-offset-4">over 20 years of experience</span> in behavioral health, specializing in suicide prevention, grief counseling, and substance use disorders. She has worked extensively across clinical, supervisory, and training settings — witnessing firsthand how fragmented systems hinder recovery.
                </p>
                <p>
                  As an advocate for <span className="text-navy font-bold">integrated, client-centered care</span>, Dr. Garraway delivers dynamic, practical presentations that bridge research and real-world application — equipping professionals with tools they can implement immediately. Her presentations meet clinicians where they are and move them forward.
                </p>
              </div>
            </div>

            {/* Philosophy Block */}
            <div className="bg-navy rounded-lg p-8 relative overflow-hidden shadow-xl">
              <Quote className="absolute -top-4 -left-2 w-24 h-24 text-gold opacity-10 pointer-events-none" />
              <p className="text-[10px] font-bold tracking-[0.3em] uppercase text-gold mb-4 relative z-10">Core Philosophy</p>
              <p className="font-serif italic text-base md:text-lg leading-relaxed text-white/95 relative z-10">
                "Real change doesn't happen in isolation — it happens when we treat the whole person, not just the problem. When we break down silos and meet people where they are, we don't just support recovery… we create the conditions for lasting transformation."
              </p>
            </div>
          </main>

          {/* RIGHT COLUMN: TRAININGS & CONTACT */}
          <aside className="bg-navy/[0.02] p-8 md:p-10 flex flex-col">
            <div className="mb-8">
              <p className="text-[10px] font-bold tracking-[0.4em] uppercase text-gold mb-4">Training Catalogue</p>
              <ul className="space-y-3">
                {trainings.map((item, idx) => (
                  <li key={idx} className="flex gap-3 text-xs md:text-sm leading-snug text-muted border-b border-navy/5 pb-2 last:border-0">
                    <CheckCircle2 size={16} className="text-gold shrink-0 mt-0.5" />
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-navy rounded-lg p-4 text-center shadow-lg transform hover:scale-105 transition-transform">
                <div className="font-serif text-2xl md:text-3xl font-black text-gold leading-none">20+</div>
                <div className="text-[10px] font-bold tracking-widest uppercase text-white/70 mt-2">Years Exp.</div>
              </div>
              <div className="bg-navy rounded-lg p-4 text-center shadow-lg transform hover:scale-105 transition-transform">
                <div className="font-serif text-2xl md:text-3xl font-black text-gold leading-none">20+</div>
                <div className="text-[10px] font-bold tracking-widest uppercase text-white/70 mt-2">Topics</div>
              </div>
            </div>

            {/* Contact Block - Improved for no overflow */}
            <div className="bg-gold rounded-lg p-6 space-y-4 shadow-xl mt-auto">
              <p className="text-[10px] font-bold tracking-[0.3em] uppercase text-navy mb-1">Book Dr. Garraway</p>
              
              <div className="flex items-start gap-3 text-xs md:text-sm font-bold text-navy group">
                <Mail size={18} className="shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                <span className="break-all leading-tight">garraway@aol.com</span>
              </div>

              <div className="flex items-start gap-3 text-xs md:text-sm font-bold text-navy group">
                <Phone size={18} className="shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                <span className="leading-tight">704-831-0100</span>
              </div>
              
              <div className="flex items-start gap-3 text-xs md:text-sm font-bold text-navy group">
                <Globe size={18} className="shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                <span className="leading-tight">www.garrawaycounseling.com</span>
              </div>
              
              <div className="flex items-start gap-3 text-xs md:text-sm font-bold text-navy group">
                <MapPin size={18} className="shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                <span className="leading-tight">Available Nationally & Internationally</span>
              </div>
            </div>
          </aside>
        </div>

        {/* FOOTER */}
        <footer className="bg-navy px-8 md:px-20 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-serif italic text-sm text-white/80 text-center md:text-left max-w-xs">
            Available for conferences, clinical trainings, CE workshops & professional retreats.
          </p>
          <div className="text-right">
            <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-gold mb-1">
              Andrea Garraway Counseling, PLLC
            </p>
            <p className="text-[9px] text-white/40 uppercase tracking-widest">© 2024 All Rights Reserved</p>
          </div>
        </footer>
        <div className="h-1.5 bg-gold w-full" />
      </div>
    </motion.div>
  );
}
