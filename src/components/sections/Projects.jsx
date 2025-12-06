import { motion } from "framer-motion";
import SectionTitle from "../common/SectionTitle";
// Icons for links
import { FiArrowRight, FiGithub, FiExternalLink } from 'react-icons/fi';

// ⚠️ MOCK DATA UPDATED for Eman Shahbaz's expertise (AI Automation, LLMs, NLP)
const featuredProjectsData = [
    {
        title: "Intelligent WhatsApp Scheduling Agent",
        service: "Smart Workflow Automation",
        problem: "Manual booking of admissions meetings and customer query overload, leading to inefficiencies.",
        solution: "Built an automated WhatsApp assistant. Integrated n8n workflows with Google Calendar and internal CRMs to fully automate the scheduling process.",
        impact: "Achieved full automation of meeting scheduling and streamlined simultaneous user query handling on a high-volume platform.",
        tech: ["n8n Automation", "APIs", "Google Calendar", "CRMs"],
        links: [
            { type: "View Case Study", url: "#case-study", icon: FiExternalLink },
            { type: "Request Demo", url: "#contact", icon: FiArrowRight }
        ],
        // Using an abstract automation visual placeholder
        image: "https://plus.unsplash.com/premium_photo-1726079247110-5e593660c7b2?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        title: "Generative AI Customer Engagement Bot",
        service: "Generative AI & LLM Chatbots",
        problem: "Lack of personalized, scalable customer engagement and lead nurturing on messaging platforms.",
        solution: "Developed an AI bot using LangChain for LLM workflow management and dynamic message generation, integrated via WhatsApp Cloud API.",
        impact: "Enabled personalized, real-time marketing responses and robust lead nurturing automation, drastically improving conversion potential.",
        tech: ["LangChain", "LLMs", "WhatsApp Cloud API", "VectorDB"],
        links: [
            { type: "View Case Study", url: "#case-study", icon: FiExternalLink }
        ],
        // Using an abstract LLM/Chatbot visual placeholder
        image: "https://images.unsplash.com/photo-1554672408-758865e7274a?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        title: "AI News Detector (NLP System)",
        service: "Custom Machine Learning & NLP Solutions",
        problem: "Need for a reliable, web-based system to detect and classify misinformation and fake news instantly.",
        solution: "Created a web-based AI system by training NLP ML models using techniques like **TF-IDF** and preprocessing pipelines for classification.",
        impact: "Successfully created a functional, web-based tool providing high accuracy and reliable predictions for misinformation detection.",
        tech: ["Python", "NLP", "Machine Learning", "TF-IDF"],
        links: [
            { type: "View Code", url: "#code", icon: FiGithub }
        ],
        // Using an abstract AI/Data visual placeholder
        image: "https://media.istockphoto.com/id/1207258967/photo/scibody-background.jpg?s=1024x1024&w=is&k=20&c=v8bEs1DzqLhKLLz-x42IouIovpm4PhjjDmrTz7DiIak="
    },
];

// --- Tailwind Utility Classes (Copied from Services Component for consistency) ---
const ACCENT_CLASSES = {
    'text-cyan-500': 'text-cyan-500',
    'bg-pink-600': 'bg-pink-600', 
    'hover:bg-pink-700': 'hover:bg-pink-700',
    'text-pink-600': 'text-pink-600',
};

export default function Projects() {
    const projects = featuredProjectsData; // Using mock data for functionality
    
    return (
        // Dark Theme Background (bg-gray-950)
        <section id="projects" className="py-24 bg-gray-950 text-white">
            <div className="container mx-auto px-6">
                
                {/* Section Title - Made More Attractive */}
                <div className="mb-16 text-center">
                    <SectionTitle 
                        title={<>Case Studies: Measurable <span className={ACCENT_CLASSES['text-cyan-500']}>Impact</span> Delivered</>} 
                        subtitle="Detailed look into challenges solved and scalable solutions implemented using AI Automation and LLM Technologies." // UPDATED subtitle
                        className="text-white"
                    />
                </div>
                
                {/* Projects Grid Container (3-Column Layout) */}
                <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
                    {projects.map((p, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: i * 0.1 }}
                            viewport={{ once: true, amount: 0.2 }}
                            // Card Styling (Dark Theme, border, subtle hover effect)
                            className="bg-gray-800/80 border border-gray-700/50 rounded-xl overflow-hidden shadow-2xl transition-all duration-300 transform hover:scale-[1.01] hover:shadow-cyan-900/30"
                        >
                            {/* Project Image Placeholder */}
                            <div className="h-48 bg-cover bg-center" style={{ 
                                backgroundImage: `url(${p.image})`,
                                // Fallback styling for the abstract network background
                                backgroundSize: 'cover', 
                                backgroundPosition: 'center', 
                                backgroundColor: '#1f2937' 
                            }}>
                                <div className="p-3 bg-gray-900/80 inline-block text-xs font-semibold rounded-br-lg">
                                    {p.service}
                                </div>
                                <img 
                                    src={p.image} 
                                    alt={p.title} 
                                    className="w-full h-full object-cover opacity-20"
                                />
                            </div>

                            {/* Content Area */}
                            <div className="p-6">
                                <h3 className="font-extrabold text-2xl mb-4 text-white">{p.title}</h3>
                                
                                {/* 🎯 Challenge/Problem Heading */}
                                <div className="mb-4">
                                    <h4 className={`text-base font-bold uppercase mb-1 ${ACCENT_CLASSES['text-pink-600']}`}>
                                        <span className="mr-2">🔥</span> The Challenge
                                    </h4>
                                    <p className="text-gray-400 text-base">{p.problem}</p>
                                </div>

                                {/* 💡 Solution Heading */}
                                <div className="mb-6">
                                    <h4 className={`text-base font-bold uppercase mb-1 ${ACCENT_CLASSES['text-cyan-500']}`}>
                                        <span className="mr-2">🚀</span> The Solution
                                    </h4>
                                    <p className="text-gray-400 text-base">{p.solution}</p>
                                </div>

                                {/* Measurable Impact (The most important part, highlighted) */}
                                <div className={`p-3 rounded bg-cyan-400/10 mb-6 border-l-4 border-cyan-500`}>
                                    <p className={`font-semibold text-sm ${ACCENT_CLASSES['text-cyan-500']}`}>
                                        ✅ Key Impact:
                                    </p>
                                    <p className="text-gray-200 text-base font-medium">
                                        {p.impact}
                                    </p>
                                </div>

                                {/* Tech Stack Tags */}
                                <div className="mt-4 mb-6 flex gap-2 flex-wrap">
                                    {p.tech.map((t, idx) => (
                                        <span 
                                            key={idx} 
                                            className="text-xs px-3 py-1 bg-gray-700 text-gray-300 rounded-full font-medium"
                                        >
                                            {t}
                                        </span>
                                    ))}
                                </div>

                                {/* Action Links */}
                                <div className="mt-4 flex gap-4">
                                    {p.links.map((link, idx) => {
                                        const IconComponent = link.icon;
                                        return (
                                            <a
                                                key={idx}
                                                href={link.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className={`inline-flex items-center text-sm font-semibold transition-colors duration-300 ${ACCENT_CLASSES['text-pink-600']} hover:text-white hover:bg-pink-600 border border-pink-600 py-2 px-4 rounded-lg`}
                                            >
                                                <IconComponent className="w-4 h-4 mr-2" />
                                                {link.type}
                                            </a>
                                        );
                                    })}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}