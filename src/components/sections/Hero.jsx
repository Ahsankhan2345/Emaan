import { motion } from "framer-motion";
import { FiMail, FiDownload, FiLinkedin, FiGithub } from 'react-icons/fi'; 

// ⚠️ MOCK PROFILE DATA (for demonstration since the actual file is external)
const mockProfile = {
    name: "Eman Shahbaz", 
    tagline: "Deploying Intelligent AI Automation Solutions for Business Efficiency.", 
    expertise: "AI AUTOMATION ENGINEER", 
    // UPDATED: Top 4 skills from Eman's CV
    skills: ["Python", "LangChain", "n8n", "LLMs"], 
    resume: "/Eman-CV.pdf", // UPDATED: Resume link hint
    linkedin: "https://linkedin.com/in/eman-shahbaz", 
    github: "https://github.com/eman-shahbaz" // UPDATED: GitHub Placeholder
};
const profile = mockProfile;
//

// Framer Motion Variants (Remains the same)
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
};

export default function Hero() {

    // ✅ Data Check: Social Links
    const name = profile.name || "AI Automation Engineer";
    const tagline = profile.tagline || "Deploying Intelligent AI Automation Solutions for Business Efficiency.";
    const expertise = profile.expertise || "AI AUTOMATION ENGINEER";
    const skills = Array.isArray(profile.skills) ? profile.skills : [];
    const resume = profile.resume || "#";
    const linkedin = profile.linkedin || "#"; 
    const github = profile.github || "#"; 

    const profileImage = "https://plus.unsplash.com/premium_photo-1680700308566-543a60569017?q=80&w=435&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"; 

    // Array for Social Links to map easily
    const socialLinks = [
        { icon: FiLinkedin, href: linkedin, label: 'LinkedIn' },
        { icon: FiGithub, href: github, label: 'GitHub' },
    ];


    return (
        // Deep Dark background for high contrast
        // ✅ FIX 1: Changed min-h-screen to min-h-[90vh] and added pt-24 (padding top) for fixed Navbar clearance
        <section className="min-h-[90vh] flex items-center bg-gray-950 text-white relative overflow-hidden pt-24 pb-16">
            
            {/* 1. Video Background Element (Subtle, Opacity 10%) */}
            <video 
                autoPlay 
                loop 
                muted 
                playsInline 
                className="absolute inset-0 w-full h-full object-cover z-0 opacity-10" 
            >
                <source src="/videos/ai_background.mp4" type="video/mp4" /> 
                Your browser does not support the video tag.
            </video>

            {/* 2. Dark Overlay with Subtle Gradient (Modern Effect) */}
            {/* ❌ REMOVED: The highly opaque bg-gray-950 opacity-90 overlay div to fix the "overlay" issue. */}
            
            {/* ✅ FIX 2: Updated gradient to ensure bottom stays dark and transitions smoothly */}
            <div className="absolute inset-0 z-10 bg-gradient-to-t from-gray-950 via-gray-950/70 to-transparent"></div>


            {/* 3. Content Container */}
            {/* ✅ FIX 3: Removed py-24 as vertical spacing is now handled by the <section> tag */}
            <div className="container mx-auto px-6 grid md:grid-cols-[1.5fr_1fr] gap-16 items-center z-20">

                {/* Left Side: Headline, Value, Skills, CTAs */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    
                    {/* Unique Highlighted Expertise Tag (Professional) with Line/Separator */}
                    <motion.div variants={itemVariants} className="mb-6 max-w-fit">
                        <p className="text-sm font-bold uppercase tracking-widest text-indigo-400 pb-1">
                            {expertise}
                        </p>
                        {/* The requested Line/Separator */}
                        <div className="w-full h-0.5 bg-indigo-400 rounded-full"></div>
                    </motion.div>
                    
                    
                    {/* Main Headline (Fully Responsive Font Sizes) */}
                    <motion.h1 variants={itemVariants} className="text-5xl lg:text-7xl font-extrabold leading-tight">
                        
                            Hello, I'm <span className="text-cyan-400 block">{name}</span> 
                            {/* Tagline for value proposition (Responsive Font Sizes) */}
                            <span className="text-gray-300 block text-3xl sm:text-4xl lg:text-5xl mt-2 font-semibold">{tagline}</span> 
                    </motion.h1>

                    {/* Value Proposition/Short Bio */}
                    <motion.p variants={itemVariants} className="mt-5 text-lg text-gray-400 max-w-xl">
                        I specialize in building intelligent automation workflows, LLM-powered agents, and WhatsApp systems to streamline business processes and drive operational efficiency.
                    </motion.p>
                    
                    {/* Top Skills Badges (Fully Responsive) */}
                    <motion.div variants={itemVariants} className="mt-8 flex flex-wrap gap-3">
                        {skills.slice(0, 4).map((skill, index) => ( 
                            <span 
                                key={index} 
                                className="px-4 py-1.5 bg-indigo-700/50 text-indigo-300 rounded-full text-sm font-semibold shadow-md hover:bg-indigo-600 transition-colors" 
                            >
                                {skill}
                            </span>
                        ))}
                    </motion.div>


                    {/* Dual Call-to-Action (Responsive Layout: stack on mobile, row on tablet/desktop) */}
                    <motion.div variants={itemVariants} className="mt-10 flex flex-col sm:flex-row gap-4">
                        
                        {/* Primary CTA: Contact Me (Bright Cyan) */}
                        <a 
                            href="#contact" 
                            className="px-8 py-3 bg-cyan-400 text-gray-900 rounded-lg font-bold text-lg shadow-xl hover:bg-cyan-300 transition-all transform hover:scale-[1.03] flex items-center justify-center gap-2"
                        >
                            <FiMail className="w-5 h-5"/> Start A Project Now
                        </a>
                        
                        {/* Secondary CTA: Download Resume (Subtle and Professional) */}
                        <a
                            href={resume}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-8 py-3 border border-indigo-400/50 text-indigo-300 rounded-lg font-semibold text-lg hover:bg-indigo-900 transition-colors flex items-center justify-center gap-2"
                        >
                            <FiDownload className="w-5 h-5"/> View Resume
                        </a>
                    </motion.div>
                </motion.div>

                {/* Right Side: Profile Image + Social Links (Advanced Layout) */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
                    className="w-full flex justify-center p-8 relative order-first md:order-last" // ✅ FIX 4: Image comes first on mobile, last on desktop
                >
                    {/* Social Links Bar (Vertical on the side) */}
                    <div className="absolute top-1/2 -left-1 transform -translate-y-1/2 hidden lg:flex flex-col gap-6 p-2 rounded-full bg-gray-800 shadow-lg">
                        {socialLinks.map((link, index) => (
                            <motion.a
                                key={index}
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.8 + index * 0.1 }}
                                className="text-gray-400 hover:text-cyan-400 transition-colors"
                                aria-label={link.label}
                            >
                                <link.icon className="w-6 h-6"/>
                            </motion.a>
                        ))}
                    </div>

                    {/* Profile Image Container */}
                    <div className="relative w-72 h-72 sm:w-80 sm:h-80 rounded-full bg-gray-800 p-2 shadow-[0_0_40px_rgba(6,182,212,0.4)]">
                        {/* Animated Ring (Using bright Cyan/Teal) */}
                        <motion.div
                            animate={{ scale: [1, 1.05, 1], opacity: [0.5, 1, 0.5] }}
                            transition={{ duration: 4, repeat: Infinity }}
                            className="absolute inset-0 border-4 border-cyan-400/50 rounded-full"
                        ></motion.div>
                        
                        <img 
                            src={profileImage}
                            alt={name}
                            className="w-full h-full object-cover rounded-full border-4 border-gray-700 shadow-lg"
                        />
                    </div>
                </motion.div>

            </div>
        </section>
    );
}