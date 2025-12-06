import SectionTitle from "../common/SectionTitle";
import { motion } from "framer-motion";

import { FiCheckSquare, FiTarget, FiZap, FiCode } from 'react-icons/fi'; 


const experienceData = [
    {
        role: "AI Automation Engineer",
        company: "DeepVision.ai",
        location: "Lahore, Pakistan",
        period: "Sept 2025 - Present",
        details: [
            "Architecting and deploying AI automation workflows using n8n, LangChain, LLMs, and complex API integrations to enhance core business processes.",
            "Developing intelligent agents and conversational bots that significantly reduce manual workload and improve operational efficiency."
        ],
        tech: ["n8n", "LangChain", "LLMs", "API Integrations", "Docker", "Python"]
    },
    {
        role: "LLM/Automation Project Implementation",
        company: "Self-Initiated Projects",
        location: "Virtual",
        period: "Oct - Nov 2025",
        details: [
            "Engineered an LLM-driven WhatsApp Bot for automated customer engagement, utilizing LangChain for workflow management and dynamic message generation.",
            "Integrated the WhatsApp Cloud API for message broadcasting, campaign replies, and lead nurturing automation."
        ],
        tech: ["LangChain", "LLMs", "WhatsApp Cloud API", "n8n"]
    },
    {
        role: "Research Publication",
        company: "AI & Blockchain Security",
        location: "Lahore, Pakistan (Research)",
        period: "Nov 2024",
        details: [
            "Authored and proposed a hybrid AI-Blockchain framework to secure low-power IoT devices in 5G networks.",
            "Designed a system focusing on anomaly detection, decentralized verification, and real-time threat identification."
        ],
        tech: ["AI", "Blockchain", "IoT", "5G", "Anomaly Detection"]
    },
];

const valuePropositions = [
    { 
        icon: FiZap, 
        title: "High-ROI Workflow Automation", 
        description: "I implement intelligent, n8n-powered platforms to automate core business logic, guaranteeing immediate reduction in operational costs and manual tasks." 
    },
    { 
        icon: FiTarget, 
        title: "Production-Ready LLM Agents", 
        description: "My focus is on building and deploying custom conversational agents and RAG systems using LangChain, ensuring reliable, domain-specific AI performance." 
    },
    { 
        icon: FiCode, 
        title: "Seamless API & System Integration", 
        description: "Skilled in connecting diverse systems (CRM, Google Calendar, WhatsApp Cloud API) via robust API integrations to create unified, functioning data pipelines." 
    },
    { 
        icon: FiCheckSquare, 
        title: "Scalable, Maintainable Systems", 
        description: "I prioritize using Docker and best practices to ensure all automation and AI solutions are scalable, fully documented, and easy to maintain." 
    },
];

const ACCENT_CLASSES = {
    'text-cyan-500': 'text-cyan-500',
    'bg-pink-600': 'bg-pink-600', 
    'hover:bg-pink-700': 'hover:bg-pink-700',
    'text-pink-600': 'text-pink-600',
    'bg-cyan-500/10': 'bg-cyan-500/10' 
};

