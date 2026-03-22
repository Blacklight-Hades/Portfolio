/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Mail, Phone, MapPin, Github, ExternalLink, GraduationCap, Code2, Briefcase, Award, User } from 'lucide-react';
import { motion } from 'motion/react';

export default function App() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 font-sans selection:bg-red-900/30">
      {/* Print & Action Buttons - Hidden on screen */}
      <div className="fixed top-4 right-4 print:hidden z-50 flex gap-2">
        <button 
          onClick={() => window.open(window.location.href, '_blank')}
          className="bg-zinc-900 text-white px-4 py-2 rounded-sm text-sm font-bold hover:bg-zinc-800 transition-all flex items-center gap-2 shadow-lg border border-zinc-800 uppercase tracking-tighter"
        >
          <ExternalLink className="w-4 h-4 text-red-600" /> Full Screen
        </button>
        <button 
          onClick={() => window.print()}
          className="bg-red-600 text-white px-4 py-2 rounded-sm text-sm font-bold hover:bg-red-700 transition-all flex items-center gap-2 shadow-[0_0_15px_rgba(220,38,38,0.2)] border border-red-500/50 uppercase tracking-tighter"
        >
          Print PDF
        </button>
      </div>

      <main className="max-w-4xl mx-auto px-6 py-12 md:py-20 relative">
        {/* Redline Accents */}
        <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-red-600 via-transparent to-red-600 opacity-20 hidden md:block" />
        
        {/* Header Section */}
        <header className="mb-12 border-b border-zinc-800 pb-8 relative">
          <div className="absolute -bottom-px left-0 w-24 h-[2px] bg-red-600 shadow-[0_0_10px_rgba(220,38,38,0.5)]" />
          <motion.h1 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-4xl md:text-6xl font-black tracking-tighter text-white mb-4 uppercase italic"
          >
            PRAYUSH PANTA
          </motion.h1>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap gap-y-2 gap-x-6 text-zinc-400 text-sm md:text-base font-medium"
          >
            <span className="flex items-center gap-1.5 hover:text-red-500 transition-colors cursor-default">
              <MapPin className="w-4 h-4 text-red-600" /> Carrollton, TX
            </span>
            <span className="flex items-center gap-1.5 hover:text-red-500 transition-colors cursor-default">
              <Phone className="w-4 h-4 text-red-600" /> (469) 354-9962
            </span>
            <a href="mailto:prayushpanta@my.unt.edu" className="flex items-center gap-1.5 hover:text-red-500 transition-colors">
              <Mail className="w-4 h-4 text-red-600" /> prayushpanta@my.unt.edu
            </a>
            <a href="https://github.com/Blacklight-Hades" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-red-500 transition-colors group">
              <Github className="w-4 h-4 text-red-600" /> github.com/Blacklight-Hades
              <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
          </motion.div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Left Column - Sidebar Info */}
          <div className="md:col-span-1 space-y-10">
            {/* Objective */}
            <motion.section {...fadeIn}>
              <h2 className="text-xs font-black uppercase tracking-[0.2em] text-red-600 mb-4 flex items-center gap-2">
                <User className="w-4 h-4" /> Objective
              </h2>
              <p className="text-zinc-400 leading-relaxed text-sm font-medium border-l-2 border-zinc-800 pl-4">
                Computer Science junior seeking a software engineering internship to apply C++ and Java skills, contribute to team-based development, and gain real-world experience.
              </p>
            </motion.section>

            {/* Education */}
            <motion.section {...fadeIn}>
              <h2 className="text-xs font-black uppercase tracking-[0.2em] text-red-600 mb-4 flex items-center gap-2">
                <GraduationCap className="w-4 h-4" /> Education
              </h2>
              <div className="bg-zinc-900/50 p-4 rounded border border-zinc-800 hover:border-red-600/30 transition-colors">
                <h3 className="font-bold text-white">University of North Texas</h3>
                <p className="text-zinc-500 text-sm italic">Denton, TX</p>
                <p className="text-zinc-300 text-sm mt-1">B.S. in Computer Science</p>
                <p className="text-red-600 text-xs font-black mt-1 uppercase tracking-widest">Junior</p>
              </div>
            </motion.section>

            {/* Skills */}
            <motion.section {...fadeIn}>
              <h2 className="text-xs font-black uppercase tracking-[0.2em] text-red-600 mb-4 flex items-center gap-2">
                <Code2 className="w-4 h-4" /> Technical Skills
              </h2>
              <div className="space-y-4">
                {[
                  { label: 'Languages', value: 'C++, Java, C, x86 Assembly, Bash' },
                  { label: 'Technologies', value: 'Unreal Engine, File I/O, Struct-Based Design' },
                  { label: 'Concepts', value: 'OOP, Systems Programming, Debugging, Testing' },
                  { label: 'Tools', value: 'Git, Linux, SSH' },
                  { label: 'Software', value: 'Adobe Illustrator, Premiere Pro, Blender' }
                ].map((skill) => (
                  <div key={skill.label} className="group">
                    <h4 className="text-[10px] font-black text-zinc-500 uppercase mb-1 tracking-tighter group-hover:text-red-500 transition-colors">{skill.label}</h4>
                    <p className="text-zinc-300 text-sm font-medium">{skill.value}</p>
                  </div>
                ))}
              </div>
            </motion.section>

            {/* Strengths */}
            <motion.section {...fadeIn}>
              <h2 className="text-xs font-black uppercase tracking-[0.2em] text-red-600 mb-4 flex items-center gap-2">
                <Award className="w-4 h-4" /> Strengths
              </h2>
              <div className="flex flex-wrap gap-2">
                {['Team Collaboration', 'Fast Learner', 'Debugging', 'Modular Design', 'Data Processing', 'Problem Solving'].map((strength) => (
                  <span key={strength} className="px-2 py-1 bg-zinc-900 text-zinc-400 border border-zinc-800 rounded-sm text-[10px] font-black uppercase tracking-tighter hover:border-red-600/50 hover:text-white transition-all">
                    {strength}
                  </span>
                ))}
              </div>
            </motion.section>
          </div>

          {/* Right Column - Projects */}
          <div className="md:col-span-2">
            <motion.section 
              variants={staggerContainer}
              initial="initial"
              animate="animate"
              className="space-y-10"
            >
              <h2 className="text-xs font-black uppercase tracking-[0.2em] text-red-600 mb-6 flex items-center gap-2">
                <Briefcase className="w-4 h-4" /> Featured Projects
              </h2>

              {/* Project 1 */}
              <motion.div variants={fadeIn} className="group relative pl-6 border-l border-zinc-800 hover:border-red-600 transition-colors">
                <div className="absolute top-0 left-[-4px] w-2 h-2 bg-red-600 rounded-full shadow-[0_0_8px_rgba(220,38,38,0.8)]" />
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-black text-white group-hover:text-red-500 transition-colors uppercase italic tracking-tighter">
                    Space-Themed Offline Casino Game
                  </h3>
                  <span className="text-[10px] font-black px-2 py-0.5 bg-red-600/10 text-red-500 border border-red-500/20 rounded-sm uppercase tracking-widest">C++</span>
                </div>
                <p className="text-zinc-500 text-xs mb-3 font-bold uppercase tracking-wider">CSCE 3444 Software Engineering | Team Project</p>
                <ul className="space-y-2 text-zinc-400 text-sm leading-relaxed font-medium">
                  <li className="flex gap-2"><span className="text-red-600">»</span> Collaborated on a team-built offline casino featuring <span className="text-zinc-200">Roulette, Blackjack, and Space-themed Slots</span>.</li>
                  <li className="flex gap-2"><span className="text-red-600">»</span> Designed and implemented the end-game and in-session statistics tracking system.</li>
                  <li className="flex gap-2"><span className="text-red-600">»</span> Processed game results using <span className="text-zinc-200 font-bold">structs</span> passed between modules and aggregated multi-game data.</li>
                  <li className="flex gap-2"><span className="text-red-600">»</span> Tracked metrics including total winnings, win percentage, net profit/loss, and peak balance.</li>
                </ul>
              </motion.div>

              {/* Project 2 */}
              <motion.div variants={fadeIn} className="group relative pl-6 border-l border-zinc-800 hover:border-red-600 transition-colors">
                <div className="absolute top-0 left-[-4px] w-2 h-2 bg-red-600 rounded-full shadow-[0_0_8px_rgba(220,38,38,0.8)]" />
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-black text-white group-hover:text-red-500 transition-colors uppercase italic tracking-tighter">
                    Unreal Engine Game Project
                  </h3>
                  <span className="text-[10px] font-black px-2 py-0.5 bg-red-600/10 text-red-500 border border-red-500/20 rounded-sm uppercase tracking-widest">Unreal</span>
                </div>
                <p className="text-zinc-500 text-xs mb-3 font-bold uppercase tracking-wider">Team Project</p>
                <ul className="space-y-2 text-zinc-400 text-sm leading-relaxed font-medium">
                  <li className="flex gap-2"><span className="text-red-600">»</span> Collaborated in a group-based game development project using <span className="text-zinc-200">Unreal Engine Blueprint</span>.</li>
                  <li className="flex gap-2"><span className="text-red-600">»</span> Implemented event-driven gameplay mechanics and interactive elements within a modular architecture.</li>
                </ul>
              </motion.div>

              {/* Project 3 */}
              <motion.div variants={fadeIn} className="group relative pl-6 border-l border-zinc-800 hover:border-red-600 transition-colors">
                <div className="absolute top-0 left-[-4px] w-2 h-2 bg-red-600 rounded-full shadow-[0_0_8px_rgba(220,38,38,0.8)]" />
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-black text-white group-hover:text-red-500 transition-colors uppercase italic tracking-tighter">
                    Salesperson Management System
                  </h3>
                  <span className="text-[10px] font-black px-2 py-0.5 bg-red-600/10 text-red-500 border border-red-500/20 rounded-sm uppercase tracking-widest">Java</span>
                </div>
                <ul className="space-y-2 text-zinc-400 text-sm leading-relaxed font-medium">
                  <li className="flex gap-2"><span className="text-red-600">»</span> Developed a Salesperson class and multiple application modules for sorting and data management.</li>
                  <li className="flex gap-2"><span className="text-red-600">»</span> Applied <span className="text-zinc-200 font-bold">OOP principles</span> including encapsulation and structured data management.</li>
                </ul>
              </motion.div>

              {/* Project 4 */}
              <motion.div variants={fadeIn} className="group relative pl-6 border-l border-zinc-800 hover:border-red-600 transition-colors">
                <div className="absolute top-0 left-[-4px] w-2 h-2 bg-red-600 rounded-full shadow-[0_0_8px_rgba(220,38,38,0.8)]" />
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-black text-white group-hover:text-red-500 transition-colors uppercase italic tracking-tighter">
                    C++ Data Structures and Logic
                  </h3>
                  <span className="text-[10px] font-black px-2 py-0.5 bg-red-600/10 text-red-500 border border-red-500/20 rounded-sm uppercase tracking-widest">C++</span>
                </div>
                <ul className="space-y-2 text-zinc-400 text-sm leading-relaxed font-medium">
                  <li className="flex gap-2"><span className="text-red-600">»</span> Built a BMI calculator using <span className="text-zinc-200 font-bold">structs</span> and implemented a closest 3D point finder using arrays of structures.</li>
                </ul>
              </motion.div>
            </motion.section>
          </div>
        </div>

        {/* Footer / Contact CTA */}
        <footer className="mt-20 pt-8 border-t border-zinc-800 text-center relative">
          <div className="absolute top-[-1px] left-1/2 -translate-x-1/2 w-32 h-[2px] bg-red-600 shadow-[0_0_10px_rgba(220,38,38,0.5)]" />
          <p className="text-zinc-500 text-[10px] font-black uppercase tracking-[0.3em] mb-6">Transmission Complete // Connect</p>
          <div className="flex justify-center gap-6">
            <a href="mailto:prayushpanta@my.unt.edu" className="p-3 bg-zinc-900 border border-zinc-800 text-red-600 rounded-sm hover:bg-red-600 hover:text-white transition-all shadow-[0_0_15px_rgba(0,0,0,0.5)]">
              <Mail className="w-5 h-5" />
            </a>
            <a href="https://github.com/Blacklight-Hades" target="_blank" rel="noopener noreferrer" className="p-3 bg-zinc-900 border border-zinc-800 text-red-600 rounded-sm hover:bg-red-600 hover:text-white transition-all shadow-[0_0_15px_rgba(0,0,0,0.5)]">
              <Github className="w-5 h-5" />
            </a>
          </div>
        </footer>
      </main>
    </div>
  );
}
