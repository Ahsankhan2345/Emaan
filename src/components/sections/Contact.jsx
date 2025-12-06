import SectionTitle from "../common/SectionTitle"; 
import { motion } from "framer-motion";
import { FiMail, FiPhone, FiLinkedin, FiGithub } from 'react-icons/fi';

// ⚠️ MOCK PROFILE DATA UPDATED for Eman Shahbaz (using the confirmed LinkedIn link)
const mockProfile = {
    email: "emanshahbaze@gmail.com",
    phone: "+92 3136550453", 
    linkedin: "https://linkedin.com/in/eman-shahbaz", // ✅ Confirmed LinkedIn URL
    github: "https://github.com/eman-shahbaz-ai" // Placeholder based on AI/Automation focus
};

// --- Tailwind Utility Classes (For Dark Theme Consistency) ---
const ACCENT_CLASSES = {
    'text-cyan-500': 'text-cyan-500',
    'bg-pink-600': 'bg-pink-600', 
    'hover:bg-pink-700': 'hover:bg-pink-700',
};

// Data for form dropdowns (Updated for Eman's LLM/Automation Niche)
const projectTypes = [
    "LLM Agent / Custom AI Chatbot", 
    "Full Workflow Automation (n8n, APIs)", 
    "AI Research & NLP System", 
    "General Automation Inquiry", 
    "Other / General Inquiry"
];
const budgetRanges = [
    "Below $1,000 (Discovery Phase)", "$1,000 - $3,000 (Pilot Project)", 
    "$3,000 - $7,000 (Standard Automation)", "$7,000+ (Enterprise Solution)"
];


export default function Contact() {
    
    // Using mockProfile for demonstration
    const profile = mockProfile; 

    return (
        // Dark Theme Background (bg-gray-950)
        <section id="contact" className="py-24 bg-gray-950 text-white">
            <div className="container mx-auto px-6">
                
                {/* 1. Main Section Title (UPDATED for Eman's Niche) */}
                <div className="mb-16 text-center max-w-5xl mx-auto">
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        viewport={{ once: true }}
                        // HUGE FONT SIZE: text-5xl on mobile, text-7xl on desktop
                        className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-4"
                    >
                        Ready to Automate Your <span className={ACCENT_CLASSES['text-cyan-500']}>Workflows with AI</span>?
                    </motion.h1>
                    <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
                        I specialize in building intelligent LLM-powered agents and n8n automation pipelines that deliver measurable efficiency gains and scalable solutions. Let's discuss your project.
                    </p>
                </div>
                
                {/* Main Two-Column Layout */}
                <div className="grid md:grid-cols-12 gap-12">
                    
                    {/* LEFT COLUMN: Contact Form (Lead Qualification) - Wider Column */}
                    <motion.div 
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7 }}
                        viewport={{ once: true }}
                        className="md:col-span-8 p-8 bg-gray-800/80 border border-gray-700/50 rounded-xl shadow-2xl"
                    >
                        <h3 className="text-2xl font-bold mb-6 text-white">Project Inquiry Form</h3>
                        
                        <form className="grid gap-6">
                            
                            {/* Name and Email */}
                            <div className="grid sm:grid-cols-2 gap-4">
                                <input className="p-4 border border-gray-700 rounded-lg bg-gray-900 text-white placeholder-gray-500 focus:ring-1 focus:ring-cyan-500" placeholder="Your Full Name" required />
                                <input type="email" className="p-4 border border-gray-700 rounded-lg bg-gray-900 text-white placeholder-gray-500 focus:ring-1 focus:ring-cyan-500" placeholder="Your Work Email" required />
                            </div>
                            
                            {/* Project Type and Budget (Lead Qualification) */}
                            <div className="grid sm:grid-cols-2 gap-4">
                                {/* Project Type Dropdown */}
                                <select 
                                    className="p-4 border border-gray-700 rounded-lg bg-gray-900 text-white focus:ring-1 focus:ring-cyan-500 appearance-none" 
                                    defaultValue="" 
                                    required
                                >
                                    <option value="" disabled hidden>What type of project is this?</option>
                                    {projectTypes.map((type, idx) => <option key={idx} value={type}>{type}</option>)}
                                </select>
                                
                                {/* Budget Range Dropdown */}
                                <select 
                                    className="p-4 border border-gray-700 rounded-lg bg-gray-900 text-white focus:ring-1 focus:ring-cyan-500 appearance-none" 
                                    defaultValue="" 
                                    required
                                >
                                    <option value="" disabled hidden>What is your budget range?</option>
                                    {budgetRanges.map((budget, idx) => <option key={idx} value={budget}>{budget}</option>)}
                                </select>
                            </div>

                            {/* Project Details Textarea */}
                            <textarea 
                                className="p-4 border border-gray-700 rounded-lg bg-gray-900 text-white placeholder-gray-500 focus:ring-1 focus:ring-cyan-500" 
                                rows="6" 
                                placeholder="Describe your project: What is the problem, what is the desired outcome, and your timeline?" 
                                required
                            ></textarea>

                            {/* Submit Button */}
                            <button 
                                type="submit" 
                                className={`px-6 py-4 mt-2 text-lg font-bold text-white rounded-lg shadow-md ${ACCENT_CLASSES['bg-pink-600']} ${ACCENT_CLASSES['hover:bg-pink-700']} transition-colors`}
                            >
                                Send Project Inquiry
                            </button>
                        </form>
                    </motion.div>

                    {/* RIGHT COLUMN: Direct Info and Links - Narrower Column */}
                    <motion.div 
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7 }}
                        viewport={{ once: true }}
                        className="md:col-span-4 p-8 bg-gray-800/80 border border-gray-700/50 rounded-xl h-fit"
                    >
                        {/* 2. Direct Contact Heading */}
                        <h3 className={`text-3xl font-extrabold mb-6 text-white`}><span className={ACCENT_CLASSES['text-cyan-500']}>Instant</span> Connect</h3>
                        
                        {/* Email */}
                        <div className="flex items-center mb-4">
                            <FiMail className={`w-6 h-6 mr-3 ${ACCENT_CLASSES['text-cyan-500']}`} />
                            <div>
                                <p className="text-sm text-gray-400">Email Address</p>
                                <a href={`mailto:${profile.email}`} className="text-white font-medium hover:text-cyan-500">{profile.email}</a>
                            </div>
                        </div>
                        
                        {/* Phone */}
                        <div className="flex items-center mb-6">
                            <FiPhone className={`w-6 h-6 mr-3 ${ACCENT_CLASSES['text-cyan-500']}`} />
                            <div>
                                <p className="text-sm text-gray-400">Phone/WhatsApp</p>
                                <a href={`tel:${profile.phone}`} className="text-white font-medium hover:text-cyan-500">{profile.phone}</a>
                            </div>
                        </div>

                        {/* Professional Links */}
                        <h3 className="text-xl font-bold mb-4 text-cyan-500 border-t border-gray-700/50 pt-4">Connect Professionally</h3>
                        <div className="flex space-x-4">
                            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" title="LinkedIn Profile"
                                className={`p-3 rounded-full bg-gray-900 border border-gray-700/50 text-white hover:bg-cyan-500 transition-colors`}>
                                <FiLinkedin className="w-5 h-5" />
                            </a>
                            <a href={profile.github} target="_blank" rel="noopener noreferrer" title="GitHub Repositories"
                                className={`p-3 rounded-full bg-gray-900 border border-gray-700/50 text-white hover:bg-cyan-500 transition-colors`}>
                                <FiGithub className="w-5 h-5" />
                            </a>
                        </div>

                    </motion.div>
                </div>
            </div>
        </section>
    );
}