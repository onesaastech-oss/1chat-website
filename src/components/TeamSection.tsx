"use client";
import { motion } from "motion/react";
import { Globe, Linkedin, Twitter } from "lucide-react";

export const TeamSection = () => {
    return (
        <section
            id="team"
            className="relative py-32 bg-white overflow-hidden"
        >
            {/* Interactive/Animated Background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {/* <AnimatedBackground /> */}
            </div>

            <div className="mx-auto max-w-7xl px-6 relative z-10">
                <div className="mb-24 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-6">
                            Meet The <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600">Visionaries</span>
                        </h2>
                        <p className="text-slate-500 font-medium text-lg max-w-2xl mx-auto leading-relaxed">
                            The minds behind 1Chat & OneSaaS, dedicated to revolutionizing customer communication with cutting-edge technology.
                        </p>
                    </motion.div>
                </div>

                <div className="flex flex-wrap justify-center -mt-12 gap-16 lg:gap-24">
                    <TeamCard
                        name="Mubarak Ali"
                        role="Founder & CEO"
                        image="/mubarak.png"
                        initials="MA"
                        delay={0.1}
                    />
                    <TeamCard
                        name="Sourav Kr Adhikary"
                        role="Lead Developer"
                        image="/sourav.png"
                        initials="SA"
                        delay={0.2}
                    />
                </div>
            </div>
        </section>
    );
};



const TeamCard = ({ name, role, image, initials, delay }: any) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay, type: "spring", bounce: 0.3 }}
            className="group relative w-full max-w-sm"
        >
            {/* Card Background with Glassmorphism */}
            {/* <div className="absolute inset-0 bg-gradient-to-br from-white to-slate-50 rounded-[2.5rem] shadow-2xl shadow-slate-200/50 transform transition-transform duration-500 group-hover:scale-[1.02] group-hover:rotate-1"></div> */}

            {/* Border/Shine effect */}
            {/* <div className="absolute inset-px rounded-[2.5rem] bg-white opacity-90 z-10 transition-colors group-hover:bg-slate-50/50"></div> */}

            <div className="relative z-20 p-10 flex flex-col items-center text-center">

                {/* Image Container with animated border */}
                <div className="relative mb-8 group-hover:-translate-y-2 transition-transform duration-500 ease-out">
                    {/* <div className="absolute -inset-4 bg-gradient-to-tr from-green-500 to-emerald-400 rounded-full opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500"></div> */}
                    <div className="w-48 h-48 rounded-full p-1.5 bg-gradient-to-br from-green-100 to-emerald-200 group-hover:from-green-400 group-hover:to-emerald-500 transition-colors duration-500 shadow-xl shadow-green-900/5">
                        <div className="w-full h-full rounded-full overflow-hidden bg-white flex items-center justify-center relative shadow-inner">
                            {/* Fallback Initials */}
                            <span className="text-4xl font-black text-slate-300 absolute z-0">{initials}</span>

                            {/* Image */}
                            <img
                                src={image}
                                alt={name}
                                className="w-full h-full object-cover relative z-10 transition-transform duration-700 ease-in-out group-hover:scale-110"
                                onError={(e) => {
                                    (e.target as HTMLImageElement).style.display = 'none';
                                }}
                            />
                        </div>
                    </div>
                </div>

                <h3 className="text-2xl font-black text-slate-900 mb-2 group-hover:text-green-700 transition-colors">{name}</h3>
                <p className="text-green-600 font-bold uppercase tracking-widest text-xs mb-8 bg-green-50 px-4 py-1.5 rounded-full">{role}</p>

                {/* Modern Social Icons */}
                <div className="flex gap-5">
                    {[Linkedin, Twitter, Globe].map((Icon, i) => (
                        <a key={i} href="#" className="p-3 rounded-2xl bg-slate-100 text-slate-400 hover:bg-green-500 hover:text-white hover:-translate-y-1 hover:shadow-lg hover:shadow-green-500/30 transition-all duration-300">
                            <Icon size={18} strokeWidth={2.5} />
                        </a>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};
