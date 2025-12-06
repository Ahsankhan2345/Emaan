import { motion } from "framer-motion";
import SectionTitle from "../common/SectionTitle";
// Icons import: FiCpu (ML/NLP), FiZap (Automation), FiMessageCircle (Chatbot), FiSend (WhatsApp)
import { FiCpu, FiCode, FiZap, FiMessageCircle, FiSend, FiBriefcase } from 'react-icons/fi';

// 🚀 CORE SERVICE OFFERINGS (UPDATED for Eman Shahbaz's AI Automation Expertise)
const servicesData = [
    { 
        title: "Intelligent Workflow Automation (n8n/Make)", 
        description: "I eliminate operational bottlenecks by designing smart, high-ROI automation pipelines. Using n8n, Zapier, and custom API scripts, I ensure maximum business efficiency and reduce manual workload.",
        icon: FiZap, // Zap Icon for Automation
        color: "text-yellow-400",
        iconBg: "bg-yellow-400/20",
        hoverBorder: "hover:border-yellow-500"
    },
    { 
        title: "LLM-Powered Conversational Agents", 
        description: "I engineer conversational intelligence that drives better engagement. I leverage LangChain and custom RAG to build intelligent chatbots that can handle meeting scheduling, complex queries, and automated decision-making.",
        icon: FiMessageCircle, // Chat Icon for LLMs/Bots
        color: "text-purple-400",
        iconBg: "bg-purple-400/20",
        hoverBorder: "hover:border-purple-500"
    },
    { 
        title: "End-to-End WhatsApp Automation Systems", 
        description: "Specializing in high-volume communication, I build custom WhatsApp Agents for marketing, lead nurturing, and service booking (as demonstrated in my portfolio), integrated via WhatsApp Cloud API.",
        icon: FiSend, // Send Icon for Messaging/API
        color: "text-cyan-400",
        iconBg: "bg-cyan-400/20",
        hoverBorder: "hover:border-cyan-500"
    },
    { 
        title: "Custom Machine Learning & NLP Solutions", // Focus on her AI News Detector project and general ML skills
        description: "I develop specialized ML systems, including NLP models for classification (e.g., misinformation detection) and data processing, delivering data-driven insights and specialized AI capabilities.",
        icon: FiCpu, // CPU Icon for ML/Algorithms
        color: "text-teal-400",
        iconBg: "bg-teal-400/20",
        hoverBorder: "hover:border-teal-500"
    },
];

// 🚀 AI ENGINEER'S PROJECT LIFECYCLE (Kept generic, still relevant for Automation projects)
const processSteps = [
    { 
        id: 1, 
        title: "Technical Deep Dive", 
        description: "We analyze your exact problem, existing data, and infrastructure. We define measurable success metrics and a clear Statement of Work (SOW).",
        icon: '1' 
    },
    { 
        id: 2, 
        title: "Architecture & Proposal", 
        description: "I design the optimal technical architecture (tool stack, LLM workflow, API integration points). A fixed-price proposal with clear timelines is presented.",
        icon: '2' 
    },
    { 
        id: 3, 
        title: "Agile Development & Testing", 
        description: "I build the solution using Agile sprints, providing frequent demo builds and rigorously testing the workflow's reliability and integration accuracy.",
        icon: '3' 
    },
    { 
        id: 4, 
        title: "Deployment & Support", 
        description: "The solution is deployed to a production environment (cloud/on-premise). I ensure proper documentation, system monitoring, and 30-day post-launch support.",
        icon: '4' 
    },
];

// ⚠️ Tailwind Utility Classes for dynamic styling. 
const ACCENT_CLASSES = {
    // Primary Accent (Pink/Cyan from Hero)
    'bg-pink-600': 'bg-pink-600', 'hover:bg-pink-700': 'hover:bg-pink-700', 'text-pink-600': 'text-pink-600', 
    'text-cyan-500': 'text-cyan-500', 'text-cyan-400': 'text-cyan-400', 'bg-cyan-400/20': 'bg-cyan-400/20', 'hover:border-cyan-500': 'hover:border-cyan-500', 'hover:text-cyan-400': 'hover:text-cyan-400', 

    // Card Specific Accents (Dark Theme)
    'text-purple-400': 'text-purple-400', 'bg-purple-400/20': 'bg-purple-400/20', 'hover:border-purple-500': 'hover:border-purple-500', 'hover:text-purple-400': 'hover:text-purple-400',
    'text-yellow-400': 'text-yellow-400', 'bg-yellow-400/20': 'bg-yellow-400/20', 'hover:border-yellow-500': 'hover:border-yellow-500', 'hover:text-yellow-400': 'hover:text-yellow-400',
    'text-teal-400': 'text-teal-400', 'bg-teal-400/20': 'bg-teal-400/20', 'hover:border-teal-500': 'hover:border-teal-500', 'hover:text-teal-400': 'hover:text-teal-400',
};


