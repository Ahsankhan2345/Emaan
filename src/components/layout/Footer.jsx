import { motion } from "framer-motion";
import { FiMail, FiPhone, FiLinkedin, FiGithub } from 'react-icons/fi'; // Icons imported for professional look

// ⚠️ MOCK PROFILE DATA UPDATED for Eman Shahbaz
const mockProfile = {
    email: "emanshahbaze@gmail.com",
    phone: "+92 3136550453",
    linkedin: "https://linkedin.com/in/eman-shahbaz", // Confirmed Link
    github: "https://github.com/eman-shahbaz-ai", // AI/Automation Placeholder
    name: "EMAN SHAHBAZ"
};
const profile = mockProfile;

// --- Tailwind Utility Classes (For Dark Theme Consistency) ---
const ACCENT_CLASSES = {
    'text-cyan-500': 'text-cyan-500',
    'bg-pink-600': 'bg-pink-600', 
    'hover:bg-pink-700': 'hover:bg-pink-700',
    'text-white': 'text-white',
    'hover:text-cyan-500': 'hover:text-cyan-500',
};

// Footer Navigation Links
const footerNav = [
    { name: "Services", href: "#services" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" }, 
];


export default function Footer() {
    
    const currentYear = new Date().getFullYear();

    return (
        // Footer Section: Dark Theme
        <footer className="bg-gray-950 border-t border-gray-800 text-white pt-16">
            <div className="container mx-auto px-6">
                
                {/* Main Grid: 4 Columns (Branding, Links, Contact) */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-gray-800">
                    
                    {/* Column 1: Branding and Tagline (UPDATED) */}
                    <div className="md:col-span-1">
                        <h3 className={`text-2xl font-extrabold ${ACCENT_CLASSES['text-cyan-500']}`}>
                            {profile.name}
                        </h3>
                        {/* Updated Tagline for AI Automation & LLMs */}
                        <p className="mt-2 text-gray-400 max-w-sm text-sm">
                            LLM Agents, AI Automation, and Intelligent Workflow Solutions designed for measurable business efficiency.
                        </p>
                        <motion.a
                            href="#contact"
                            whileHover={{ scale: 1.05 }}
                            className={`inline-block mt-6 text-sm font-semibold text-white px-5 py-2 rounded-lg ${ACCENT_CLASSES['bg-pink-600']} ${ACCENT_CLASSES['hover:bg-pink-700']} transition-all`}
                        >
                            Get a Quote →
                        </motion.a>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div>
                        <h4 className="text-lg font-bold mb-4 text-white">Quick Navigation</h4>
                        <ul className="space-y-3">
                            {footerNav.map((item) => (
                                <li key={item.name}>
                                    <a 
                                        href={item.href} 
                                        className={`text-gray-400 hover:text-white transition-colors duration-200 text-sm`}
                                    >
                                        {item.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    
                    {/* Column 3: Contact Details (UPDATED) */}
                    <div>
                        <h4 className="text-lg font-bold mb-4 text-white">Direct Contact</h4>
                        <ul className="space-y-3">
                            {/* Email */}
                            <li className="flex items-center">
                                <FiMail className={`w-4 h-4 mr-2 ${ACCENT_CLASSES['text-cyan-500']}`} />
                                <a href={`mailto:${profile.email}`} className="text-gray-400 hover:text-white text-sm">
                                    {profile.email}
                                </a>
                            </li>
                            {/* Phone */}
                            <li className="flex items-center">
                                <FiPhone className={`w-4 h-4 mr-2 ${ACCENT_CLASSES['text-cyan-500']}`} />
                                <a href={`tel:${profile.phone}`} className="text-gray-400 hover:text-white text-sm">
                                    {profile.phone}
                                </a>
                            </li>
                        </ul>
                    </div>
                    
                    {/* Column 4: Connect Socially (UPDATED Links) */}
                    <div>
                        <h4 className="text-lg font-bold mb-4 text-white">Connect</h4>
                        <div className="flex space-x-4">
                            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" title="LinkedIn"
                                className={`p-2 rounded-full bg-gray-800 text-gray-400 hover:text-white hover:bg-cyan-500 transition-colors`}>
                                <FiLinkedin className="w-5 h-5" />
                            </a>
                            <a href={profile.github} target="_blank" rel="noopener noreferrer" title="GitHub"
                                className={`p-2 rounded-full bg-gray-800 text-gray-400 hover:text-white hover:bg-cyan-500 transition-colors`}>
                                <FiGithub className="w-5 h-5" />
                            </a>
                        </div>
                    </div>
                    
                </div>
                
                {/* Bottom Bar: Copyright and Legal (UPDATED Name) */}
                <div className="flex flex-col sm:flex-row justify-between items-center py-6 text-sm text-gray-500">
                    <p className="order-2 sm:order-1 mt-4 sm:mt-0">
                        &copy; {currentYear} {profile.name}. All rights reserved.
                    </p>
                    <div className="order-1 sm:order-2 space-x-4">
                        <a href="#privacy" className="hover:text-white">Privacy Policy</a>
                        <a href="#terms" className="hover:text-white">Terms of Service</a>
                    </div>
                </div>

            </div>
        </footer>
    );
}