import { motion } from "framer-motion";

// --- Tailwind Utility Classes (For Dark Theme Consistency) ---
const ACCENT_CLASSES = {
    'text-cyan-500': 'text-cyan-500',
    'bg-pink-600': 'bg-pink-600', 
    'hover:bg-pink-700': 'hover:bg-pink-700',
    'text-white': 'text-white',
    'hover:text-cyan-500': 'hover:text-cyan-500',
};

export default function Navbar() {
  const links = [
    { name: "Services", href: "#services" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    // Added Skills link
    // 'Contact' link is covered by the dedicated 'Hire Me' CTA button
  ];

  return (
    // Header Styling: Dark background with subtle blur for a modern look
    <header className="fixed top-0 left-0 w-full bg-gray-950/90 backdrop-blur shadow-xl z-50 transition-all duration-300">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Branding / Logo */}
        <h1 className="font-extrabold text-xl text-white">
            <a href="#" className="hover:opacity-90">
                <span className={ACCENT_CLASSES['text-cyan-500']}>E</span>MAN <span className={ACCENT_CLASSES['text-cyan-500']}>S</span>HEHBAZ
            </a>
        </h1>

        {/* Navigation Links (Desktop) */}
        <nav className="hidden md:flex space-x-6">
          {links.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className={`text-gray-300 font-medium transition-colors ${ACCENT_CLASSES['hover:text-cyan-500']}`}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* CTA Button (Desktop) - Using Pink Accent */}
        <motion.a
            href="#contact"
            // Adding motion for a subtle hover effect consistent with other components
            whileHover={{ scale: 1.05 }}
            className={`hidden md:block px-5 py-2 font-semibold ${ACCENT_CLASSES['text-white']} rounded-lg ${ACCENT_CLASSES['bg-pink-600']} ${ACCENT_CLASSES['hover:bg-pink-700']} transition-colors shadow-md`}
        >
          Hire Me
        </motion.a>
        
        {/* Placeholder for Mobile Burger Menu Icon (to be implemented) */}
        <button className="md:hidden text-white">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
        </button>
      </div>
    </header>
  );
}