export default function Experience() {
    const experience = experienceData; 

    return (

        <section id="experience" className="py-24 bg-gray-950 text-white">
            <div className="container mx-auto px-6">
                
                {/* 1. Main Section Title (UPDATED: High Impact) */}
                <div className="mb-16 text-center">
                    <SectionTitle 
                        title={<>My AI Automation <span className={ACCENT_CLASSES['text-cyan-500']}>Impact & Expertise</span></>}
                        subtitle="A comprehensive timeline showcasing key achievements and the core value I deliver through intelligent automation."
                        className="text-white"
                    />
                </div>

                {/* --- Two-Column Layout Container --- */}
                <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                    
                    {/* LEFT COLUMN: Why Choose Me (Value Proposition) */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true, amount: 0.3 }}
                    >
                        {/* 2. Left Column Title (UPDATED: Bigger and more Attractive) */}
                        <h2 className={`text-4xl lg:text-5xl font-extrabold mb-8 ${ACCENT_CLASSES['text-pink-600']} leading-tight`}>
                            The <span className="text-white">Value-Driven</span> AI Partner
                        </h2>
                        
                        <p className="text-gray-300 text-lg mb-8 border-b border-gray-700 pb-6">
                            I specialize in end-to-end AI automation and LLM agent development, ensuring your workflows are not just automated, but intelligent, scalable, and highly efficient.
                        </p>

                        {/* Value Propositions List */}
                        <div className="space-y-6 mb-12">
                            {valuePropositions.map((prop, i) => (
                                <div key={i} className="flex items-start p-4 bg-gray-800 rounded-lg shadow-lg border-l-4 border-cyan-500">
                                    <prop.icon className={`w-6 h-6 mr-4 flex-shrink-0 ${ACCENT_CLASSES['text-cyan-500']}`} />
                                    <div>
                                        <h3 className="text-xl font-bold text-white mb-1">{prop.title}</h3>
                                        <p className="text-gray-400 text-base">{prop.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        
                    </motion.div>

                    {/* RIGHT COLUMN: Professional Journey (Experience Timeline) */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true, amount: 0.3 }}
                    >
                        {/* 3. Right Column Title (UPDATED: Bigger and more Attractive) */}
                        <h2 className={`text-4xl lg:text-5xl font-extrabold mb-8 ${ACCENT_CLASSES['text-cyan-500']} leading-tight`}>
                            Timeline of <span className="text-white">Technical Achievements</span>
                        </h2>
                        
                        {/* Scrollable container for a long list */}
                        <div className="space-y-8 max-h-[700px] overflow-y-auto pr-4 custom-scrollbar">
                            {experience.map((exp, i) => (
                                <div 
                                    key={i}
                                    className="relative p-6 bg-gray-800/80 border border-gray-700/50 shadow-xl rounded-xl transition-all duration-300 hover:border-pink-600/50 group"
                                >
                                    {/* Vertical Timeline Marker (Pink) */}
                                    <div className={`absolute top-0 left-0 -translate-x-1/2 w-4 h-4 rounded-full ${ACCENT_CLASSES['bg-pink-600']} ring-8 ring-gray-950/80 hidden lg:block`}></div>

                                    {/* Role and Period */}
                                    <div className="flex justify-between items-start flex-wrap mb-1">
                                        <h3 className="font-extrabold text-xl text-white">
                                            {exp.role}
                                        </h3>
                                        <p className={`text-sm font-medium ${ACCENT_CLASSES['text-pink-600']} ${ACCENT_CLASSES['bg-pink-600']}/10 px-3 py-1 rounded-full`}>{exp.period}</p>
                                    </div>
                                    
                                    {/* Company and Location */}
                                    <p className="text-lg font-semibold text-gray-400 mb-3">
                                        {exp.company}
                                        <span className="text-sm font-normal text-gray-500"> — {exp.location}</span>
                                    </p>

                                    {/* Details/Achievements List */}
                                    <ul className="mt-4 list-disc ml-6 space-y-2 text-gray-300">
                                        {exp.details.map((d, idx) => (
                                            <li key={idx} className="text-base">{d}</li>
                                        ))}
                                    </ul>

                                    {/* Tech Stack */}
                                    <div className="mt-5 pt-4 border-t border-gray-700/50 flex flex-wrap items-center gap-2">
                                        <span className={`text-sm font-bold ${ACCENT_CLASSES['text-cyan-500']} mr-2`}>Tech Stack:</span>
                                        {exp.tech.map((t, idx) => (
                                            <span 
                                                key={idx} 
                                                className="text-xs px-3 py-1 bg-gray-700 text-gray-300 rounded-full font-medium"
                                            >
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}