export default function Services() {
    
    const services = servicesData;

    return (
        // Dark Theme Background (bg-gray-950)
        <section id="services" className="py-24 bg-gray-950 text-white">
            <div className="container mx-auto px-6">
            
                {/* 1. Main Section Title (UPDATED: Focused on AI Automation) */}
                <div className="mb-16 text-center">
                    <SectionTitle 
                        // **BIG AND ATTRACTIVE TITLE**
                        title={<>Deploying High-Impact <span className={ACCENT_CLASSES['text-cyan-500']}>AI Automation</span> Solutions</>}
                        // Enhanced Subtitle
                        subtitle="I don't just build workflows; I deliver intelligent, high-ROI automation systems that drive measurable business outcomes and operational efficiency."
                        className="text-white"
                        // Note: If SectionTitle component supports size change, you'd apply it here. 
                        // Assuming SectionTitle handles H1/H2 styling, the text itself is made bolder.
                    />
                </div>
                
                {/* Services Grid Container */}
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                    {services.map((service, i) => {
                        
                        const IconComponent = service.icon || FiCode; 
                        
                        const accentText = ACCENT_CLASSES[service.color]; 
                        const accentIconBg = ACCENT_CLASSES[service.iconBg]; 
                        const accentHoverBorder = ACCENT_CLASSES[service.hoverBorder]; 
                        const accentHoverText = ACCENT_CLASSES[`hover:${service.color}`]; 

                        return (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: i * 0.1 }}
                                viewport={{ once: true, amount: 0.4 }}
                                // Card Styling (Dark Theme, subtle background)
                                className={`p-8 bg-gray-800/80 border border-gray-700/50 rounded-xl backdrop-blur-sm transition-all duration-300 transform hover:shadow-xl hover:bg-gray-700 ${accentHoverBorder} group`}
                            >
                                {/* Icon Container (Circular background, accent color) */}
                                <div className={`mb-6 w-12 h-12 inline-flex items-center justify-center rounded-full ${accentIconBg} ${accentText}`}>
                                    <IconComponent className="w-6 h-6"/>
                                </div>

                                {/* Title */}
                                <h3 className="font-extrabold text-xl mb-3 text-white">
                                    {service.title}
                                </h3>

                                {/* Description (I-Focused, text-gray-400 for contrast) */}
                                <p className="text-gray-400 text-base mb-6">
                                    {service.description}
                                </p>
                                
                                {/* Read More Link (Updated for Freelancing) */}
                                <a 
                                    href="#contact"
                                    className={`text-sm font-semibold text-gray-300 inline-flex items-center transition-all duration-300 ${accentHoverText} group-hover:pl-1`}
                                >
                                    Discuss Project Scope →
                                    <svg className="w-4 h-4 ml-1 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                                </a>
                            </motion.div>
                        );
                    })}
                </div>

                {/* --- NEW: AI ENGINEER WORKING PROCESS SECTION --- */}
                <div className="mt-24 pt-12 border-t border-gray-800">
                    {/* 2. Process Section Heading (UPDATED: Focused on AI Project Success) */}
                    <h2 className={`text-4xl lg:text-5xl font-extrabold text-center mb-12 text-white leading-tight`}>
                        The Proven <span className={ACCENT_CLASSES['text-cyan-500']}>Blueprint for Automation</span> Success
                    </h2>
                    
                    {/* Process steps are mapped here */}
                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 relative">
                        {processSteps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.15 }}
                                viewport={{ once: true, amount: 0.4 }}
                                className="p-6 text-center rounded-xl bg-gray-800/60 border border-gray-700/50 hover:bg-gray-800 transition-colors duration-300"
                            >
                                {/* Step Number (Pink Accent) */}
                                <div className={`mb-4 w-12 h-12 mx-auto inline-flex items-center justify-center rounded-full text-white font-bold text-xl ${ACCENT_CLASSES['bg-pink-600']} shadow-lg`}>
                                    {step.icon}
                                </div>
                                
                                {/* Process Step Title (H3, conventional) */}
                                <h3 className="font-extrabold text-xl mb-2 text-white">{step.title}</h3>
                                <p className="text-gray-400 text-sm">{step.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
                {/* --- END OF PROCESS SECTION --- */}
                
                {/* Global CTA Button (Updated for Professional Quote Request) */}
                <div className="mt-20 text-center">
                    {/* Urgency message with standard formatting */}
                    <p className={`text-xl font-bold mb-5 ${ACCENT_CLASSES['text-cyan-400']}`}>
                        Limited Slots Available: Start deploying intelligent solutions today.
                    </p>
                    <motion.a 
                        href="#contact"
                        whileHover={{ scale: 1.05 }}
                        className={`inline-block text-xl font-bold text-white ${ACCENT_CLASSES['bg-pink-600']} py-3 px-10 rounded-lg shadow-xl ${ACCENT_CLASSES['hover:bg-pink-700']} transition-all`}
                    >
                        Request Technical Scope & Quote →
                    </motion.a>
                </div>
            </div>
        </section>
    );
}