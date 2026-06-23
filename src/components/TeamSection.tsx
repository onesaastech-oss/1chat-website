import { motion } from "motion/react";
import { Globe, Linkedin, Twitter } from "lucide-react";

type TeamSectionProps = {
    embedded?: boolean;
};

export const TeamSection = ({ embedded = false }: TeamSectionProps) => {
    return (
        <section
            id={embedded ? undefined : "team"}
            className={`relative bg-white overflow-hidden ${embedded ? "pb-16 pt-2" : "py-16"}`}
        >
            <div className="page-container relative z-10">
                {!embedded && (
                    <div className="mb-12 text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 12 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                        >
                            <h2 className="heading-2">Leadership</h2>
                            <p className="body-text mt-3 max-w-2xl mx-auto">
                                The minds behind OneChatting and OneSaaS, building reliable WhatsApp tools for modern businesses.
                            </p>
                        </motion.div>
                    </div>
                )}

                <div className="flex flex-wrap justify-center gap-10 lg:gap-16">
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

const TeamCard = ({ name, role, image, initials, delay }: {
    name: string;
    role: string;
    image: string;
    initials: string;
    delay: number;
}) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay }}
            className="card w-full max-w-xs text-center"
        >
            <div className="relative mx-auto mb-5 h-32 w-32 overflow-hidden rounded-full border-2 border-green-100 bg-slate-50">
                <span className="absolute inset-0 flex items-center justify-center text-2xl font-medium text-slate-300">{initials}</span>
                <img
                    src={image}
                    alt={name}
                    className="relative z-10 h-full w-full object-cover"
                    onError={(e) => {
                        (e.target as HTMLImageElement).style.display = "none";
                    }}
                />
            </div>

            <h3 className="text-lg font-medium text-slate-900">{name}</h3>
            <p className="mt-1 text-sm text-green-600">{role}</p>

            <div className="mt-5 flex justify-center gap-2">
                {[Linkedin, Twitter, Globe].map((Icon, i) => (
                    <a
                        key={i}
                        href="#"
                        className="rounded-lg border border-slate-200 p-2 text-slate-400 transition hover:border-green-200 hover:text-green-600"
                    >
                        <Icon size={16} />
                    </a>
                ))}
            </div>
        </motion.div>
    );
};
